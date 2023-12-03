import React from 'react'
import { useUserAccountData } from "../hooks/index";
import { Card, Spinner } from '../components'
import "../styles/UserFavs.css";

export const UserFavs = () => {


  const { user, avatar, isFetching, favs} = useUserAccountData()

  return (
    <div className='AccountPanelUserFavs'>
      {isFetching && <Spinner />}
      {favs.map(instrument => (
        <Card
          key={instrument.id}
          id={instrument.id}
          name={instrument.name}
          image={instrument.image[0].image}
          score={instrument.score}
          category={instrument.category.name}
        />
      ))}
    </div>
  )
}
