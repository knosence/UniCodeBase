package com.example.demo.UI;

import com.example.demo.Model.Todo;
import com.example.demo.TodoRepository;
import com.vaadin.spring.annotation.SpringComponent;
import com.vaadin.ui.VerticalLayout;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringComponent
public class TodoLayout extends VerticalLayout {

    @Autowired
    TodoRepository repo;

    @PostConstruct
    void init(){
        update();
    }

    private void update() {
        setTodos(repo.findAll());
    }

    private void setTodos(List<Todo> todos) {
        removeAllComponents();
//        TODO: Lambda expression
        todos.forEach(todo -> addComponent(new TodoItemLayout(todo)));
    }


    public void add(Todo todo) {
        repo.save(todo);
        update();
    }

    public void deleteCompleted() {
        repo.deleteByDone(true);
        update();
    }
}
