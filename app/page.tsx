'use client';

import { useState } from 'react';
import styles from '../public/style/page.module.scss';
import { Button } from '../components';
import { Htag } from '../components/Htag/Htag';
import P from '../components/P/P';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';

export default function Home() {
 const [rating, setRating] = useState<number>(4);

 return (
  <main className={styles.main}>
   <Htag tag='h1'>TEXT</Htag>
   <Button arrow='right' appearance='primary'>
    Узнать подробнее
   </Button>
   <Button arrow='down' appearance='ghost'>
    Узнать подробнее
   </Button>
   <P fz='14'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi, officia aliquid
    sed accusamus voluptas magnam tempora quis. Maxime sed molestiae illum deserunt dolor,
    repellat voluptatem consequuntur laudantium ut dolorem?
   </P>
   <P>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi, officia aliquid
    sed accusamus voluptas magnam tempora quis. Maxime sed molestiae illum deserunt dolor,
    repellat voluptatem consequuntur laudantium ut dolorem?
   </P>
   <P fz='18'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi, officia aliquid
    sed accusamus voluptas magnam tempora quis. Maxime sed molestiae illum deserunt dolor,
    repellat voluptatem consequuntur laudantium ut dolorem?
   </P>
   <Tag>маленький</Tag>
   <Tag size='m'>Большой</Tag>
   <Tag color='red'>red</Tag>
   <Tag color='green'>Green</Tag>
   <Tag>Ghost</Tag>
   <Tag color='primary'>Primary</Tag>
   <Rating isEditable rating={rating} setRating={setRating} />
  </main>
 );
}
