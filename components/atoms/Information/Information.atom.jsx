const Information = ({ title, information }) => {
  return (
    <div>
      <span className="font-semibold">{`${title} : `}</span>
      <span>{information}</span>
    </div>
  );
};

export default Information;
