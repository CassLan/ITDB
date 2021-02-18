import React, { Fragment, useEffect, useState } from 'react';
import EditVendor from "./EditVendor";

const ListVendors = () => {

    const [vendors, setVendors] = useState([]);

    const APIServer = "http://192.168.180.14:5000"
    //const APIServer = "http://192.168.180.156:5000"

    // delete function

    const deleteVendor = async (serial) => {
        
        try {
            const deleteVendor = await fetch(`${APIServer}/vendor/${serial}`, {
                method: "DELETE"
            });
            setVendors(vendors.filter(vendor => vendor.Serial !== serial));
            console.log(deleteVendor);
        } catch (err) {
            console.error(err.message);
        }

    }

    const getVendors = async () => {
        try {
            const response = await fetch(`${APIServer}/vendor`);
            const jsonData = await response.json();

            setVendors(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getVendors();

    }, []);

    console.log(vendors);
    return (
    <Fragment>
  <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Account Number</th>
        <th>Notes</th>
        <th>Contract Renewal</th>
        <th>Edit</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
    {vendors.map(vendor => (
        
        <tr key={vendor.Serial}>
            
            <td><div>{vendor.Company_Name}</div>
            </td>
            <td>{vendor.Account_Number}</td>
            {/* <td><EditVendor vendor={vendor}/></td> */}
            
            <td>{vendor.Notes}</td>
            
            <td>{vendor.Contract_Renewal}</td>
            <td>EDIT BUTTON</td>
            <td>
            <button className="btn btn-danger"
            onClick={() => deleteVendor(vendor.Serial)}
            >Delete</button>    
            </td>
        </tr>  
    ))}    
      
    </tbody>
  </table>

    </Fragment>);

};

export default ListVendors;