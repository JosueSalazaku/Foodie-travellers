import {Link} from 'react-router-dom'

function SingUp() {
  return (
    <main className="h-screen flex flex-col justify-start items-center gap-20">
      <h1 className="text-6xl">Welcome Back Traveller</h1>
      <form action="" className="border flex flex-col h-96 w-96 ">
        <div className="gap-5 flex flex-col justify-center mb-5">
          <input
            type="text" placeholder='First Name'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
          <input
            type="text" placeholder='Laste Name'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
            <input
            type="text" placeholder='password'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
        </div>
        <button className="border border-purple-700">Sign up</button>
      </form>
      <span>Don't have an account? <Link to="/SignUp" className="text-blue-800 font-extrabold">Sign up!</Link></span>
    </main>
  );
}

export default SingUp