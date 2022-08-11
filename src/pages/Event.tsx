import React, { useEffect, useState } from 'react';
import { Layout, Row, Button, Modal } from 'antd';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { IEvent } from '../models/IEvent';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { guest, events } from '../store/selectors';

const Event = () => {
  const [openModal, setOpenModal] = useState(false);
  const { getGuests, addEvent } = useActions();
  const guests = useTypedSelector(guest);
  const allEvents = useTypedSelector(events);

  console.log(allEvents);

  useEffect(() => {
    getGuests();
  }, []);

  const onOpenModal = () => setOpenModal(true);

  const onCloseModal = () => setOpenModal(false);

  const onAddEvent = (event: IEvent) => {
    addEvent(event);
    onCloseModal();
  };

  const onClickAddBtn = () => {
    onOpenModal();
  };

  return (
    <Layout className='h100'>
      <EventCalendar events={allEvents} />
      <Row justify='center'>
        <Button onClick={onClickAddBtn}>Add event</Button>
      </Row>
      <Modal
        title='Add event'
        visible={openModal}
        footer={null}
        onCancel={onCloseModal}
      >
        <EventForm guests={guests} onAddEvent={onAddEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
