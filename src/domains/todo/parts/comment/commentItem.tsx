import { FC, memo } from "react";
import { CommentDTO } from "../../../../types/serverInterface/task/comment";
import css from './styles.module.scss';

export type CommentItemPropsType = {
  comment: CommentDTO;
  taskId: number
}

export const CommentItem: FC<CommentItemPropsType> = memo(({
  comment,
  taskId,
}) => {
  console.table(comment)

  return(
    <div className={css.commentItem_box}>
      {comment.caption}/{comment.userName}
    </div>
  )
})