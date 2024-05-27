import moment from "moment/moment";

export const formatTime = (time) => {
  return moment(time).format('h:mmA')
}
