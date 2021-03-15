import ract, { useState } from 'react';
import EditTodo from './EditTodo';
function Todo(props) {
    const [edit, setedit] = useState(false);
    return (

        <>
            {
                edit == false ?

                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                {props.item.text}
                            </div>
                            <div>
                                <button type="button" className="btn btn-info btn-sm" onClick={()=>{
                                    setedit(true);
                                }}>edit</button>

                                {
                                    props.item.done
                                        ?
                                        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={() => props.done(props.item.key)}>undone</button>
                                        :
                                        <button type="button" className="btn btn-success btn-sm mx-1" onClick={() => props.done(props.item.key)}>done</button>
                                }
                                <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => props.delete(props.item.key)}>delete</button>

                            </div>
                        </div>
                    </div>

                    :
                   
                    <EditTodo item={props.item}  save={props.edit} setedit={setedit}/>


            }

        </>
    )
}

export default Todo