import React, { Fragment, useEffect, useState } from 'react';
import EditApplication from "./EditApplication";

const ListApplications = () => {

    const [applications, setApplications] = useState([]);

    // delete funuction

    const deleteTodo = async (serial) => {
        
        try {
            const deleteApplication = await fetch(`http://192.168.180.156:5000/application/${serial}`, {
                method: "DELETE"
            });
            setApplications(applications.filter(application => application.Serial !== serial));
            console.log(deleteApplication);
        } catch (err) {
            console.error(err.message);
        }

    }

    const getApplications = async () => {
        try {
            const response = await fetch("http://192.168.180.156:5000/application");
            const jsonData = await response.json();

            setApplications(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getApplications();

    }, []);

    console.log(applications);
    return (
    <Fragment>
  <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Application_URL</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {applications.map(application => (
        
        <tr key={application.Serial}>
            
            <td><div>{application.Application_Name}</div><div>{application.Description}</div>
            </td>
            <td><a target="_blank" href={application.Application_URL}>LINK</a></td>
            <td><EditApplication application={application}/></td>
            <td>
            <button className="btn btn-danger"
            onClick={() => deleteTodo(application.Serial)}
            >Delete</button>    
            </td>
        </tr>  
    ))}    
      
    </tbody>
  </table>

    </Fragment>);

};

export default ListApplications;