import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTracksQuery } from './store/api';
import { setRefresh } from './store/refreshSlice';
import styles from './TrackList.module.css';
import Track from './Track';
import TrackListSkeleton from './skeletons/TrackListSkeleton';

function SongList() {
  const moods = useSelector(state => state.moods.value);
  const refresh = useSelector(state => state.refresh.value);
  const [skip, setSkip] = useState(true);
  const { data: tracks, error, isUninitialized, isFetching, refetch } = useGetTracksQuery(moods, {
    skip,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (moods == null || moods.length === 0) {
      return;
    } else if (skip) {
      setSkip(false);
    } else {
      refetch();
    }
  }, [moods]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (refresh) {
      refetch();
      dispatch(setRefresh(false))
    }
  }, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      {error ? <>Oh no,there was an error.</>
      : isUninitialized ? <>
        <h2 className={styles.placeholder}>Please select your city to get music recommendations.</h2>
      </>
      : isFetching ? <>
        <TrackListSkeleton />
        <TrackListSkeleton />
        <TrackListSkeleton />
        <TrackListSkeleton />
        <TrackListSkeleton />
        <TrackListSkeleton />
      </>
      : tracks ? tracks.map(track => <Track key={track.id} track={track}/>)
      : null}
    </div>
  );
}

export default SongList;
