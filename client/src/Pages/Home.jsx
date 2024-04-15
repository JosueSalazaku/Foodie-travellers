import { useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../Context/authContext.jsx";
import { useContext } from "react";
import Avatar from "react-avatar";
import Topics from "../Components/Topics.jsx";


// eslint-disable-next-line react/prop-types
function Home({darkMode}) {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(AuthContext); // Consume user authentication state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={darkMode ? "h-screen flex flex-col justify-start mx-20 mt-12" : "h-screen flex flex-col justify-start mx-20 mt-12" }>
      {!currentUser && (
        <>
          <h1 className="text-8xl py-10 font-black text-blue-400">
            SHARE. <br />
            EXPLORE. <br />
            DISCOVER.
          </h1>
          <h3 className="py-10 text-4xl">Discover stories, places to eat and drink<br /> and of course new places to travel to.</h3>
        </>
      )}

      <Topics/>

      {currentUser && Array.isArray(posts) && (
        <div className={darkMode ? "border-b-2 py-12 border-white " : " border-b-2 py-12 border-blue-900 "}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div>
                <div className="flex flex-row space-x-4 items-center mb-5">
                <Avatar src={currentUser.avatar} size="30" round />
                  <p className="font-bold">{currentUser.username }</p>
                  <p>{post.date}</p>
                </div>
    
                <p className="font-extrabold text-xl">{post.title}</p>
                <p>{post.body}</p>
              </div>
            </li>
             ))}
            </ul>
          </div>
      )}
      {!currentUser && <p>Please log in to see posts</p>}
    </main>
  );
}

export default Home;
