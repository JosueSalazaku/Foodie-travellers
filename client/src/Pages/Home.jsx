import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {Array.isArray(posts) ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
}

export default Home;
