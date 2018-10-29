import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <link rel="stylesheet" href="/_next/static/style.css"/>
        </Head>
        <body className="bg-grey">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
