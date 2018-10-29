import Head from 'next/head';
import '../scss/style.scss';
import Navbar from '../components/Navbar';

const Index = () => (
  <section className="page-section container mx-auto">
    <Head>
      <title>[I]ndex</title>
    </Head>
    <Navbar />
    <h1>Hello world from next.js</h1>
  </section>
);

export default Index;
