import React, { Fragment, useState } from "react";

const EditVendor = ({ application }) => {
    const [Application_Name, setApplication_Name] = useState(application.Application_Name);
    const [Application_URL, setApplication_URL] = useState(application.Application_URL);
    const [Description, setDescription] = useState(application.Description);

    const APIServer = "http://192.168.180.14:5000"
    //const APIServer = "http://192.168.180.156:5000"

    // update description function

    const updateApplication = async e => {
        e.preventDefault();
        try {
            const body = { Application_Name, Application_URL, Description };
            const response = await fetch(`${APIServer}/vendor/${application.Serial}`, {
                method: "PUT",
                headers:    { "Content-Type": "application/json" },
                body:   JSON.stringify(body)
            })
            window.location = ("/")
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <button 
            type="button"
            className="btn btn-warning"
            data-toggle="modal"
            data-target={`#id${application.Serial}`}>
            Edit
            </button>
            
            <div className="modal" id={`id${application.Serial}`}
            onClick={() => setApplication_Name(application.Application_Name)}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Edit Application</h4>
                    <button type="button" className="close" data-dismiss="modal"
                    onClick={() => setApplication_Name(application.Application_Name)}>&times;</button>
                </div>
            
                <div className="modal-body">
                    <input type="text" className="form-control" value={Application_Name} onChange={e => setApplication_Name(e.target.value)} />
                </div>
                <div className="modal-body">
                    URL<input type="text" className="form-control" value={Application_URL} onChange={e => setApplication_URL(e.target.value)} />
                </div>
                <div className="modal-body">
                    Description<input type="text" className="form-control" value={Description} onChange={e => setDescription(e.target.value)} />
                </div>
                

                <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal"
                onClick = {e => updateApplication(e)}>
                    Update
                </button>

                <button type="button" className="btn btn-danger" data-dismiss="modal"
                onClick={() => setApplication_Name(application.Application_Name)}>
                    Close
                </button>
                </div>
            
                </div>
            </div>
            </div>
        </Fragment>
    )
};

export default EditVendor;

