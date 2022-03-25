import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {posts.length !== 0 ? (
          <Posts posts={posts} />
        ) : (
          <div>
            <h1 style={{ margin: "100px" }}>
              There is no posts matched with your query!!!
            </h1>
          </div>
        )}

        <Sidebar />
      </div>
    </>
  );
}
