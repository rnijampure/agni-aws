import React, { Component }  from 'react';  
 
import   Loadable  from 'react-loadable'; 
const ResourceList = Loadable({
  loader: () => import("./ResourcesList"),
  loading: Loading  
}); 

function Loading() {
  return <h3>Loading...</h3>;
}
export default class ResourcesListMain extends Component  {
  render() {
        let width = window.innerWidth;  
    if (width > 768) {
      return (
       <ResourceList></ResourceList>
       
       );
    } 
 }
 
}
