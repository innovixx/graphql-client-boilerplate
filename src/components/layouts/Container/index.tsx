import React from 'react';
import styles from './styles.module.scss';
import { constructClassName } from '../../../utils/constructClassName';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({
  children,
  className,
}) => (
  <div className={constructClassName([styles.container, className])}>
    {children}
  </div>
);
