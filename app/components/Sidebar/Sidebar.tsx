import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';
import cn from 'classnames';

const Sidebar = (props: ISidebarProps): JSX.Element => {
 return <div {...props}>SIDEBAR</div>;
};

export default Sidebar;
