import axios from 'axios';
import * as _ from 'lodash'
import { Fragment, useEffect, useState } from 'react';
import Appcontext from './context.js'
import './App.scss';
import Pagination from './components/Pagination';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Postsc from './components/Posts';
import Search from './components/Search';
import Td from './components/Td';



function App() {
  const [posts, setPosts] = useState([[]])
  const [pageQty, setPageQty] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [sort, setSort] = useState('id')
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const perPage = 10
  

  useEffect(()=>{
    axios.get(url)
    .then(({data})=>{
      setPosts(_.chunk(data, perPage))
      setPageQty(_.range(1, Math.ceil(data.length/perPage)+1))
    }).then(()=>{
      window.location.href.includes('page') && setCurrentPage(Number(_.last(window.location.href.split('page'))))
    })
    
  }, [])

  

  return (
    <Appcontext.Provider value={ {posts, pageQty,currentPage, searchValue,sort, setSort, setSearchValue, setPageQty, setCurrentPage} }>
      <Router>
      <div className="container">
      <Search/>
      <table>
        <tbody>
        <tr className='head'>
          <Td classN={'id'} text={"ID"} sortBy={'id'}/>
          <Td classN={'title'} text={"Заголовок"} sortBy={'title'}/>
          <Td classN={'body'} text={"Описание"} sortBy={'body'}/>
        </tr>
        
        <Routes>
        

        <Route path='/' exact element={<Postsc posts={posts} currentPage={currentPage} />}/>
        
          {pageQty && pageQty.map((item)=>{
            return  <Fragment key={item}>
                      <Route path={`/page${currentPage}`} exact element={<Postsc posts={posts} currentPage={currentPage} />}/>
                    </Fragment>
          })}
        </Routes>
        </tbody>
      </table>
        <Pagination/>
      </div>
      </Router>
    </Appcontext.Provider>
    
  );
}

export default App;
