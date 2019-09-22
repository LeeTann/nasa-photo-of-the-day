import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

export default function NasaImages() {
  const [nasaImg, updateNasaImg] = useState("")
  const [explanation, updateExplanation] = useState("")
  const [date, updateDate] = useState("")
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then(res => {
        console.log(res.data)
        updateNasaImg(res.data.url)
        updateExplanation(res.data.explanation)
        updateDate(res.data.date)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <p>{date}</p>
      <img src={nasaImg} alt="Nasa Pic"/>
      <p>{explanation}</p>
    </div>
  )
}
