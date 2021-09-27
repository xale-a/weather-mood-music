import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux';
import { setCity } from './store/citySlice';
import styles from './CitySelect.module.css';

const AsyncSelect = dynamic(() => import('react-select/async'), {
  loading: () => <div style={{height: '41px'}}>&nbsp;</div>,
  ssr: false,
});

const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: 'var(--color-primary)',
    primary25: 'var(--color-primary-lighter)',
    primary50: 'var(--color-primary)',
    neutral0: 'var(--color-dark)', //background
    neutral20: '#eeeeee99', //border
    neutral30: '#eeeeeedd', //border-hover
    neutral40: '#eeeeeeee', //arrow hover
    neutral50: '#eeeeee77', //placeholder
    neutral60: '#eeeeee', //arrow selected
    neutral80: '#eeeeee', //typed text
  },
});

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
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

function CitySelect() {
  const dispatch = useDispatch();

  return ( 
    <div className={styles.container}>
      <AsyncSelect
        className={styles.select}
        cacheOptions
        defaultOptions
        loadOptions={getCities}
        isOptionDisabled={option => option.disabled}
        onChange={e => dispatch(setCity(e.value))}
        placeholder="Select your city..."
        theme={selectTheme}
        styles={selectStyles}
      />
    </div>
  );
}

export default CitySelect;