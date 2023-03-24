import "../../Styles/Layout/Header.css"
import Navigations from "../ReUsed/Navigations"

const Header =()=> {
    return (
        <div className="Header px-5 mx-5">
            <div className="Header-Left">
                <h4 className="mt-1">OpenWorldX</h4>
                <Navigations/>
            </div>

            <div className="Header-Right">
                <button className="Login me-3">Log-in &nbsp;&nbsp;|</button>
                <button className="Register py-2">Sign up</button>
            </div>
        </div>
    )
}

export default Header