export interface Todo {
  id: string;
  title: string;
  description?: string; // Opcionális
  dueDate?: Date;
  completed: boolean;
}
