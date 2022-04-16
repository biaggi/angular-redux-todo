export interface TodoModel {
  id: number;
  text: string;
  completed: boolean;
}


export const todoCreator = (text: string): TodoModel => {
  return {
    id: new Date().getTime(),
    text,
    completed: false
  }
}
