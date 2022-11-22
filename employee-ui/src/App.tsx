import {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {getEmployees} from "./Client/Rest";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Employee from "./Types/Employee";
import {Routes, Route} from "react-router-dom"
import Update from "./Components/Update/Update"
import Remove from "./Components/Remove/Remove";
import NotFound from "./Components/NotFound/NotFound";

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
        <div className="App" >
            <Navbar/>
            <div className="container-sm" style={{marginTop: "3%" }}>
                <Routes>
                    <Route path="/" element={<Dashboard employees={employees}/>}/>
                    <Route path="/update" element={<Update />}/>
                    <Route path="/remove" element={<Remove />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;