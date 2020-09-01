import React from 'react'
import Document, { Html, Main, Head, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

class Root extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render (): React.ReactElement {
    return (
      <Html>
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Root
