import { Dna } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <Dna
        visible={true}
        height="400"
        width="400"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </>
  );
}
