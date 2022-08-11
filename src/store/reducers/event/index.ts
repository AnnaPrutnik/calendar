import { EventState, EventAction, EventActionsEnum } from './types';

const initialState: EventState = {
  guests: [],
  events: [],
};

export default function EventReducer(
  state = initialState,
  action: EventAction
): EventState {
  switch (action.type) {
    case EventActionsEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EventActionsEnum.SET_EVENTS: {
      return { ...state, events: action.payload };
    }
    case EventActionsEnum.ADD_EVENT: {
      return { ...state, events: [...state.events, action.payload] };
    }
    default:
      return state;
  }
}
