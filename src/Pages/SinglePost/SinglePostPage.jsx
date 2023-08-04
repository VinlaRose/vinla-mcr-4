import { useContext } from "react"
import "../Home/Home.css"
import { DataContext } from "../../context/context"
import PostCard from "../../components/PostCard/PostCard";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
const {postId} = useParams;

    const {state} = useContext(DataContext);
    const user = state.filteredData

    const item = state.singlePostCurrent;
    console.log(item)
    
    
    


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
      showComments={true}
    />
           

           </div>
           
        </div>
    )
}