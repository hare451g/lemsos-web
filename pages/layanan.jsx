/*
  Layanan
  - Kalkulator Zakat
    - Zakat Emas
    - Zakat Perkerja
    - Zakat Perushaan
    - Zakat Niaga
*/

// domain
import Layanan from '../src/domain/Layanan';

function LayananPage({}) {
  return <Layanan />;
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default LayananPage;
