import { Fragment, useEffect, useState } from "react";
import Post from "./Post";
import "./Post"

const Posts = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <div className="posts-container">
        <h1>Our All Posts</h1>
        {loading ? (
          <p className="loading">Loading....</p>
        ) : (
          <p className="post-count">Total Data: {postData.length}</p>
        )}
        <div>
          {postData.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
