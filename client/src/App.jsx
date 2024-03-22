import { useEffect, useState } from "react";
import Header from "./Components/Header";

function App() {
  // const [backendData, setBackendData] = useState([{}]);
  // useEffect(() => {
  //   fetch("/api/")
  //     .then(response => response.json())
  //     .then(data => {
  //       setBackendData(data);
  //     });
  // }, []);

  return (
    <main>
      <Header/>
      <h1 className="text-5xl text-orange-500">Hello world</h1>
    </main>
  );
}

export default App;
