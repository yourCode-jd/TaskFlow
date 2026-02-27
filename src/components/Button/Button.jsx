const variantClasses = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  outline: "border border-white text-white hover:bg-white/20",
  danger: "bg-red-500 text-white hover:bg-red-700",
  link: "text-white hover:bg-gray-600 bg-gray-700/30",
  icon: "bg-purple-600 !p-0 hover:scale-110 hover:bg-purple-700",
  navLink: "hover:bg-purple-600 bg-purple-400",
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
        rounded-lg font-medium transition focus:outline-none focus:ring-1 focus:ring-white/50
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
