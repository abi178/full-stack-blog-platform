import { useEffect, useState } from "react";
import api from "../services/api";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await api.get(
        `/comments/${postId}`
      );

      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addComment = async () => {
    try {
      const token =
        localStorage.getItem("token");

      await api.post(
        `/comments/${postId}`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContent("");

      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h4>Comments</h4>

      <input
        type="text"
        placeholder="Write a comment..."
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button onClick={addComment}>
        Add Comment
      </button>

      {comments.map((comment) => (
        <div
          key={comment._id}
          style={{
            marginTop: "10px",
            paddingLeft: "10px",
            borderLeft:
              "2px solid gray",
          }}
        >
          <strong>
            {comment.author?.username}
          </strong>

          <p>{comment.content}</p>

          {comment.parentComment && (
            <small>
              Reply Comment
            </small>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;