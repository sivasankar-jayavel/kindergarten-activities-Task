import React from 'react'
import { Link } from 'react-router-dom'
import Scheduler from './Scheduler'

function Calendar() {
  return (
    <>
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Create Pedagology Plan</h1>
                        <Link to="/portal/scheduler" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Save & Punlish</Link>
                    </div>
                    <Scheduler/>
              
                    </>
                    
  )


  }


export default Calendar

// import React from 'react';
// import './App.css';
// import { ScheduleComponent, Inject, Agenda, Day, Month, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';

// const Calendar = () => {
//   const localData = {
//    dataSource: [{
//       EndTime: new Date(2019, 0, 11, 6, 30),
//       StartTime: new Date(2019, 0, 11, 4, 0)
//    }]
//   };
//  return (
//     <ScheduleComponent currentView='Month'
//       eventSettings={{ dataSource: localData }} selectedDate={new Date(2023, 10, 10)} >
//       <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//     </ScheduleComponent>
//  );
// }

// export default Calendar;