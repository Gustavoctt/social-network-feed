import { Avatar } from '../Avatar/Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount +1)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/gustavoctt.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João carlos</strong>
              <time  title="16 de setembro de 2022" dateTime="2022-09-16 15:33:00" >Cerca de 30min atrás</time>
            </div>
            <button onClick={handleDeleteComment} >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir 
          </button>
          <span>{likeCount}</span>
        </footer>
      </div>
    </div>
  )
}