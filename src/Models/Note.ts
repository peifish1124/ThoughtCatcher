export class Note {
  id: string;
  content: string;
  user_id: string;

  constructor(id: string, content: string, user_id: string) {
      this.id = id;
      this.content = content;
      this.user_id = user_id;
  }
}