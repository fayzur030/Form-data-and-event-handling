import React, { Fragment } from 'react';

const Post = ({ body, title, userId }) => {
  return (
    <Fragment>
      <section>
        <small>User ID: {userId}</small>
        <h1>{title}</h1>
        <p>{body}</p>
      </section>
    </Fragment>
  );
};

export default Post;
