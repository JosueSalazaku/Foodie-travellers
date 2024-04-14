import { useContext } from "react";
import { AuthContext } from "../Context/authContext";


function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <main className="mt-20 h-screen flex flex-col justify-start mx-20 dark:text-white">
      <section>
        <div className="border-b-2 "> 
          <h1 className="text-6xl font-bold py-5">Welcome back {currentUser.username}</h1>
        </div>
        <div className="">
        </div>  
      </section>
    </main>
  )
}

export default Profile