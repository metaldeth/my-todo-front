import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Loader } from "../../../../components/loader";
import { fetchListOfCommentByTaskId } from "../../state/comment";
import { ListOfComment } from "./listOfComment";

export type CommentContainerPropsType = {
  taskId: number;
}

export const CommentContainer = memo<CommentContainerPropsType>(({
  taskId,
}) => {
  const [ isLoaded, setIsLoaded ] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListOfCommentByTaskId(taskId))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!isLoaded) return <Loader/>;

  return(
    <>
      <ListOfComment
        taskId={taskId}
      />
    </>
  )
})