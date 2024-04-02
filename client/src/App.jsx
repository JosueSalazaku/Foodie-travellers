import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

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
    
    <div className="h-screen mt-10 px-16 flex flex-col justify-start ">
      <h1 className="text-8xl font-black text-blue-400">
        SHARE. <br />
        EXPLORE. <br />
        DISCOVER.
      </h1>
      <h3 className="py-10 text-4xl">Discover stories, places to eat and drink<br /> and offcourse new places to travel to.</h3>
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
    </div>
  );
}

export default App;
