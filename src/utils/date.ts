import moment from 'moment';
export const formateDate = (date: moment.Moment): string => {
  return moment(date).toString();
};
