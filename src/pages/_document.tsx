import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

class Root extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render (): React.ReactElement {
    return (
      <Html>
        <Head>
          <title>Hitung Mundur Pelunasan Buku Tahunan</title>
          <meta name="description" content="Halaman hitung mundur batas pelunasan dana buku tahunan yang digelapkan" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Root
