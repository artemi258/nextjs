import { getMenu } from '@/helpers/requests';
import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.props';
import { MenuChildren } from './MenuChildren';

export const Menu = async (): Promise<JSX.Element> => {
 const menu = await getMenu(0);

 return <div className={styles.menu}>{<MenuChildren menu={menu} />}</div>;
};
