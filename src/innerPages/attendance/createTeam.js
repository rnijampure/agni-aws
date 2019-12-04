import React from 'react'  
import TeamDialog  from './createTeamDialog'  ;
 
  export default function  CreateTeam() {  
    return (
      
     <React.Fragment> 
    <h1 className={"  main_heading-text"}>     Team</h1>
        <div   className={"  centerAlignedContent "} >
       
          <h1>
         Create   Team
        </h1> 
        <TeamDialog/> 
        </div>
       </React.Fragment>
      )
 
  }
  
