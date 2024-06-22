import { useState, useEffect } from 'react'
import axios from 'axios'
import Styles from './style.module.css'

console.log(import.meta.env)

const { VITE_FIREBASE_URL, VITE_EXPRESS_URL } = import.meta.env

function Home() {
  const [firebaseData, setFirebaseData] = useState([])
  const [expressData, setExpressData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const firebaseResponse = await axios.get(`${VITE_FIREBASE_URL}/messages`)
      setFirebaseData(firebaseResponse.data)

      const expressResponse = await axios.get(`${VITE_EXPRESS_URL}/users`)
      setExpressData(expressResponse.data)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>This is Home!!!</h1>
      <h2>Data fetched from Firebase: {JSON.stringify(firebaseData)}</h2>
      <h2>Data fetched from Express: {JSON.stringify(expressData)}</h2>
    </>
  )
}

export default Home
