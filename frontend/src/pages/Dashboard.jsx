import { useEffect, useState } from "react";
import api from "../services/api";
import CreatePost from "./CreatePost";
import { useAuth } from "../context/AuthContext";
import Comments from "../components/Comments";
import { Link } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const { logout } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/posts");

      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const startEdit = (post) => {
    setEditingId(post._id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const updatePost = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/posts/${id}`,
        {
          title: editTitle,
          content: editContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchPosts();

      setEditingId(null);

      alert("Post updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update post");
    }
  };

  const deletePost = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts(
        posts.filter((post) => post._id !== id)
      );

      alert("Post deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete post");
    }
  };

  const likePost = async (id) => {
    try {
      await api.put(`/posts/${id}/like`);

      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <h2>Loading Posts...</h2>;
  }

  return (
    <div className="container">

      <div className="navbar">
        <h2>Blog Platform</h2>

        <div>
          <Link to="/profile">
            <button>Profile</button>
          </Link>

          {" "}

          <button onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <CreatePost />

      <input
        className="search-box"
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <h2>All Posts</h2>

      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map((post) => (
          <div
            key={post._id}
            className="post-card"
          >
            {editingId === post._id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) =>
                    setEditTitle(e.target.value)
                  }
                />

                <textarea
                  value={editContent}
                  onChange={(e) =>
                    setEditContent(
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={() =>
                    updatePost(post._id)
                  }
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h3>{post.title}</h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                />

                <p>
                  <strong>
                    Author:
                  </strong>{" "}
                  {
                    post.author
                      ?.username
                  }
                </p>

                <p>
                  <small>
                    Posted on{" "}
                    {new Date(
                      post.createdAt
                    ).toLocaleDateString()}
                  </small>
                </p>
              </>
            )}

            <button
              onClick={() =>
                likePost(post._id)
              }
            >
              Like (
              {post.likes || 0})
            </button>

            <hr className="post-divider"/>

            <Comments postId={post._id}/>

            <br />

            <button
              onClick={() =>
                startEdit(post)
              }
            >
              Edit
            </button>

            {" "}

            <button
              onClick={() =>
                deletePost(post._id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}

      <footer className="footer">
        Full Stack Blogging Platform © 2026
      </footer>

    </div>
  );
}

export default Dashboard;