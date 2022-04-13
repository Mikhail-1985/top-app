import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { Layout, withLayout } from '../layout/Layout';
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface';

function Home({menu}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(1)

  return (
    <>
        <Htag tag={'h1'} >some text</Htag>
      <Button appearance='primary' arrow={'right'}>+</Button>
      <Button appearance='ghost' arrow={'right'}>-</Button>
      <P size={"s"}>Some text</P>
      <P size={"m"}>Some text</P>
      <P size={"l"}>Some text</P>
      <Tag size={"m"} color={"red"}>red</Tag>
      <Tag size={"m"} color={"green"}>green</Tag>
      <Tag size={"m"} color={"primary"}>primary</Tag>
      <Rating isEditable setRating={setRating} rating={rating}/>
      <Input placeholder='test'/>
      <Textarea placeholder='test'/>
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> =async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}