import { useContext } from "react"
import "../Home/Home.css"
import { DataContext } from "../../context/context"
import PostCard from "../../components/PostCard/PostCard";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
const {postId} = useParams;

    const {state} = useContext(DataContext);

    const item = state.singlePostCurrent;
    console.log(item)
    
    
    


    return (
        <div className="homeBody">
           <div className="left">
            <div className="navigate">Home</div>
            <div className="navigate">Explore</div>
            <div className="navigate">Bookmarks</div>
            <div className="navigate">Profile</div>
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
    />
           

           </div>
           
        </div>
    )
}