import FilterData from "../../StaticData/FiterData"

const Filter =()=> {

    return (
        <div className="Filter">
            <div className="Selection">
                <h5>Filter By</h5>

                {FilterData.map((filters) => (
                    <div>
                        <p>{filters.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter