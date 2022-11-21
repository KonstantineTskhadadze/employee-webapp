import Employee from "../../Types/Employee";


type ListInputPrameter = {
    employees: Array<Employee>
}

function List(employees: ListInputPrameter): JSX.Element {


    return (
        <div className="list">

        </div>
    );
}


export default List;