import Employee from "../../Types/Employee";

type DashboardInput = {
    employees: Array<Employee>
};

function Dashboard(input: DashboardInput): JSX.Element {

    return (
        <table className="table table-hover table-secondary" >
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">first name</th>
                <th scope="col">last name</th>
                <th scope="col">email</th>
            </tr>
            </thead>
            <tbody>
            {input.employees.map(e =>
                <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}


export default Dashboard;