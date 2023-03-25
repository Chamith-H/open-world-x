import "../Styles/Layout/Routings.css"

import { Routes, HashRouter as Router, Route} from "react-router-dom";

import Home from "../Components/MainContents/Home";


const Routings =()=> {
    return (
        <div className="Routings">
            <Router>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default Routings