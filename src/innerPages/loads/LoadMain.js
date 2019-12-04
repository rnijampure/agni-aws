import React, { Component }  from 'react'; 

import   Loadable  from 'react-loadable'; 
const LoadListLargeSreen = Loadable({
  loader: () => import("./LoadListLargeSreen"),
  loading: Loading  
}); 
const LoadListSmallScreen = Loadable({
  loader: () => import("./LoadListSmallScreen"),
  loading: Loading  
}); 

function Loading() {
  return <h3>Loading...</h3>;
}
 
export default class LoadMain extends Component  {
  render() {
        let width = window.innerWidth;  
    if (width > 768) {
      return (
       <LoadListLargeSreen></LoadListLargeSreen>
       
       );
    } else {
      return ( 
    <LoadListSmallScreen></LoadListSmallScreen>
      );
    }
 }
 
}
