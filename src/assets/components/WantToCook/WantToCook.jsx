import PropTypes from 'prop-types';

const WantToCook = ({ wantToCook, index }) => {
  const { name, time, calories } = wantToCook;
  return (
    
      <tr className="text-customGray font-fira">
        <th>{index}</th>
        <td>{name}</td>
        <td>{time}</td>
        <td>{calories}</td>
        <td>
          <button className="btn btn-sm rounded-full bg-customGreen border-0 font-bold text-lg px-6">
            Preparing
          </button>
        </td>
      </tr>
    
  );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

export default WantToCook;
