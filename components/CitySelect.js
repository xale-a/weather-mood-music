import dynamic from 'next/dynamic'
import { useSelector, useDispatch } from 'react-redux';
import { setCity } from './store/citySlice';
import { setRefresh } from './store/refreshSlice';
import styles from './CitySelect.module.css';
import RefreshIcon from '../public/refresh.svg';
import { useMediaQuery } from 'react-responsive';

const AsyncSelect = dynamic(() => import('react-select/async'), {
  loading: () => <div className={styles.select}>&nbsp;</div>,
  ssr: false,
});

const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: 'var(--accent-color)',
    primary25: 'var(--accent-color__4)',
    primary50: 'var(--accent-color)',
    neutral0: 'var(--primary-color)', //background
    neutral20: '#eeeeee99', //border
    neutral30: '#eeeeeedd', //border-hover
    neutral40: '#eeeeeeee', //arrow hover
    neutral50: '#eeeeee77', //placeholder
    neutral60: '#eeeeee', //arrow selected
    neutral80: '#eeeeee', //typed text
  },
});

const selectStyles = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '1px solid var(--light-gray)' : '1px solid #eeeeee99',
    boxShadow: state.isFocused ? '0 0 0 1px var(--light-gray)' : 0,

    '&:hover': {
      border: '1px solid var(--light-gray)',
    },
  }),
  option: (base, state) => ({
    ...base,
    color: state.isDisabled ? '#eeeeee55' : '#eeeeee',
  })
};

async function getCities(filter) {
  try {
    const response = await fetch(`/api/cities/?q=${filter}&limit=15`);
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    const cities = await response.json();
    return cities;
  } catch (error) {
    console.log(error.message);
  }
}

function getLocation(dispatch) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(setCity({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    });
  }
}

function CitySelect() {
  const city = useSelector(state => state.city.value);
  const dispatch = useDispatch();
  const isTabletPort = useMediaQuery({ query: '(max-width: 55em)' });
  const isTabletLand = useMediaQuery({ query: '(max-width: 80.75em)' });

  return ( 
    <div className={styles.container}>
      <AsyncSelect
        className={styles.select}
        cacheOptions
        defaultOptions
        loadOptions={getCities}
        isOptionDisabled={option => option.disabled}
        onChange={e => dispatch(setCity(e.value))}
        placeholder="Select city..."
        theme={selectTheme}
        styles={selectStyles}
        autoFocus
      />
      <span>or</span>
      <button
        className={styles.getLocation}
        onClick={() => getLocation(dispatch)}
      >
        Get current location
      </button>
      {!isTabletPort && <>
        <button
          className={`${styles.refresh} ${!isTabletLand && styles.refresh_hover}`}
          onClick={() => dispatch(setRefresh(true))}
          disabled={!city}
        >
          <RefreshIcon />
        </button>
      </>}
    </div>
  );
}

export default CitySelect;
