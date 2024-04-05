import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


function SingUp() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password:"",
  })

  const [err, setError] = useState(null)
  
  const handleChange =  e => {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         await axios.post("http://localhost:3000/api/signUp", inputs);

    } catch (err) {
      setError(err.response.data);
    }
};
  return (
    <main className="h-screen flex flex-col justify-start items-center gap-20 dark:text-white">
      <h1 className="text-6xl py-10">Welcome New Foodie Traveller</h1>
      <form action="" className="border flex flex-col h-96 w-96 ">
        <div className="gap-5 flex flex-col justify-center mb-5">
          <input type="text" placeholder='Username' name='username' onChange={handleChange} className="border h-9 rounded-lg p-2 border-purple-700"/>
          <input type="text" placeholder='Email' name="email" onChange={handleChange} className="border h-9 rounded-lg p-2 border-purple-700"/>
            <input type="password" placeholder='password' name='password' onChange={handleChange} className="border h-9 rounded-lg p-2 border-purple-700"/>
        </div>
        <button onClick={handleSubmit} className="border h-9 mb-5 rounded-lg border-purple-700">Sign up</button>
        {err && <p className='text-center font-bold text-red-500'>{err.error}</p>}
      </form>
      <span>Do you have an account? <Link to="/Login" className="text-blue-800 font-extrabold">Log in!</Link></span>
    </main>
  );
}

export default SingUp