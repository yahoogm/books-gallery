const Button = ({ text, variant, type, onClick, children }) => {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
