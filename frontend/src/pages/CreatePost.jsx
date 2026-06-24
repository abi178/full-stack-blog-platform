import { useState } from "react";
import api from "../services/api";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/posts",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Post Created");

      setTitle("");
      setContent("");
    } catch (error) {
      alert("Failed to create post");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;