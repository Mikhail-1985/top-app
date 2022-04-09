import React, { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {

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
    </>
  )
}
