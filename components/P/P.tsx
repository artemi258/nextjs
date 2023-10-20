import styles from './P.module.scss';
import { IPProps } from './P.props';
import cn from 'classnames';

const P = ({ children, fz = '16', className, ...props }: IPProps): JSX.Element => {
 return (
  <p className={cn(styles.P, className, styles[`fz${fz}`])} {...props}>
   {children}
  </p>
 );
};

export default P;
