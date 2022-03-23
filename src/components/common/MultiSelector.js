import './MultiSelector.css';
const MultiSelector = ({
  className,
  label,
  tags,
  handleMultiSelector,
  ...props
}) => {
  return (
    <div className={className}>
      <label className="multiselector-label">
        <span>{label}</span>
      </label>
      <div>
        <select
          multiple={true}
          onChange={handleMultiSelector}
          className="multiselector-select"
          {...props}
        >
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MultiSelector;
