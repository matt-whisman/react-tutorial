import { useEffect, useState } from "react";
import Post from "./Post";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch('http://127.0.0.1:5000/api/posts')
    fetch("https://fakebook-june-2022.herokuapp.com/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}
