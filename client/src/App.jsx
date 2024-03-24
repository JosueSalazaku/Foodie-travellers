
import axios from "axios";

function App() {
  // Function to create a new blog post
  const createPost = async () => {
    try {
      // Example data for the new post
      const postData = {
        title: "New Post",
        content: "This is the content of the new post",
      };

      // Make a POST request to the backend
      const response = await axios.post("/api/posts", postData);

      // Log the response from the backend
      console.log(response.data);
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error creating post:", error);
    }
  };

  return (
    <main>
      <h1 className="text-5xl text-orange-500">Welcome!</h1>
      <button onClick={createPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Create Post
      </button>
    </main>
  );
}

export default App;
