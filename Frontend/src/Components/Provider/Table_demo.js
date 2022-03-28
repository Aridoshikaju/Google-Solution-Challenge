// // // import React from 'react'
// // // import {db,auth} from './firebase'
// // // import Table_Pro from './Table_Pro.css'
// // // class Table_demo extends React.Component{
// // //     state={
// // //         students:null
// // //     }
// // //     componentDidMount(){
// // //         console.log('mounted')
// // //         db.collection('Table')
// // //         .get()
// // //         .then(snapshot =>{

// // //         })
// // //         .catch(error=>console.log(error))
// // //     }
// // //     render(){
// // //         return(
// // //             <div classname="Table_demo-container">
// // //                 <h1>Welcome!!!</h1>
// // //                 </div>
// // //         )
// // //     }
// // // }
// // // export default Table_demo;


// // import React from 'react';
// // import './Table_Pro.css';

// // import firebase from './firebase_db';
// // class Table_demo extends React.Component {
// // constructor(props) {
    
// //     super(props);
   
// //     this.state = {Foodslist : []}
// //     }
    
// //   componentDidMount() {
   
   
     
// //       firebase.database().ref("Food_list").on("value", snapshot => {
// //         let Foodslist = [];
// //         snapshot.forEach(snap => {
// //             // snap.val() is the dictionary with all your keys/values from the 'students-list' path
// //             Foodslist.push(snap.val());
// //         });
// //         this.setState({ Foodslist:Foodslist });
// //       });
    
    
// //  }
  
// //   render(){
// //   return (
// //     <div className="app-container">
     
// //           <table id="example" class="display table">
// //             <thead class="thead-dark">
// //                 <tr>
// //                     <th>Chapati</th>
// //                     <th>Curry</th>
// //                     <th>Rice</th>
                   
// //                 </tr>
// //             </thead>
// //             <tbody>
// //             {this.state.Foodslist.map(data => {
                
// //                 return (
// //                     <tr>     
// //                     <td>{data.Chapati}</td>
// //                     <td>{data.Curry}</td>
// //                     <td>{data.Rice}</td>
                   
// //                     </tr>
                    
// //                 );
               
// //                 })}
        
               
// //             </tbody>
            
// //          </table>
          
     
// //     </div>
// //   );
// // }
// // }
// // export default Table_demo;


// ////////////////////////////////////////////////////////////////////////////////
// import React,{useState,useEffect} from 'react'
// // import Cards from './news/Cards'
// import db from './firebase_db';
// import './Table_Pro.css';



// function Table_demo() {
//   const [blogs,setBlogs]=useState([]);


//   useEffect(() => {
//     db.collection('Food_list').onSnapshot(snapshot =>(setBlogs(snapshot.docs.map(doc => ({
//         data : doc.data()
//       })
//       ))
//     ))
//   },[])

//   console.log(blogs)
//   // this.state = {Foodslist : []}
//   let Foodslist = [];
//   var arr_length = 0;
//    db.collection('Foods_list').get().then(element => {arr_length = element.docs.length; console.log(arr_length)});
//   return (
    
//       <div className="app-container">
//         {/* <div class="jumbotron text-center bg-sky">
//             <h3>How to show firebase data in reactjs?</h3>
//         </div>
//        */}
//         {/* <div className="container"> */}
//             <table>
//               <thead>
//                   <tr>
//                       <th>Chapati</th>
//                       <th>Curry</th>
//                       <th>Rice</th>
//                       {/* <th>Mobile</th> */}
//                   </tr>
//               </thead>
//               <tbody>
//               {this.state.Foodslist.map(data => {
                  
//                   return (
//                       <tr>     
//                       <td>{data.Chapati}</td>
//                       <td>{data.Curry}</td>
//                       <td>{data.Rice}</td>
//                       {/* <td>{data.mobileNumber}</td> */}
//                       </tr>
                      
//                   );
                 
//                   })}
          
                 
//               </tbody>
              
//            </table>
            
       
//       </div>
    
    
  
//   )
// }

// export default Table_demo;

import React,{useState,useEffect} from "react";
import './Table_Pro.css'
import data from "./mock-data.json"
import db from './firebase_db'



const Table_demo=()=>{
    const [Details,setDetails]=useState(data);
    // const [foodlist, setfoodlist] = useState([]);

    useEffect(() => {
      db.collection('Food_list').onSnapshot(snapshot =>(setDetails(snapshot.docs.map(doc => ({
          data : doc.data()
        })
        ))
      ))
    },[])

    console.log(Details[0].data?.Chapati);


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
                    <td>{detail.data?.Chapati} </td>
                    <td>{detail.data?.Curry}</td>
                    <td>{detail.data?.Rice}</td>
                </tr>
                
                ))}
                
            </tbody>
        </table>
    </div>
}
export default Table_demo



















