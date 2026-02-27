const variantClasses = {
  primary: "bg-blue-500 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  outline: "border border-gray-400 text-black hover:bg-gray-200",
  danger: "bg-red-500 text-white hover:bg-red-700",
  link: "text-white hover:bg-gray-600 bg-gray-700/30",
  icon: "bg-gray-200 !p-0 hover:scale-110 ",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium transition
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
