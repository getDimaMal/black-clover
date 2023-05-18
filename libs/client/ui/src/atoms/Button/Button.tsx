import React, { FC } from 'react';

export type ButtonProps = {
  label: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
