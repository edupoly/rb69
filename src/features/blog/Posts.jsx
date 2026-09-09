import { useState } from "react";
import {
  useAddPostMutation,
  useGetAllPostsQuery,
} from "../../services/blogAPI";

function Posts() {
  var { isLoading, data } = useGetAllPostsQuery();
  var [newPost, setNewPost] = useState({ title: "", author: "" });
  var [addTodoFn] = useAddPostMutation();
  console.log(data);
  return (
    <div className="mybox">
      <h1>Posts</h1>
      <textarea
        placeholder="Enter Title"
        onChange={(e) => {
          setNewPost({ ...newPost, title: e.target.value });
        }}
      ></textarea>
      <br />
      <input
        type="text"
        placeholder="Enter Author Name"
        onChange={(e) => {
          setNewPost({ ...newPost, author: e.target.value });
        }}
      />
      <br />
      <button
        onClick={() => {
          addTodoFn(newPost);
        }}
      >
        Add Post
      </button>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {data?.map((p) => {
        return (
          <li className="border border-2 m-2 p-2 rounded">
            <b>{p.title}</b>
            <br />
            <i>{p.author}</i>
          </li>
        );
      })}
    </div>
  );
}

export default Posts;
