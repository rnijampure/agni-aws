import React, { Component }  from 'react'; 
import Loadable  from 'react-loadable'; 


 
function Loading() {
  return <h3>Loading...</h3>;
}
export default class employeeVerMain extends Component  {
  render() {
        let width = window.innerWidth;  
    if (width > 768) {
      const EVLargeScreen = Loadable({
        loader: () => import("./EmployeeVerification"),
        loading: Loading  
      }); 
      return (
       <EVLargeScreen></EVLargeScreen>
       
       );
    } else {
      const EmployeeVerSS = Loadable({
        loader: () => import("./EmployeeVerSS"),
        loading: Loading  
      }); 
      return ( 
    <EmployeeVerSS ></EmployeeVerSS >
      );
    }
 }
 
}
