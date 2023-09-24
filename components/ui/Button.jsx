const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`bg-primary text-center text-secondary font-normal py-1 px-10 rounded-xl hover:bg-slate-600 transition-all ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
