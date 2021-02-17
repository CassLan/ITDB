import React, { Fragment, useState } from 'react';

const InputApplication = () => {

    const [Application_Name, setApplication_Name] = useState("Name");
    const [Application_URL, setApplication_URL] = useState("URL");
    const [Description, setDescription] = useState("Description");

    const onSubmitForm = async() => {
        try{
            const body = { Application_Name, Application_URL, Description };
            const response = await fetch("http://192.168.180.156:5000/application", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
        });
        console.log({body});
        
        window.location = "/";
        } catch (err) {
            console.error(err.message);

        }
    };

    return(
    <Fragment>
            <h1 className="text-center mt-5">ITDB Application Table List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={Application_Name} onChange={e => setApplication_Name(e.target.value)}/>
            <input type="text" className="form-control" value={Application_URL} onChange={e => setApplication_URL(e.target.value)}/>
            <input type="text" className="form-control" value={Description} onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success">Add</button>
            </form>

    </Fragment>);
};

export default InputApplication;