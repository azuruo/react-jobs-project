import PropTypes from 'prop-types';

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}> {children}</div>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is a React node
    bg: PropTypes.string, // Allow bg prop to be a string
  };
  
export default Card;
