const Information = ({ title, information }) => {
  return (
    <div>
      <span>{`${title} :`}</span>
      <span>{information}</span>
    </div>
  );
};

export default Information;
