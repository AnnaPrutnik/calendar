import axios from 'axios';
import { AppDispatch } from '../..';
import {
  EventActionsEnum,
  SetEventsAction,
  SetGuestsAction,
  AddEventAction,
} from './types';
import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionsEnum.SET_EVENTS,
    payload: events,
  }),
  addEvent: (event: IEvent): AddEventAction => ({
    type: EventActionsEnum.ADD_EVENT,
    payload: event,
  }),
  getGuests: () => async (dispatch: AppDispatch) => {
    try {
      const { data } = await UserService.getUsers();
      if (data) {
        dispatch(EventActionCreators.setGuests(data));
      } else {
        console.log('something wrong');
      }
    } catch (error) {
      console.log('something wrong');
    }
  },
  getEvents: () => async (dispatch: AppDispatch) => {},
};
