import React, { useState } from 'react';
import { Button, Input, DatePicker, Form, Select, TimePicker, Row } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import moment from 'moment';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { auth } from '../store/selectors';
import { IEvent } from '../models/IEvent';
import { formateDate } from '../utils/date';

interface EventFormProps {
  guests: IUser[];
  onAddEvent: (event: IEvent) => void;
}

const EventForm = ({ guests, onAddEvent }: EventFormProps) => {
  const [guest, setGuest] = useState('');
  const [date, setDate] = useState<moment.Moment | null>(null);
  const [desc, setDesc] = useState('');
  const { user } = useTypedSelector(auth);

  const onSubmit = () => {
    if (date) {
      const event: IEvent = {
        id: uuidv4(),
        author: user.username,
        description: desc,
        guest: guest,
        date: formateDate(date),
      };
      onAddEvent(event);
    }
  };

  const onSubmitFailed = () => {
    console.log('failed');
  };
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      layout='horizontal'
      onFinish={onSubmit}
      onFinishFailed={onSubmitFailed}
    >
      <Form.Item label='Name' name='description' rules={[rules.required()]}>
        <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </Form.Item>
      <Form.Item label='Guest' name='guest' rules={[rules.required()]}>
        <Select value={guest} onChange={(value) => setGuest(value)}>
          {guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label='Date' name='date' rules={[rules.required()]}>
        <DatePicker value={date} onChange={(value) => setDate(value)} />
      </Form.Item>

      <Form.Item label='Time' name='date' rules={[rules.required()]}>
        <TimePicker
          value={date}
          onChange={(value) => setDate(value)}
          format='HH:mm'
          showNow={false}
          minuteStep={5}
        />
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Add event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
