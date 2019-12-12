import React, { Component }  from 'react'; 

import   Loadable  from 'react-loadable'; 
const LoadListLargeSreen = Loadable({
  loader: () => import("./LoadListLargeSreen"),
  loading: Loading  
});  

function Loading() {
  return <h3>Loading...</h3>;
}
 
export default class LoadMain extends Component  {
  render() {
 
      return (
       <LoadListLargeSreen></LoadListLargeSreen>
       
       ); 
 
 }
 
}
