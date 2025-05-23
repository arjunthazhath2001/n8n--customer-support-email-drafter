import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [data, setData] = useState(null);
  
  
  const pollData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://127.0.0.1:8000/get-draft/'); 
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    pollData(); // Initial fetch

    const intervalId = setInterval(pollData, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);



  return (
    <>
    {response.data}
    <div> display the MAIL received from the backend</div>
    <div>display the DRAFT received form the backend for that mail</div>
    <button>APPOVE DRAFT AND SEND</button>
    </>
  )
}

export default App
