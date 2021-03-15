import react from 'react';
import FormValueGetter from '../../../FormValueGeter'
function TodoForm(props) {

    let FormHandler = e => {
        e.preventDefault();
        let Todoform = document.getElementById(e.target.id);
        let formData = new FormValueGetter(Todoform).getValue().obj;
        if (formData.todoinput.length > 3) {
            props.Adder(formData.todoinput);
            e.target.reset()
        } else {
            alert('Please enter more words')
        }

    }

    return (
        <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome !</h1>
                <p className="lead text-muted">enter a new todo list :</p>
                <div className="form-inline">
                    <form onSubmit={FormHandler} className="form-group" id="todoform">
                        <input type="text" name="todoinput" className="form-control mx-sm-3" placeholder="i want to do ..." />
                        <button className="btn btn-primary">add</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TodoForm