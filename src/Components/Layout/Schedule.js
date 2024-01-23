import {Scheduler} from "@aldabil/react-scheduler";
import {EVENTS} from "./events";
import {dividerClasses} from "@mui/material";
import {Button} from "@mui/material";

const Schedule = () => {
  return (
    <div>
      <Scheduler
        height={300}
        view={'week'}
        events={EVENTS}
        day={null}
        month={null}
        agenda={false}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 7,
          endHour: 19,
          step: 60,
          cellRenderer: ({height}) => {
            return <div style={{height: '30px'}}></div>
          },
          navigation: false,
        }}
        navigation={false}
        hourFormat={"24"}
        dialogMaxWidth="sm"
        style={{height: '300px'}}
      />
    </div>
  )
}

export default Schedule
