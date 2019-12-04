import React, { Component }  from 'react';  

import Loadable  from 'react-loadable'; 

const TeamListLargeSreen = Loadable({
  loader: () => import("./teamList"),
  loading: Loading  
}); 

const TeamListSmallScreen = Loadable({
  loader: () => import("./TeamListSmallScreen.js"),
  loading: Loading  
}); 

function Loading() {
  return <h3>Loading...</h3>;
}
export default class TeamListMain extends Component  {
  render() {
        let width = window.innerWidth;  
    if (width > 768) {
      return (
       <TeamListLargeSreen></TeamListLargeSreen>
       
       );
    } else {
      return ( 
    <TeamListSmallScreen></TeamListSmallScreen>
      );
    }
 }
 
}
