import { InfinitySpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#0000ff"
      ariaLabel="infinity-spin-loading"
    />
  );
}
