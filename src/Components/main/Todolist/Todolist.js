import Todo from '../Todo/Todo';
import react, { useState } from 'react';
function Todolist(props) {

    let filterTodos = props.todolist.filter(item => item.done === props.TodoStatus)

    return (
        <div className="todosList">
            <div className="container">
                <div className="d-flex flex-column align-items-center ">
                    <nav className="col-6 mb-3">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist" >
                            <a className={`nav-item nav-link  ${props.TodoStatus == false ? 'active' : null} font-weight-bold`} id="nav-home-tab"
                                onClick={() => props.changeStatus(false)}>
                                undone
                                <span className="badge badge-secondary">
                                    {props.todolist.filter(item => item.done === false).length}
                                </span>
                            </a>
                            <a className={`nav-item nav-link  ${props.TodoStatus == true ? 'active' : null} font-weight-bold`} id="nav-profile-tab"
                                onClick={() => props.changeStatus(true)}>
                                done
                                <span className="badge badge-success">
                                    {props.todolist.filter(item => item.done === true).length}
                                </span>
                            </a>
                        </div>
                    </nav>


                    {
                        filterTodos.length > 0 ?
                            filterTodos.map(
                                item =>

                                    <Todo key={item.key} item={item} delete={props.delete} done={props.doneTodo}  edit={props.editTodo}/>

                            )
                            :
                            'no have any todo '
                    }



                </div>

            </div>
        </div>
    )
}

export default Todolist;