package lan.todo.todo_app.repository;

import lan.todo.todo_app.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TodoRepository extends JpaRepository<Todo, UUID> {
}
