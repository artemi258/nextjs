import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';

const Header = (props: IHeaderProps): JSX.Element => {
 return <div {...props}>HEADER</div>;
};

export default Header;
