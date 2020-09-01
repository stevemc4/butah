import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../styles/main.css'

class MyApp extends App {
  render (): React.ReactElement {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Hitung Mundur Pelunasan Buku Tahunan</title>
          <meta name="description" content="Halaman hitung mundur batas pelunasan dana buku tahunan yang digelapkan" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
