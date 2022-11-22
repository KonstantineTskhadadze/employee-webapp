import {useEffect, useState} from "react";
import {removeEmployee} from "../../Client/Rest";

class ID {
    public id: number | undefined;

    constructor(id?: number) {
        this.id = id;
    }
}

function Remove(): JSX.Element {
    const [id, setId] = useState(new ID());

    return (
        <div>
            <h1>Remove Employee</h1>
            <form className="form-control-lg">
                <div className="form-group">
                    <label form="id-input">Employee ID</label>
                    <input type="text"
                           className="form-control"
                           id="id-input" placeholder="Enter id"
                           onChange={e => setId(new ID(Number.parseInt(e.target.value)))}
                    />
                </div>
                <button onClick={() => {
                    if(typeof id.id === 'number')
                        removeEmployee(id.id)
                }}
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Remove;
