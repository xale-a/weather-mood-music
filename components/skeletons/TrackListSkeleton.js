import ContentLoader from 'react-content-loader'

function TrackListSkeleton() {
  return (
    <div>
      <ContentLoader
        viewBox="0 0 820 130"
        backgroundColor="#dedede33"
        foregroundColor="#dedede66"
        speed={1}
      >
        <rect x="17.17" y="17.58" width="95.88" height="95.88"/>
        <rect x="126.92" y="34.71" width="251.02" height="36.71" rx="2.63"/>
        <rect x="126.92" y="82.94" width="129.03" height="23.63" rx="2.71"/>
        <rect x="415" y="88.35" width="138.71" height="18.71" rx="2.47"/>
        <rect x="666.65" y="83.41" width="139.76" height="23.65" rx="2.82"/>
        <rect x="727.71" y="14.88" width="78.71" height="21.88" rx="1.79"/>
      </ContentLoader>
    </div>
  );
}

export default TrackListSkeleton;
