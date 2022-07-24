import React, { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState('Like'),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      //when click:
      //if it was unliked => set the string to "Liked" and set the boolen isLike to True
      if (isLike === false) {
        setLike('Liked');
        setIsLike(true);
      } else {
        // when click
        // if it was Liked => set the string to "Like" and se the boolen isLike to False
        setLike('Like');
        setIsLike(false);
      }
    };

  return (
    <>
      <button
        className={'like-button ' + (isLike ? 'liked' : 'unliked')}
        onClick={onLikeButtonClick}
      >
        {like} <span class="material-symbols-outlined">thumb_up</span>
      </button>


    </>
  );
};

export default LikeButton