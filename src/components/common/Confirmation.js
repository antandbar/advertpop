import Button from './Button';
import './Confirmation.css';
import classNames from 'classnames';

const Confirmation = ({ className, label, ...props }) => {
  return (
    <div className={classNames('confirmation', className)}>
      <label className="confirmation-label">
        <span>{label}</span>
        </label>
        <div className="confirmation-div-buttons">
          <Button className='confirmation-button' variant="delete">Si</Button>
          <Button className='confirmation-button'>No</Button>
        </div>
      
    </div>
  );
};

export default Confirmation;
