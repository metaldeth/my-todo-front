import { createSlice } from "@reduxjs/toolkit";
import { CommentDTO } from "../../../../types/serverInterface/task/comment";
import { createComment, editComment, fetchListOfCommentByTaskId, removeComment } from "./thunk";

export interface CommentState {
  map: Record<number, CommentDTO>;
  list: number[];
  listByTaskId: Record<number, Array<number>>;
}

const initialState: CommentState = {
  map: {},
  list: [],
  listByTaskId: {},
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListOfCommentByTaskId.fulfilled, (state, action) => {
      const { list, taskId } = action.payload;
      state.list = [];
      state.map = {};
      state.listByTaskId[taskId] = [];

      list.forEach(comment => {
        state.map[comment.id] = comment;
        state.list.push(comment.id);
        state.listByTaskId[taskId].push(comment.id);
      });
    })

    builder.addCase(createComment.fulfilled, (state, action) => {
      const { comment, taskId } = action.payload;
      state.list.push(comment.id);
      state.listByTaskId[taskId].push(comment.id);
      state.map[comment.id] = comment;
    });

    builder.addCase(editComment.fulfilled, (state, action) => {
      const comment = action.payload;
      state.map[comment.id] = comment;
    });

    builder.addCase(removeComment.fulfilled, (state, action) => {
      const { commentId, taskId } = action.payload;

      const indexOfDelete = state.list.findIndex(id => id === commentId);
      state.list.splice(indexOfDelete, 1);

      const indexOfDeleteByTaskId = state.listByTaskId[taskId].findIndex(id => id === commentId);
      state.listByTaskId[taskId].splice(indexOfDeleteByTaskId, 1);

      delete state.map[commentId];
    })
  }
})

export const commentReducer = commentSlice.reducer;