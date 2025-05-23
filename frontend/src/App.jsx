import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const pollData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('http://127.0.0.1:8000/get-draft/')
      setData(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const approveAndSend = () => {
    alert("Draft Approved and Sent ✅")
    // optionally send a POST request to mark as sent
  }

  useEffect(() => {
    pollData() // initial fetch
    const intervalId = setInterval(pollData, 600000) // every 5 seconds
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-indigo-600 rounded-2xl shadow-2xl max-h-[800px]">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data && data.message !== "wait" ? (
        <div className='p-10'>
          <h2 className='font-bold text-2xl'>Received Mail:</h2>
          <p className='font-medium text-4xl py-5'>{data.mail}</p>

          <h2 className='font-bold text-2xl'>Draft:</h2>
          <p className='font-medium text-xl py-5'>{data.message}</p>

          <h2 className='font-bold text-2xl'>Summary:</h2>
          <p className='font-medium text-xl py-5'>{data.summary}</p>

          <button onClick={approveAndSend}>APPROVE DRAFT AND SEND</button>
        </div>
      ) : (
        <p>Waiting for new mail & draft...</p>
      )}
    </div>
  )
}

export default App
