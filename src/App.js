import { useState} from 'react';


import Users from './views/Users';
import Posts from './views/Posts';
import Comments from './views/Comments';

function App() {


  const [view, setView] = useState('users');

  
  function handleViewUsersClick() {
    setView('users')
  }

  function handleViewPostsClick() {
    setView('posts')
  }

  function handleViewCommentsClick() {
    setView('comments')
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <header>
        <div onClick={handleViewUsersClick}>users</div>
        <div onClick={handleViewPostsClick}>posts</div>
        <div onClick={handleViewCommentsClick}>comments</div>
      </header>
      { view == 'users' && <Users /> }
      { view == 'posts' && <Posts />}
      { view == 'comments' && <Comments />}

    </div>
  );
}

export default App;
