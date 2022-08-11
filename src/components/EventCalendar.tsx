import React, { useCallback } from 'react';
import { IEvent } from '../models/IEvent';
import { Calendar, Badge, BadgeProps } from 'antd';
import moment from 'moment';

interface EventsCalendarProps {
  events: IEvent[];
}

const EventCalendar = ({ events }: EventsCalendarProps) => {
  const onChangeDate = (date: moment.Moment) => {
    console.log('click on date', date);
  };

  const onSelectDate = () => {
    console.log('select the date');
  };

  const dateCellRender = useCallback(
    (value: moment.Moment) => {
      const eventsForDay = events.filter((event) =>
        moment(event.date).isSame(value, 'day')
      );
      console.log(eventsForDay);
      return (
        <ul style={{ listStyle: 'none' }}>
          {eventsForDay.map((item) => (
            <li key={item.id}>
              <Badge status='success' text={item.description} />
            </li>
          ))}
        </ul>
      );
    },
    [events]
  );

  return (
    <Calendar
      onChange={onChangeDate}
      onSelect={onSelectDate}
      dateCellRender={dateCellRender}
    />
  );
};

export default EventCalendar;
