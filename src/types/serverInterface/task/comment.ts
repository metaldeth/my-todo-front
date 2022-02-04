export type CommentDTO = {
  id: number;
  caption: string;
  userName: string;
}

export type CreateCommentDTO = {
  caption: string;
}

export type EditCommentDTO = {
  caption: string;
}