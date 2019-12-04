import React , { Suspense, lazy }  from 'react';

/* import GreenCluster from './innerPages/GreenCluster/createGreenClusters';
import GCListMain from './innerPages/GreenCluster/greenClusterListMain'; 
import CreateTeam from './innerPages/team/createTeam';
import TeamListMain from './innerPages/team/teamListMain';
import employeeVerMain from './innerPages/team/employeeVerificationMain';
import Attendance from './innerPages/team/attendance';
import DailyAttendance from './innerPages/team/daily_attendance';
import PointList from './innerPages/points/pointList' 
import Vehicle from './innerPages/vehicle/VehicleMain';
import DriverMain from './innerPages/vehicle/driverMain'
import LoadMain from './innerPages/loads/LoadMain';
import VendorRequests from './innerPages/loads/verdorRequests'
import ResourcesListMain from './innerPages/resources/ResourcesListMain';
 */

  const routes = [
    {
      id: "1",
      path: "/dashboard/CreateCluster",
      exact: true,
      sidebar: GreenCluster,
    },
    {
      id: "2",
      path: "/dashboard/GreenClusters",
      exact: true,
      sidebar: GCListMain,
    }
    ,
    {
      id: "3",
      path: "/dashboard/CreateTeam/",
      exact: true,
      sidebar: CreateTeam,
    },
    {
      id: "3",
      path: "/dashboard/Teams/",
      exact: true,
      sidebar: TeamListMain,
    }, {
      id: "3",
      path: "/dashboard/EmployeeVerification/",
      exact: true,
      sidebar: employeeVerMain,
    }, {
      id: "3",
      path: "/dashboard/Attendance/",
      exact: true,
      sidebar: DailyAttendance,
    }, {
      id: "3",
      path: "/dashboard/Leave_Requests/",
      exact: true,
      sidebar: Attendance,
    },
    {
      id: "3",
      path: "/dashboard/PointList/",
      exact: true,
      sidebar: PointList,
    },
    {
      id: "3",
      path: "/dashboard/vehicle/",
      exact: true,
      sidebar: Vehicle,
    },
    {
      id: "3",
      path: "/dashboard/driver/",
      exact: true,
      sidebar: DriverMain,
    },
    {
      id: "3",
      path: "/dashboard/load/",
      exact: true,
      sidebar: LoadMain,
    },
    {
       id: "3",
      path: "/dashboard/vendorRequests/",
      exact: true,
      sidebar: VendorRequests,
    }, {
       id: "3",
      path: "/dashboard/ResourcesList/",
      exact: true,
      sidebar: ResourcesListMain,
    }
  ];  
  
  export default routes; 