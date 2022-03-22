const MultiSelector = ({ className, label, tags,handleMultiSelector, ...props }) => {

  

  return (
    <div className={className}>
      {/*       <label className="inputRadio-label">
        <span>{label}</span>
      </label> */}
      <select multiple={true} onChange={handleMultiSelector}>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelector;
