import { useContext, useState } from "react"
import "./Home.css"
import { DataContext } from "../../context/context"
import PostCard from "../../components/PostCard/PostCard";




export const Home = () => {

    const {state} = useContext(DataContext);
    console.log(state);
    const user = state.filteredData

   
  
    const handleOptionChange = (event) => {
      const selectedOption = event.target.value;
      if (selectedOption === 'likes') {
        
      } else if (selectedOption === 'date') {
        
      }
    };
  
    return (
        <div className="homeBody">
           <div className="left">
            <div className="left-top">
            <div className="navigate"><span class="material-symbols-outlined">home</span>
            Home</div>
            <div className="navigate"><span class="material-symbols-outlined">rocket</span>Explore</div>
            <div className="navigate"><span class="material-symbols-outlined">bookmark</span>Bookmarks</div>
            <div className="navigate"> <span class="material-symbols-outlined">account_circle</span>Profile</div>

            </div>

            <div className="left-bottom">
            <div className="user-info">
        <img src={user.picUrl} alt=" " className="user-pic" />
        <div className="user-name">
           <div className='username-style'>{user.name}</div>
            <div className="post-date">@{user.username}</div>
        
        </div>
        
      </div>
            </div>
            
           </div>
           <div className="main">
           
            {
  state.filteredData.posts.map(item => (
    <PostCard
      key={item.postId}
      postId={item.postId}
      username={item.username}
      name={item.name}
      picUrl={item.picUrl}
      post={item.post}
      postDescription={item.postDescription}
      upvotes={item.upvotes}
      downvotes={item.downvotes}
      tags={item.tags}
      createdAt={item.createdAt}
      comments={item.comments}
      isBookmarked={item.isBookmarked}
      showComments={false}
    />
  ))
}

           </div>
           <div className="right">
            <h2><label htmlFor="sort-select">Sort By:</label></h2>
            <div className="sorting-component">
     
      <select id="sort-select" onChange={handleOptionChange}>
        <option value="likes">Popular Posts</option>
        <option value="date">Latest Posts</option>
      </select>
    </div>
           </div>
        </div>
    )
}