import React, { useContext } from 'react';
import "./PostCard.css"
import { DataContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';



const PostCard = ({
  postId,
  username,
  name,
  picUrl,
  post,
  postDescription,
  upvotes,
  downvotes,
  tags,
  createdAt,
  comments,
  isBookmarked,
  showComments,
}) => {

  const EquilateralTriangle = ({ color }) => {
    return (
      <div className={`triangle ${color}`}>
        <div className="triangle-content">
          {/* <span>▲</span> */}
        </div>
      </div>
    );
  };

const {state, dispatch} = useContext(DataContext);

const navigate = useNavigate()

  const handleUpvote = (postId) => {
    
    
    const updateData = state.filteredData.posts.map(item => item.postId == postId ?  {...item, upvotes: item.upvotes + 1} : item);
    
     dispatch({type: "UPDATE", payload: {...state.filteredData, posts: updateData}})
  };

  const handleDownvote = (postId) => {
    const updateData = state.filteredData.posts.map(item => item.postId == postId ?  {...item, downvotes: item.downvotes + 1} : item);
    
    dispatch({type: "UPDATE", payload: {...state.filteredData, posts: updateData}})
  };

  const handleBookmark = (postId) => {
    const updateData = state.filteredData.posts.map(item => item.postId == postId ?  {...item, isBookmarked: !item.isBookmarked} : item);
    
    dispatch({type: "UPDATE", payload: {...state.filteredData, posts: updateData}})
  };

  const handleComments = (postId) => {
    
    console.log(postId);
    console.log(state.filteredData.posts.find(item => item.postId == postId));
    const singlePost = state.filteredData.posts.find(item => item.postId == postId);
    dispatch({type: "SINGLE_POST", payload: singlePost});
    navigate(`/${postId}`);
  }

  return (
    <div className="post-card">
      <div className="post-section">
        <div className="votes">
        <div className="triangle-container">
          <div  onClick={() => handleUpvote(postId)}><EquilateralTriangle color="blue" /></div>
          <div className='totalUpvotes'>{upvotes - downvotes}</div>

          <div  onClick={() => handleDownvote(postId)}><EquilateralTriangle color="grey" /></div>
      </div>
        </div>
        <div className="post-details">
        <div className="user-info">
        <img src={picUrl} alt={name} className="user-pic" />
        <span className="user-name"> Posted by <span className='username-style'>@{username}</span>
        <span className="post-date">{createdAt}</span>
        
        </span>
        
      </div>
      <h2 className="post-heading">{post}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <p className="post-description">{postDescription}</p>
      <div className="interactions">
        <span class="material-symbols-outlined share-btn">share</span>
        
        <span onClick={() => handleComments(postId)} class="material-symbols-outlined">chat</span>
        <button className="bookmark-btn" onClick={() => handleBookmark(postId)}>
          {isBookmarked ? <span class="material-symbols-outlined">
bookmark_added
</span> : <span class="material-symbols-outlined">
bookmark
</span>}
        </button>
      </div>
        </div>
      </div>
     
      
     {showComments && <div className="comments-section">
        {comments.map((comment) => (
          <div key={comment.commentId} className="comment">
            <div className="user-info">
              <img src={comment.picUrl} alt={comment.username} className="user-pic" />
              <span className="user-name">{comment.username}</span>
            </div>
            <p className="comment-text">{comment.comment}</p>
            <div className="comment-interactions">
              <button className="like-btn">Like ({comment.likes})</button>
              <button className="reply-btn">Reply</button>
              <button className="share-btn">Share</button>
            </div>
            <div className="comment-date">{comment.createdAt}</div>
          </div>
        ))}
      </div> }
     
     
     
      
    </div>
  );
};

export default PostCard;
