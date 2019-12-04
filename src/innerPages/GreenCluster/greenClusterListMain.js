import React, { Component }  from 'react'; 
 
import   Loadable  from 'react-loadable'; 


function Loading() {
  return <h3>Loading...</h3>;
}
 
export default class GCListMain extends Component  {
  render() {
    
      const GCListlargeScreen = Loadable({
  loader: () => import("./greenClusterList"),
  loading: Loading  
}); 
      return (
       <GCListlargeScreen></GCListlargeScreen>
       
       ); 
    }
 }
 
 