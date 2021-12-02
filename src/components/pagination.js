import React, { useState,useEffect } from "react";
import Reactpaginate from 'react-paginate';

function Pagination () {
    const[items,setitems] = useState([]);
    useEffect(() =>{
const getcoments = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=1`);
    const data = await res.json();
    setitems(data.data);
};
getcoments();
    },[]);
     console.log(items);
   const fetchcomments = async (currentpage) => {
       const res = await fetch(`https://reqres.in/api/users?page= ${currentpage}`);
       const data = await res.json();
       return data.data;
   }
   
 
  
    
    
    
    const handlepageclicked = async (data) =>{
 console.log(data.selected +1);
 let  currentpage = data.selected +1;
 const commentsfromserver = await fetchcomments(currentpage);
 setitems(commentsfromserver);

     }
    
    
    return(
       <div className = "container">
           <div className = "row m-2">


            {items.map((items) =>{
                return(

                 <div className = "col-sm-6 col-md-4 v my-2"> 
                <div className = "card shadow-sm w-100" style = {{minHeight: 225}}>
                    <div className = "card-body">
                          <h5 className = "card-tittle text-center h2">ID:{items.id}</h5>
                          <h6 className = "card-subtittle mb-2 text-muted text-center">email:{items.email}</h6>
                         <img src = {items.avatar}></img>


                         </div>
                    
                     </div>
                
                </div>
                )
              })}
              </div>
              
           <Reactpaginate
           previousLabel = {'<<'}
           nextLabel = {'>>'}
           pageCount = {2}
           marginPagesDisplayed = {2}
           pageRangeDisplayed = {2}
           onPageChange = {handlepageclicked}
           containerClassName = {'pagination justify-content-center'}
           pageClassName = {'page-item'}
           pageLinkClassName = {'page-link'}
           previousClassName = {'page-item'}
           previousLinkClassName = {'page-link'}
           nextClassName = {'page-item'}
           nextLinkClassName = {'page-link'}
           breakClassName = {'page-item'}
           breakLinkClassName = {'page-link'}
           activeClassName = {'active'}


           />
        </div>
    )
}
export default Pagination;
 // useEffect(() =>{
    //     const fetchcomments = async () => {
    //         const res1 = await fetch('https://reqres.in/api/users?page=2');
    //         const data1 = await res1.json();
    //        setitems(data1.data);
    //     };
    //     fetchcomments();
    // },[]);
