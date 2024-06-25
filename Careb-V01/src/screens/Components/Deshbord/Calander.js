import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const CustomCalendar = (props) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    props.callBack(ranges.selection)
  };

  return (
    <div className='calander'>
      <h2 style={{fontSize: 16, marginTop: 10}}>Selected Dates:</h2>
      <ul>
        {dateRange.map(({ startDate, endDate }, index) => (
          <li key={index}>
           <span>Start Date</span>  <span>End Date</span>
          </li>
        ))}
      </ul>

      <DateRange
        ranges={dateRange}
        onChange={handleSelect}
        // months={2}
        months={window.innerWidth > 600 ? 2 : 1}
        direction="horizontal"
      />
    </div>
  );
};

export default CustomCalendar;
