import { FC, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAppSelector } from "../../../../app/hooks";
import { selectListOfCommentByTaksId } from "../../state/comment";
import { CommentItem } from "./commentItem";
import { CreateComment } from "./createComment";
import css from './styles.module.scss';

export type ListOfCommentPropsType = {
  taskId: number;
}

export const ListOfComment: FC<ListOfCommentPropsType> = ({
  taskId,
}) => {
  const [ isOpenCreate, setIsOpenCreate ] = useState(false);

  const listOfComment = useAppSelector(selectListOfCommentByTaksId(taskId));

  return(
    <div className={css.listOfComment_box}>
      {listOfComment.map(comment => 
        <CommentItem
          key={comment.id}
          comment={comment}
          taskId={taskId}
        />
      )}
       { isOpenCreate 
        ?<CreateComment
          setIsOpenCreate={setIsOpenCreate}
          taskId={taskId}
        />
        :<div className={css.createComment} onClick={() => setIsOpenCreate(true)}>
          <div className={css.createComment_button}>
            <AiOutlinePlus/> Комментировать
          </div>
        </div> 
      }
    </div>
  )
}