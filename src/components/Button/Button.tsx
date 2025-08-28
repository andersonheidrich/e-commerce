import type { ButtonProps } from "./interfaces";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  // const baseClasses = "w-full h-16 items-center cursor-pointer";

  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
