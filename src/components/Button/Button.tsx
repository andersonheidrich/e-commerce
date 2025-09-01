import type { ButtonProps } from "./interfaces";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
