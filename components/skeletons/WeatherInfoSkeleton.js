import ContentLoader from 'react-content-loader';

function WeatherInfoSkeleton() {
  return (
    <div style={{width: "282px", paddingTop: "0.8rem"}}>
      <ContentLoader
        viewBox="0 0 282 419.37"
        backgroundColor="#dedede33"
        foregroundColor="#dedede66"
        speed={1}
      >
        <rect x="22.23" width="244.47" height="44.46" rx="5.12"/>
        <rect x="80.18" y="91.69" width="123.43" height="104.66" rx="48.54"/>
        <rect x="87.38" y="227.05" width="107.66" height="47.2" rx="3.35"/>
        <rect x="24.29" y="281.78" width="233.84" height="24.28" rx="3.53"/>
        <rect y="336.7" width="116.18" height="20.52" rx="2.82"/>
        <rect y="367.77" width="116.18" height="20.52" rx="2.82"/>
        <rect y="398.84" width="116.18" height="20.52" rx="2.82"/>
        <rect x="165.82" y="336.7" width="116.18" height="20.52" rx="2.82"/>
        <rect x="165.82" y="367.77" width="116.18" height="20.52" rx="2.82"/>
      </ContentLoader>
    </div>
  );
}

export default WeatherInfoSkeleton;
