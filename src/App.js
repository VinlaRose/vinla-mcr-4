
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Explore } from './Pages/Explore/Explore';
import { Profile } from './Pages/Profile/Profile';
import { Bookmarks } from './Pages/Bookmarks/Bookmarks';
import { SinglePost } from './Pages/SinglePost/SinglePostPage';


function App() {
  return (
    <div className="App">
     <div className='topBar'>
        <h3>My Forum</h3>
     </div>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:postId" element={<SinglePost/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/bookmarks" element={<Bookmarks/>}/>
     </Routes>
    </div>
  );
}

export default App;
