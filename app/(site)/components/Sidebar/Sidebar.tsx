import { Menu } from '..';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';
import cn from 'classnames';

export const Sidebar = (props: ISidebarProps): JSX.Element => {
 return (
  <div {...props}>
   <Menu />
  </div>
 );
};
