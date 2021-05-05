
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";


function UserList(){
    let users = useContext(UserContext);

   
   
    return<>
         <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                href="#">official DataTables documentation</a>.</p>
        <Link to='/usercreate'>Create User</Link>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                   <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Product Name</th>
                                    <th>Email</th>
                                    <th>password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                           <tbody>
                                {
                                    users.userList.map((obj)=>{
                                        return<>
                                            <tr>
                                                <td>{obj.firstName}</td>
                                                <td>{obj.LastName}</td>
                                                <td>{obj.product}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.password}</td>
                                                <th>
                                                    <Link to={`/useredit/${obj.id}`}>User Edit</Link>                                                    
                                                </th>
                                            </tr>
                                        </>;
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
    </>;
}

export default UserList;