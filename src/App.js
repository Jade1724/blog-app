import { useState} from 'react';
import { useEffect } from 'react';

import Users from './views/Users';
import Posts from './views/Posts';
import Comments from './views/Comments';

function App() {

  const API_BASE_URL = 'http://jsonplaceholder.typicode.com/';
  const [view, setView] = useState('users');
  const [items, setItems] = useState([]); 
  
  function handleViewUsersClick() {
    setView('users')
  }

  function handleViewPostsClick() {
    setView('posts')
  }

  function handleViewCommentsClick() {
    setView('comments')
  }

  useEffect(() => {

    
    async function fetchItems() {
      try {
        const response = await fetch(API_BASE_URL + view);
        if (!response.ok) throw Error('Failed to get response properly');
        const jsonItems = await response.json();
        
        setItems(jsonItems);
      } catch (err) {
        console.log(err.message)
      }
    }
    (async () => fetchItems())();
    
  }, [view]);

  return (
    <div>
      <h1>Hello World!</h1>
      <header>
        <div onClick={handleViewUsersClick}>users</div>
        <div onClick={handleViewPostsClick}>posts</div>
        <div onClick={handleViewCommentsClick}>comments</div>
      </header>

      { view === 'users' && <Users items={items}/> }
      { view === 'posts' && <Posts items={items}/> }
      { view === 'comments' && <Comments items={items}/>}

    </div>
  );
}

export default App;
