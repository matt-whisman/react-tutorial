import { useState } from "react";
import Post from "./Post";

export default function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "Test Post",
      text: "This is text",
    },
    {
      id: 1,
      title: "Test Post 2",
      text: "This is text again",
    },
    {
      id: 2,
      title: "Test Post 3",
      text: "This is text again, again",
    },
  ]);

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
