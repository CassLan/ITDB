import React, { Fragment, useState } from 'react';

const InputVendor = () => {

    const [Company_Name, setCompany_Name] = useState("CompanyName");
    const [Account_Number, setAccount_Number] = useState("AccountNum");
    const [Notes, setNotes] = useState("Notes");
    const [Contract_Renewal, setContract_Renewal] = useState("ContractRenewal");

    const APIServer = "http://192.168.180.14:5000"
    //const APIServer = "http://192.168.180.156:5000"
    
    const onSubmitForm = async() => {
        try{
            const body = { Company_Name, Account_Number, Notes, Contract_Renewal };
            const response = await fetch(`${APIServer}/vendor`, {
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
            {/* <h3 className="text-center mt-5">Application Add</h3> */}
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={Company_Name} onChange={e => setCompany_Name(e.target.value)}/>
            <input type="text" className="form-control" value={Account_Number} onChange={e => setAccount_Number(e.target.value)}/>
            <input type="text" className="form-control" value={Notes} onChange={e => setNotes(e.target.value)}/>
            <input type="text" className="form-control" value={Contract_Renewal} onChange={e => setContract_Renewal(e.target.value)}/>
            <button className="btn btn-success">Add</button>
            </form>
    </Fragment>);
};

export default InputVendor;