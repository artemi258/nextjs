'use client';

import styles from './Menu.module.scss';

import CoursesIcon from '@/public/assets/icons/course.svg';
import ServicesIcon from '@/public/assets/icons/services.svg';
import BooksIcon from '@/public/assets/icons/books.svg';
import ProductsIcon from '@/public/assets/icons/products.svg';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const firstLevelMenu: FirstLevelMenuItem[] = [
 { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
 { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
 { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
 { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const MenuChildren = ({ menu }: { menu: MenuItem[] }): JSX.Element => {
 const pathname = usePathname();
 const firstCategory = 0;
 const [menuState, setMenuState] = useState<MenuItem[]>(menu);
 const setMenu = (newMenu: MenuItem[]) => {
  setMenuState(newMenu);
 };

 const openSecondLevel = (secondCategory: string) => {
  setMenu &&
   setMenu(
    menuState.map((m) => {
     if (m._id.secondCategory == secondCategory) {
      m.isOpened = !m.isOpened;
     }
     return m;
    }),
   );
 };

 const buildFirstLevel = () => {
  return firstLevelMenu.map((m) => {
   return (
    <div key={m.route}>
     <Link href={`${m.route}`}>
      <div
       className={cn(styles.firstLevel, {
        [styles.firstLevelActive]: m.id == firstCategory,
       })}>
       {m.icon}
       <span>{m.name}</span>
      </div>
     </Link>
     {m.id == firstCategory && buildSecondLevel(m)}
    </div>
   );
  });
 };

 const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
  return (
   <div className={styles.secondBlock}>
    {menuState.map((m) => {
     if (m.pages.map((p) => p.alias).includes(pathname)) {
      m.isOpened = true;
     }
     return (
      <div key={m._id.secondCategory}>
       <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
        {m._id.secondCategory}
       </div>
       <div
        className={cn(styles.secondLevelBlock, {
         [styles.secondLevelBlockOpened]: m.isOpened,
        })}>
        {buildThirdLevel(m.pages, menuItem.route)}
       </div>
      </div>
     );
    })}
   </div>
  );
 };

 const buildThirdLevel = (pages: PageItem[], route: string) => {
  return pages.map((p) => {
   return (
    <Link
     key={p._id}
     href={`/${route}/${p.alias}`}
     className={cn(styles.thirdLevel, {
      [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
     })}>
     {p.category}
    </Link>
   );
  });
 };

 return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
