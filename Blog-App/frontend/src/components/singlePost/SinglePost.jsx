import "./singlePost.css";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{String(post.username).toUpperCase()}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <>
            <span
              style={{
                fontSize: "24px",
                color: "gray",
              }}
            >
              Edit Title:
            </span>
            <input
              type="text"
              className="singlePostEditInput"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </>
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {user && post.username === user.username && (
              <div className="singlePostEdit">
                <i
                  title="Edit Post"
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  title="Delete Post"
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        {updateMode ? (
          <>
            <span
              style={{
                fontSize: "18px",
                color: "gray",
                display: "flex",
              }}
            >
              <br />
              Edit Description:
            </span>
            <textarea
              type="text"
              className="singlePostEditInput singlePostEditText"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button onClick={handleUpdate} className="singlePostSubmit">
            Update
          </button>
        )}
      </div>
    </div>
  );
}
