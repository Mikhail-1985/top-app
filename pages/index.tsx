import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { Layout, withLayout } from '../layout/Layout';
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import styles from '../styles/main.module.css'

function Home({menu}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(1)

  return (
    <>
        <Htag tag={'h1'}>
          <span className={styles.h1}>
            Добро пожаловать в рейтинг самых популярный курсов
          </span>
        </Htag>
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> =async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
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