import { useState } from "react";
import { useEffect } from "react";

import Form from './Form';
import Table from "./Table";

function App() {
  const API_BASE_URL = "http://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${API_BASE_URL}${reqType}`);
        if (!response.ok) throw Error("Failed to get response properly");
        const jsonItems = await response.json();
        setItems(jsonItems);
      } catch (err) {
        console.log(err.message);
      }
    }
    (async () => fetchItems())();
  }, [reqType]);

  return (
    <div>
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items}/>
    </div>
  );
}

export default App;
