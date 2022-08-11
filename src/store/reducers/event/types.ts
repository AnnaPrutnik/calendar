import { IEvent } from './../../../models/IEvent';
import { IUser } from '../../../models/IUser';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionsEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
  ADD_EVENT = 'ADD_EVENT',
}

export interface SetGuestsAction {
  type: EventActionsEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EventActionsEnum.SET_EVENTS;
  payload: IEvent[];
}

export interface AddEventAction {
  type: EventActionsEnum.ADD_EVENT;
  payload: IEvent;
}

export type EventAction = SetGuestsAction | SetEventsAction | AddEventAction;
