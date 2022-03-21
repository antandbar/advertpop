//import './InputSearch.css';

const InputRadio = ({ className, label, valueObjet, ...props }) => {
  return (
    <div className={className}>
      <label className="inputRadio-label">
        <span>{label}</span>
      </label>
      <div>
        <input
          type="radio"
          value={true}
          name="inputRadio"
          {...props}
        />
        {valueObjet.true}
        <input
          type="radio"
          value={false}
          name="inputRadio"
          {...props}
        />
        {valueObjet.false}
        <input type="radio" value="" name="inputRadio" {...props} />
        {valueObjet.all}
      </div>
    </div>
  );
};

export default InputRadio;
