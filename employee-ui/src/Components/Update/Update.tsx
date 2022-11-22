import React, { useState } from "react";
import { postEmployee } from "../../Client/Rest";
import Employee from "../../Types/Employee";


function Update(): JSX.Element {

    const [employee, setEmployee] = useState(new Employee());

    function onFormChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const id = e.target.id;
        const copy: Employee = JSON.parse(JSON.stringify(employee));
        if(id === "id-input")
            copy.id = Number.parseInt(e.target.value);
        if(id === "first-name-input")
            copy.firstName = e.target.value;
        if(id === "last-name-input")
            copy.lastName = e.target.value;
        if(id === "email-input")
            copy.email = e.target.value;
        setEmployee(copy);
    }


    return (
        <div>
            <h1>Update Employees</h1>
            <form className="form-control-lg" >
                <div className="form-group">
                    <label form="id-input">ID (Optional)</label>
                    <input type="text" name="id"
                           className="form-control"
                           id="id-input"
                           placeholder="Enter ID"
                           onChange={e => onFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label form="first-name-input">First Name</label>
                    <input type="text" name="firstName"
                           className="form-control"
                           id="first-name-input"
                           placeholder="Enter First Name"
                           onChange={e => onFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label form="last-name-input">Last Name</label>
                    <input type="text"
                           name="lastName"
                           className="form-control"
                           id="last-name-input"
                           placeholder="Enter Last Name"
                           onChange={e => onFormChange(e)}/>
                </div>
                <div className="form-group">
                    <label form="email-input">Email</label>
                    <input type="text"
                           name="email"
                           className="form-control"
                           id="email-input"
                           placeholder="Enter Email"
                           onChange={e => onFormChange(e)}/>
                </div>
                <button className="btn btn-primary"
                        onClick={() => postEmployee(employee)}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Update;