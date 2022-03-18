import './InputSearch.css';

const InputSearch = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label className="inputSearch-label">
        <span>{label}</span>
        <input className="inputSearch-input"
          {...props}
        />
      </label>
    </div>
  );
};

export default InputSearch;