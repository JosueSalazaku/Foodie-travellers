import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { AuthContext } from '../Context/authContext'

function LogIn() {
  const [inputs, setInputs] = useState({
    username: "",
    password:"",
  })

  const [err, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  
  const handleChange =  e => {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(inputs);
        navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
};

  return (
    <main className="h-screen flex flex-col justify-start items-center gap-20">
      <h1 className="text-6xl">Welcome Back Traveller</h1>
      <form action="" className="border flex flex-col h-96 w-96 ">
        <div className="gap-5 flex flex-col justify-center mb-5">
          <input
            type="text" placeholder='username'
            name='username' onChange={handleChange}
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
          <input
            onChange={handleChange}
            type="Password" placeholder='Password' name='password'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
        </div>
        <button onClick={handleSubmit} className="border border-purple-700">Log In </button>
        {err && <p className='text-center font-bold text-red-500'>{err.error}</p>}
      </form>
      <span>No account yet? <Link to="/SignUp" className="text-blue-800 font-extrabold">Sign up!</Link></span>
    </main>
  );
}

export default LogIn;
