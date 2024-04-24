import "../css/style.css";
import React from "react";
import { useState } from "react";
import Chance from "chance";
import {addNewUser} from "../store/Slices/Userslices"
import { useDispatch, } from "react-redux";
// import FakeData from "./Api/FakeData";

const chance = Chance();


const Addtodos = () => {
    const dispatch = useDispatch();

    const addNewUsers = () => { 
        const newUsers = chance.name({ middle: true });
        console.log("New user:", newUsers);
        dispatch(addNewUser(newUsers));
    }

    return (
        <div>
            <div className="container">
                <div className="admin-table">
                    <div className="admin-subtitles input-container">
                        <h2> List of user details </h2> 
                        <button className="btn" onClick={() => {
                           
                            addNewUsers();
                        }}> Add New Users </button>
                    </div>
    
                    <div className="userlist">
                        <ul>
                            <li>
                                user1
                            </li>
                            <li>
                                user1
                            </li>
                            <li>
                                user1
                            </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Addtodos;