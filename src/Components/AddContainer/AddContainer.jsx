import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddContainer.css"


function AddContainer() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [data, setData] = useState([])

    function saveToDo(e) {
        e.preventDefault();
        setData(prev => ([...prev,{
            name:name,
            surname:surname,
            number:number
        }]))
        setName("");
        setSurname("");
        setNumber("");

    }
    return (
        <div>
            <div className='add__container'>
            <form onSubmit={saveToDo} className='col-6'>
                <div className="mb-3 col-6">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} 
                    id="inputName" aria-describedby="emailHelp" required></input>
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="inputSurname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="inputSurname" required value={surname} onChange={e => setSurname(e.target.value)}>
                    </input>
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="inputNumber" className="form-label">Number</label>
                    <input type="number" className="form-control" id="inputNumber" required value={number} onChange={e => setNumber(e.target.value)}></input>
                </div>
                <button id='btn' type="submit" className="col-md-3 btn btn-primary">Add</button>
            </form>
            </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item,index) =>(
                                <tr>
                                <th>{index+1}</th>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.surname}</td>
                                <td>{item.number}</td>
                                <td><i class="fa-solid fa-trash delete__icon"></i></td>
                            </tr>
                            ))
                        }
                    </tbody>

                </table>
        </div>
    )
}


  



export default AddContainer

