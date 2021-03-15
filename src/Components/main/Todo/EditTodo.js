
import ract, { useState } from 'react';
import FormValueGetter from '../../../FormValueGeter'
function EditTodo(props) {
   

    let FormHandler = e => {
        e.preventDefault();
        let Todoform = document.getElementById(e.target.id);
        console.log(Todoform);
        let formData = new FormValueGetter(Todoform).getValue().obj;
        if (formData.newText.length > 3) {
            props.save(props.item.key,formData.newText);
            props.setedit(false);
        } else {
            alert('Please enter more words')
        }

    }
    return (

        <div className="col-6 mb-2">
            <form className="d-flex justify-content-between align-items-center border rounded p-3" 
            id={`editform_${props.item.key}`} onSubmit={FormHandler}>   
                <div>
                    <input type="text" className="form-control" name="newText" defaultValue={props.item.text} />
                </div>
                <div>
                    <button type="submit" className="btn btn-info btn-sm"  >save</button>
                </div>
            </form>
        </div>

    )
}

export default EditTodo;