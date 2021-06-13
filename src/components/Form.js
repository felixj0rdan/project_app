import react from "react";
function Form() {
    return (
        <div className="d-flex flex-column justify-content-end mx-auto my-5 bg-light" style={{width: "500px"}}>
            {/* <div className="d-flex flex-column justify-content-center"> */}
            <div>
            <form> 
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Invigilator:</label>
                    <input type="text" className="form-control " id="dept" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Class Invigilated:</label>
                    <input type="text" className="form-control" id="subcode" />
                </div>
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Time:</label>
                    <div className="d-flex flex-row justify-content-evenly ">
                        <input type="time" className=" form-control" id="no_of_abs" />
                        <p className=" align-text-center ">TO</p>
                        <input type="time" className="form-control " id="no_of_abs" />
                    </div>                
                </div>
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Subject:</label>
                    <input type="text" className="form-control " id="subcode" />
                </div>
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Total number of students:</label>
                    <input type="number" className="form-control " id="subcode" />
                </div>
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Number of students present:</label>
                    <input type="number" className="form-control " id="subcode" />
                </div>
                <div className="mb-3 mx-auto" style={{width: "300px"}}>
                    <label className="form-label">Number of students absent:</label>
                    <input type="number" className="form-control " id="subcode" />
                </div>
                <div className="mb-3 mx-auto" style={{width: "125px"}}>
                <button type="submit" className="btn btn-primary" >Upload Files</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Form