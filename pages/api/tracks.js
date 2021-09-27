import axios from 'axios';
import { pickRandomUnique, shuffle } from '../../lib/arrayUtils';

export default async function handler(req, res) {
  try {
    const moods = req.query.moods;
    let tracks = [];
    let fragment; // How much tracks are picked from each mood
    switch(moods.length) {
      case 1:
        fragment = 6;
        break;
      case 2:
        fragment = 3;
        break;
      case 3:
        fragment = 2;
        break;
      default:
        throw new Error('Moods length not supported');
    }

    // Pick 6 random tracks
    for (const mood of moods) {
      const tracksRes = await axios('https://ws.audioscrobbler.com/2.0/', {
        params: {
          method: 'tag.gettoptracks',
          tag: mood,
          limit: 90,
          api_key: process.env.LAST_FM_API_KEY,
          format: 'json',
        },
      });
      const tracksFilter = tracksRes.data.tracks.track.filter(track => track.mbid !== '');
      const tracksRandom = pickRandomUnique(tracksFilter, tracks, fragment);
      
      tracks = [...tracks, ...tracksRandom];
    }
    tracks = shuffle(tracks);

    // Get more info for individual track
    tracks = await Promise.all(tracks.map(async (track) => {
      const trackRes = await axios('https://ws.audioscrobbler.com/2.0/', {
        params: {
          method: 'track.getInfo',
          mbid: track.mbid,
          api_key: process.env.LAST_FM_API_KEY,
          format: 'json',
        }
      });
      const data = trackRes.data.track;
      return {
        id: data.mbid,
        name: data.name,
        artist: data.artist.name,
        album: data.album?.title ?? 'Unknown album',
        position: data.album?.['@attr']?.position ?? '',
        tags: [
          { name: data.toptags.tag[0].name },
          { name: data.toptags.tag[1].name },
          { name: data.toptags.tag[2].name },
          { name: data.toptags.tag[3].name },
          { name: data.toptags.tag[4].name },
        ],
        wiki: data.wiki?.summary.replace(/<a(.*?)<\/a>./g, '') ?? '',
        url: {
          track: data.url,
          artist: data.artist.url,
          album: data.album?.url ?? 'https://www.last.fm/music/Various+Artists/%5BUnknown+Album%5D',
          tags: [
            { url: data.toptags.tag[0].url },
            { url: data.toptags.tag[1].url },
            { url: data.toptags.tag[2].url },
            { url: data.toptags.tag[3].url },
            { url: data.toptags.tag[4].url },
          ],
          wiki: data.url.concat('/+wiki'),
        },
        image: (data.album?.image[2]['#text'] === undefined) || (data.album.image[2]['#text'] == '') ? '/album-artwork-place-holder.png' : data.album.image[2]['#text'],
      };
    }));

    res.status(200).json(tracks);
  } catch (error) {
    console.log('/api/tracks: ' + error.message);
    res.status(500).send();
  }
}
