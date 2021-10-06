import React, { useState } from 'react';

function DisplayList(props) {
  function handleDelete(id){
    props.Delete(id)

  }
  
  return (
    
     <div className="row">
       {props.data.map(item=>(
         <div className="col-sm-6 mt-4 mb-4">
           <div className="card">
             <div className="card-body">
               <h6 key={item.FirstName}>FirstName:{item.FirstName}</h6>
               <h6 key={item.LastName}>LastName:{item.LastName}</h6>
               <h6 key={item.Age}>Age:{item.Age}</h6>
               <h6 key={item.Gender}>Gender:{item.Gender}</h6>
               <h6 key={item.Radio}>Do you have a fever?:{item.Radio}</h6>
               <h6 key={item.Radio2}>Do you have a dry cough?:{item.Radio2}</h6>
               <h6 key={item.Radio3}>Do you have a soar throat or diarhea?:{item.Radio3}</h6>
               <h6 key={item.Radio4}>Do you have troubles breathing?:{item.Radio4}</h6>
               <h6 key={item.Radio5}>Have you been out of the pronvice?:{item.Radio5}</h6>
               <h6 key={item.Radio6}> Have you been in contact with someone who tested posivite for covid-19?:{item.Radio6}</h6>
               <button
               onClick={()=>handleDelete(item.id)}
                type="button" 
                className="btn btn-light ml-10"  
               >Delete</button>
             </div>
           </div>
         </div>
       ))}
     </div>
  );
}
export default DisplayList;