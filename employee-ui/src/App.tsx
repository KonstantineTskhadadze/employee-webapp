import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getEmployees } from "./Client/Rest";
import List from "./Components/List/List";
import Employee from "./Types/Employee";


function App(): JSX.Element {

  const [employees, setEmployees] = useState(new Array<Employee>());

  useEffect(() => {
    getEmployees()
      .then((e: AxiosResponse<Array<Employee>, any>) => setEmployees(e.data))
      .catch(e => console.error(e));
  }, [])

  useEffect(() => {
      console.log(employees);
  }, [employees])

 

  return (
    <div className="App">
      <List employees={employees}/>
    </div>
  );
}

export default App;