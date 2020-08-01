import React, { ReactElement, useEffect, useState } from 'react'
import { intervalToDuration } from 'date-fns'

export default function Index (): ReactElement {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const updateTime = (): void => {
    setCurrentTime(new Date())
  }

  useEffect(() => {
    const target = new Date('27 August 2020 UTC+0700')
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: currentTime,
      end: target
    })
    setCountdown({
      days: days ?? 0,
      hours: hours ?? 0,
      minutes: minutes ?? 0,
      seconds: seconds ?? 0
    })
    updateTime()
    const interval = setInterval(updateTime, 100)
    return (): void => {
      clearInterval(interval)
    }
  }, [currentTime])

  return (
    <div className="bg-purple-100 min-h-screen">
      <div className="xl:container xl:mx-auto lg:py-32 py-16 text-gray-900 px-16 xl:px-0">
        <h1 className="text-sm md:text-md font-semibold text-gray-600">Hitung Mundur Pelunasan Buku Tahunan</h1>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 block">Halo!</span>
        <p className="text-xl md:text-2xl">Tersangka memiliki waktu sekitar</p>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block sm:inline">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-600">{countdown.days}</span> Hari, &nbsp;
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block sm:inline">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-600 block sm:inline">{countdown.hours}</span> Jam &nbsp;
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-600 block sm:inline">{countdown.minutes}</span> Menit &nbsp;
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-600 block sm:inline">{countdown.seconds}</span> Detik &nbsp;
        </span>
        <p className="text-xl lg:text-2xl mt-4 lg:mt-2">
          Untuk melakukan <b>pelunasan</b> dana buku tahunan yang telah <b>digelapkan</b>.
          <br />
          Mari kita berdoa agar Tersangka dapat melunasi dana tersebut tanpa hambatan dan halangan.
        </p>
        <p className="text-xl lg:text-2xl mt-4 lg:mt-8">
          Jika hitung mundur ini telah habis dan Tersangka gagal, maka ayo kita adili dia dengan seadil-adilnya!
        </p>
      </div>
    </div>
  )
}
