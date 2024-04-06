import { useEffect, useState } from "react";
import axios from "axios";
import { useDarkMode } from "../Context/DarkModeContext.jsx";

function Home() {
  const [posts, setPosts] = useState([]);
  const { darkMode } = useDarkMode(); // Consume dark mode state

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
    <main className={`h-screen flex flex-col justify-start mx-20 ${darkMode ? 'dark:text-white' : ''}`}>
      <h1 className="text-8xl py-10 font-black text-blue-400">
        SHARE. <br />
        EXPLORE. <br />
        DISCOVER.
      </h1>
      <h3 className="py-10 text-4xl">Discover stories, places to eat and drink<br /> and of course new places to travel to.</h3>
      {Array.isArray(posts) ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
}

export default Home;
