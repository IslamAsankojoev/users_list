import React, {useContext, useState, useEffect} from 'react'
import Appcontext from '../context.js'

export default function Td({classN, text, sortBy, active}) {
    const {sort, setSort} = useContext(Appcontext)
    const [arrowActive, setArrowActive] = useState(false)


    const handleClick = (sortBy)=>{
        setArrowActive((prev)=>!prev)
        setSort(sortBy)
    }

  return (
    <td className={classN} onClick={()=>{handleClick(sortBy)}}>{text}<img src="/arrow-down.svg" className={sort===classN && 'active'} alt="" /></td>
  )
}
