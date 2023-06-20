import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

const TimeStamp = ({ message }) => {
  const time = DateTime.fromISO(message.timeStamp);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  console.log(relative)
  return <span title={absolute}>{relative}</span>;
};

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeStamp;
