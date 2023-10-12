import {
    ScheduleComponent,
    Inject,
    Agenda,
    Day,
    Month,
    Week,
    WorkWeek,
    EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import React from 'react'
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import './App.css';

function Scheduler() {
        const localData = {
            dataSource: [
                {
                    EndTime: new Date(2019, 0, 11, 6, 30),
                    StartTime: new Date(2019, 0, 11, 4, 0),
                    subject:"Testing",
                },
            ],
        };

        const remoteData = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
            adaptor: new WebApiAdaptor(),
            crossDomain: true,

        });

        return (
            <ScheduleComponent
                currentView="Month"
                eventSettings={{ dataSource: remoteData }}{...localData}
                selectedDate={new Date(2017, 5, 5)}
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        );
};
export default Scheduler