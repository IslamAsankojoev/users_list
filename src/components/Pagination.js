import React, { useContext } from 'react'
import Appcontext from '../context.js'
import {
    Link
  } from "react-router-dom";

export default function Pagination() {
    const {pageQty, currentPage, setCurrentPage} = useContext(Appcontext)
    

  return (
    <>
    {pageQty &&
        <div className="pagination">
        <Link 
        to={`page${currentPage-1}`} 
        onClick={()=>{setCurrentPage(currentPage-1)}} 
        className={`btn pagination__btn ${currentPage === 1 ? 'disable' : ''}`}
        >Назад</Link>
        <div className="pagintaion__items">
            
          {pageQty.map((item)=>{
            return <Link to={`page${item}`} key={item} onClick={()=>{setCurrentPage(item)}} className={`btn pag__${item===currentPage ? 'active' : ''}`}>{item}</Link>
          })}
          
        </div>
        
        <Link 
        to={`page${currentPage+1}`} 
        onClick={()=>{setCurrentPage(currentPage+1)}} 
        className={`btn pagination__btn ${currentPage === pageQty.length ? 'disable' : ''}`}>Далее</Link>
      </div>
        }
    </>
  )
}
