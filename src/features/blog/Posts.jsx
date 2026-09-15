import { useState } from "react";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetAllPostsQuery,
  useLazyGetAllPostsQuery,
} from "../../services/blogAPI";

function Posts() {
  var { isLoading, data } = useGetAllPostsQuery();
  var [lazyCallFn] = useLazyGetAllPostsQuery();

  var [newPost, setNewPost] = useState({ title: "", author: "" });

  var [addTodoFn] = useAddPostMutation();
  var [deleteTodoFn] = useDeletePostMutation();

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
          addTodoFn(newPost).then(() => {
            lazyCallFn();
          });
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
            <br />
            <button
              onClick={() => {
                deleteTodoFn(p.id).then(() => {
                  lazyCallFn();
                });
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default Posts;
