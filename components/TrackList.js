import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useGetTracksQuery } from './store/api';
import Track from './Track';
import styles from './TrackList.module.css';

function SongList() {
  const moods = useSelector(state => state.moods.value);
  const [skip, setSkip] = useState(true);
  const { data: tracks, error, isUninitialized, isFetching, refetch } = useGetTracksQuery(moods, {
    skip,
  });

  useEffect(() => {
    if (moods == null || moods.length === 0) {
      return;
    } else if (skip) {
      setSkip(false);
    } else {
      refetch();
    }
  }, [moods]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      {error ? <>Oh no,there was an error.</>
      : isUninitialized ? <></>
      : isFetching ? <>loading...</>
      : tracks ? tracks.map(track => <Track key={track.id} track={track}/>)
      : null}
    </div>
  );
}

export default SongList;