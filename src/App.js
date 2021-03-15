import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Todolist from './Components/main/Todolist/Todolist'
import TodoForm from './Components/main/TodoForm/TodoForm'

class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {

    TodoList: [],
    TodoStatus: false

  };

  AddNewTodo(text) {
    this.setState(PrevState => {
      return {
        TodoList: [
          ...PrevState.TodoList,
          { key: Date.now(), text: text, done: false }
        ]
      }

    })
  }

  changeStatus(status) {
    this.setState({ TodoStatus: status })
  }

  deleteTodo(key) {
    this.setState(PrevState => {
      return {
        TodoList: PrevState.TodoList.filter(item => item.key !== key)
      }
    })
  }


  doneTodo(key) {
    let { TodoList } = this.state;
    let itemx = TodoList.find(item => item.key == key);
    itemx.done = !itemx.done;
    let newTodos = TodoList.filter(item => item.key !== key);
    this.setState(PrevState => {
      return {
        TodoList: [
          ...newTodos,
          itemx
        ]
      }
    })
  }

  editTodo(key,text) {
    let { TodoList } = this.state;
    let itemx = TodoList.find(item => item.key == key);
    itemx.text = text;
    let newTodos = TodoList.filter(item => item.key !== key);
    this.setState(PrevState => {
      return {
        TodoList: [
          ...newTodos,
          itemx
        ]
      }
    })
  }




  render() {
    return (
      <>
        <Header name="Todo App" />
        <main>
          <TodoForm Adder={this.AddNewTodo.bind(this)} />
          <Todolist
            TodoStatus={this.state.TodoStatus}
            changeStatus={this.changeStatus.bind(this)}
            todolist={this.state.TodoList}
            delete={this.deleteTodo.bind(this)}
            doneTodo={this.doneTodo.bind(this)}
            editTodo={this.editTodo.bind(this)}
          />
        </main>
      </>

    );
  }

}

export default App;
