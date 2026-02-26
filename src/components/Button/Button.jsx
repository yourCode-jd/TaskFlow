const variantClasses = {
  primary: "bg-[var(--primary-color)] text-white hover:bg-blue-700",
  secondary: "bg-[var(--secondary-color)] text-black hover:bg-gray-300",
  outline: "border border-gray-400 text-black hover:bg-gray-100",
  danger: "bg-[var(--danger-color)] text-white hover:bg-red-700",
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
