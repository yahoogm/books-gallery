const ButtonIcon = ({ onClick, text, children, type }) => {
  return (
    <button className="btn btn-square" onClick={onClick} type={type}>
      {text}
      {children}
    </button>
  );
};

export default ButtonIcon;
