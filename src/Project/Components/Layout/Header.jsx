import "../../Styles/Layout/Header.css"
import Navigations from "../ReUsed/Navigations"

const Header =()=> {
    return (
        <div className="Header sticky-top">
            <div className="col-10 Align-Header">
                <div className="Header-Left">
                    <h4 className="mt-1"><strong>OpenWorldX</strong></h4>
                    <Navigations/>
                </div>

                <div className="Header-Right">
                    <button className="Login me-3">Log-in &nbsp;&nbsp;|</button>
                    <button className="Register py-2">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header