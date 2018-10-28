import Navbar from '../components/Navbar';
import Head from 'next/head';
import '../scss/style.scss';

const Index = () => (
  <section>
    <Head>
      <title>[I]ndex</title>
    </Head>
    <Navbar />
    <h1>Hello world from next.js</h1>
  </section>
);

export default Index;
