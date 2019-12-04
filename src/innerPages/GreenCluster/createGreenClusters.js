import React from 'react'  ;
  
import   Loadable  from 'react-loadable';   
 
 

const FormDialog = Loadable({
  loader: () => import("./createGreenClustersDialog"),
  loading: Loading  
}); 

function Loading() {
  return <h3>Loading...</h3>;
}
  export default function  GreenCluster() {  

    const buttonvarient = "contained";
    return (
     <React.Fragment>
    <h1 className="  main_heading-text ">     Request</h1>
         <div   className=" centerAlignedContent " >    <h1>
            Create Green Clusters
        </h1> 
        <FormDialog varient="contained"/> 
        </div>
       </React.Fragment>
      )
 
  }
  
