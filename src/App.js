import { useState } from "react";
import { useEffect } from "react";

import Users from "./views/Users";
import Posts from "./views/Posts";
import Comments from "./views/Comments";

function App() {
  const API_BASE_URL = "http://jsonplaceholder.typicode.com/";
  const [view, setView] = useState("users");
  const [items, setItems] = useState([]);

  function handleViewUsersClick() {
    setView("users");
  }

  function handleViewPostsClick() {
    setView("posts");
  }

  function handleViewCommentsClick() {
    setView("comments");
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(API_BASE_URL + view);
        if (!response.ok) throw Error("Failed to get response properly");
        const jsonItems = await response.json();
        setItems(jsonItems);
      } catch (err) {
        console.log(err.message);
      }
    }
    (async () => fetchItems())();
  }, [view]);

  return (
    <div>
      <header>
        <button
          className={view === "users" ? "current" : null}
          onClick={handleViewUsersClick}
        >
          users
        </button>
        <button
          className={view === "posts" ? "current" : null}
          onClick={handleViewPostsClick}
        >
          posts
        </button>
        <button
          className={view === "comments" ? "current" : null}
          onClick={handleViewCommentsClick}
        >
          comments
        </button>
      </header>

      {view === "users" && <Users items={items} />}
      {view === "posts" && <Posts items={items} />}
      {view === "comments" && <Comments items={items} />}
    </div>
  );
}

export default App;
