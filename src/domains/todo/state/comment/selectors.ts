import { RootState } from "../../../../app/store";

export const selectListOfCommentByTaksId = (taskId: number) => (state: RootState) => {
  const { listByTaskId, map } = state.comment;
  return listByTaskId[taskId].map(commentId => map[commentId]);
}

export const selectCommentById = (commentId: number) => (state: RootState) => {
  return state.comment.map[commentId];
}