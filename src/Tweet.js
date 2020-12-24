import React, {useState} from 'react';
import './Tweet.css';
import PropTypes from 'prop-types';



function Tweet(props) {

    const [isLiked, setLike] = useState(false);
    const [likes, addOrRemoveLike] = useState(0);

    Tweet.propTypes = {
        name: PropTypes.any,
        tweet: PropTypes.any,
    }

    const likeClicked = () => {
        setLike(!isLiked);
        addOrRemoveLike(!isLiked ? likes + 1 : likes - 1);
        //setLike takes a bit to setLike and change
    }

    return (
        <div className="tweet-container">
            <div className = "tweet-items">
                Name: {props.name}
            </div>

            <div className = "tweet-items">
                Tweet: {props.tweet}
            </div>

            <div className = "tweet-items">
                Number of Likes: {likes}
            </div>

            <div onClick={likeClicked} className = "tweet-items">
                <button>{isLiked ? "Dislike" : "Like"}</button>
            </div>
        </div>
    )
}

export default Tweet;