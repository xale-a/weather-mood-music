import Image from 'next/image';
import styles from './Track.module.css';
import PopOutIcon from '../public/pop-out.svg';
import Popup from 'reactjs-popup';
import TrackModal from './TrackModal';

function Track({ track }) {
  return (
    <div className={styles.container}>
      {track && <>
        <div className={styles.image}>
          <Image
            src={track.image}
            alt="album artwork"
            width={174}
            height={174}
            layout="responsive"
            loading="eager"
          />
        </div>

        <h1 className={styles.title}>
          {track.name}
        </h1>
        <div className={styles.artist}>
          <span>by</span> {track.artist}
        </div>

        <div className={styles.album}>
          <span>from</span> {track.album}
        </div>

        <div className={styles.link}>
          Listen on <a href={track.url.track} target="_blank" rel="noreferrer">last.fm</a>
        </div>

        <Popup
          trigger={<div className={styles.seeMore}><span>More Info</span><PopOutIcon /></div>}
          closeOnDocumentClick
          modal
          contentStyle={{animation: 'fade-in 300ms ease-in'}}
          overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        >
          {close => <TrackModal track={track} close={close} />}
        </Popup>
      </>}
    </div>
  )
}

export default Track;
