import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
import { CommentDTO, CreateCommentDTO, EditCommentDTO } from "../../../../types/serverInterface/task/comment";

export const fetchListOfCommentByTaskId = createAsyncThunk<
  { list: CommentDTO[], taskId: number },
  number
>('/taskList', async (taskId) => {
  const list = await api.comment.fetchListOfCommentByTaskId(taskId);
  return { list, taskId };
})

export const createComment = createAsyncThunk<
  { comment: CommentDTO, taskId: number },
  { data: CreateCommentDTO, taskId: number }
>('taskList/create', async ({ data, taskId }) => {
  const comment = await api.comment.create(data, taskId);
  return { comment, taskId };
})

export const editComment = createAsyncThunk<
  CommentDTO,
  { data: EditCommentDTO, commentId: number }
>('taskList/edit', async ({ data, commentId }) => {
  return api.comment.edit(data, commentId);
})

export const removeComment = createAsyncThunk<
  { commentId: number, taskId: number },
  { commentId: number, taskId: number }
>('taskList/remove', async ({ commentId, taskId }) => {
  await api.comment.remove(commentId)
  return { commentId, taskId }
})