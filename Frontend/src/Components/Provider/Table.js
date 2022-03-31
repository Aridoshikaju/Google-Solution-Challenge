import React,{useState} from "react";
import './Table_Pro.css'
import data from "./mock-data.json"
const Table=()=>{
    const [Details,setDetails]=useState(data);
    return <div className="app-container">
        
        <table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Quantity in(rice+curry+rotui)</th>
                </tr>
            </thead>
            <tbody>
                {Details.map((detail) => (
                <tr>
                    <td>{detail.Date} </td>
                    <td>{detail.Time}</td>
                    <td>{detail.Quantity}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
}
export default Table