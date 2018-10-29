import Head from 'next/head'
import Link from 'next/link'

import '../scss/style.scss'
import Navbar from '../components/Navbar'

const Index = props => (
  <section className="page-section container mx-auto">
    <Head>
      <title>[I]ndex</title>
    </Head>
    <Navbar />
    <h1>Hello world from next.js</h1>
    <Link as={`/posts/${props.slug}`} href={`/post?title=${props.title}`}>
      <a title="Learn NextJS">Latest Post on NextJS</a>
    </Link>
  </section>
)

Index.getInitialProps = async function(props) {
  let title = 'Latest post on NextJS'
  let slug = 'latest-post-next-js'

  return {
    title,
    slug
  }
}

export default Index
