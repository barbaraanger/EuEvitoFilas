import React from "react";
import { Comment } from "../types/comments";

const Establishment: React.FC = () => {
  const [comments, setComments] = React.useState<Comment[]>([]);

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
     <div>
      {/* Lista de comentários */}
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export { Establishment };
