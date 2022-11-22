import {useNavigate} from "react-router-dom";


function Navbar(): JSX.Element {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand"  style={{marginLeft: "20px"}}>Employee Webapp</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button onClick={() => navigate("/")} className="btn btn-secondary" style={{marginLeft: "20px"}} >
                            View Items <span className="sr-only">(Dashboard)</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => navigate("/update")} className="btn btn-primary" style={{marginLeft: "20px"}} >Update</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => navigate("/remove")} className="btn btn-danger" style={{marginLeft: "20px"}} >Remove</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;