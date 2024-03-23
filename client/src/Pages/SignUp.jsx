import {Link} from 'react-router-dom'

function SingUp() {
  return (
    <main className="h-screen flex flex-col justify-start items-center gap-20">
      <h1 className="text-6xl">Welcome New Foodie Traveller</h1>
      <form action="" className="border flex flex-col h-96 w-96 ">
        <div className="gap-5 flex flex-col justify-center mb-5">
          <input
            type="text" placeholder='Username'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
          <input
            type="text" placeholder='Email'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
            <input
            type="text" placeholder='password'
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
        </div>
        <button className="border border-purple-700">Sign up</button>
      </form>
      <span>Do you have an account? <Link to="/Login" className="text-blue-800 font-extrabold">Log in!</Link></span>
    </main>
  );
}

export default SingUp