import React, { useContext } from 'react'
import Appcontext from '../context.js'

export default function Search() {
  const {searchValue, setSearchValue} = useContext(Appcontext)
  return (
    <>
    <input className='search' type="text" placeholder='Поиск' value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} />
    </>
  )
}
