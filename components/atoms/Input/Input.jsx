const Input = ({ type, placeholder, bgColor }) => {
  return <input type={type} placeholder={placeholder} className={`input input-bordered w-full max-w-xs ${bgColor}`} />;
};

export default Input;
