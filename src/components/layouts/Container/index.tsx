import React from 'react';
import { containerStyles } from './styles';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({
  children,
  className,
}) => {
  const styles = containerStyles();

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {children}
    </div>
  );
};
