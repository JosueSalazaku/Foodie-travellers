import { useEffect, useState } from "react"

function App() {

  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
<h1 className='text-orange-500'>Hello</h1>
    </>
  )
}

export default App
