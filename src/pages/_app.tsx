import React from 'react'
import App from 'next/app'
import '../styles/main.css'

class MyApp extends App {
  render (): React.ReactElement {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
