import "../../Styles/Layout/Body.css"
import Filter from "./Filter"

const Body =()=> {
    return (
        <div className="Body">
            <div className="col-11">
                <div className="row g-0">
                    <div className="col-3">
                        <Filter/>
                    </div>
                    
                    <div className="col-9">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body