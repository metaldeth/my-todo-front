import { CommentDTO, CreateCommentDTO, EditCommentDTO } from "../../../../types/serverInterface/task/comment";
import { AbstractApiModule } from "../../abstractApiModule";

export class CommentModule extends AbstractApiModule{
  fetchListOfCommentByTaskId(taskId: number): Promise<CommentDTO[]> {
    return this.request.get<unknown, CommentDTO[]>(`/task/${taskId}/comment`);
  }

  create(data: CreateCommentDTO, taskId: number) {
    return this.request.post<CreateCommentDTO, CommentDTO>(`/task/${taskId}/comment`, data);
  }

  edit(data: EditCommentDTO, commentId: number) {
    return this.request.put<EditCommentDTO, CommentDTO>(`/comment/${commentId}`, data);
  }

  remove(commentId: number): Promise<void> {
    return this.request.delete(`/comment/${commentId}`);
  }
}