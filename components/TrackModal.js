import Image from 'next/image';
import styles from './TrackModal.module.css';
import { useMediaQuery } from 'react-responsive';

function TrackModal({ track, close }) {
  const isMobile = useMediaQuery({ query: '(max-width: 43.25em)' });

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <span>Artist:</span> <a href={track.url.artist} target="_blank" rel="noopener noreferrer">{track.artist}</a>
        </div>
        <div>
          <span>Track:</span> <a href={track.url.track} target="_blank" rel="noopener noreferrer">{track.name}</a>
        </div>
        <div>
          <span>Album:</span> <a href={track.url.album} target="_blank" rel="noopener noreferrer">{track.album}</a>
        </div>
        <div>
          <span>Position:</span> {track.position}
        </div>
        {!isMobile && <>
          <div>
            <span>Tags:</span> {track.tags.map((tag, index) => (
              <div className={styles.tags} key={tag.name + new Date()}>
                <a href={track.url.tags[index].url} target="_blank" rel="noopener noreferrer">{tag.name}</a>{index !== 4 ? ', ' : ' ...'}
              </div>
            ))}
          </div>
        </>}
      </div>
      {isMobile && <>
        <div className={styles.tagsContainer}>
          <span>Tags:</span> {track.tags.map((tag, index) => (
            <div className={styles.tags} key={tag.name + new Date()}>
              <a href={track.url.tags[index].url} target="_blank" rel="noopener noreferrer">{tag.name}</a>{index !== 4 ? ', ' : ' ...'}
            </div>
          ))}
        </div>
      </>}
      <div className={styles.image}>
        <Image
            src={track.image}
            alt="album artwork"
            width={174}
            height={174}
            layout="responsive"
          />
      </div>
      <div className={styles.wiki}>
        {track.wiki == '' ? 'Wiki not available...' : <>{track.wiki}... <a href={track.url.wiki} target="_blank" rel="noopener noreferrer">read more</a></>}
      </div>
      <button
        className={styles.close}
        onClick={close}
        aria-label="Close track info"
      >
        Close
      </button>
    </div>
  );
}

export default TrackModal;
