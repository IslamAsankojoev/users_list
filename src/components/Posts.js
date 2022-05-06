import React, {Fragment, useContext} from 'react'
import Appcontext from '../context.js'
import * as _ from 'lodash'

function Posts({posts, currentPage}) {
  const {searchValue, sort} = useContext(Appcontext)
  const filtereds = ()=>{
   return posts[currentPage-1]
    .filter((itemp)=>{return itemp.title.toLowerCase().includes(searchValue.toLowerCase())})
    
  }
  
  return (
    <>{
      
      _.sortBy(filtereds(), sort).map((item)=>{
              return <Fragment key={item.id}>
                          <tr>
                              <td className='id'>{item.id}</td>
                              <td className='title'>{item.title}</td>
                              <td className='body'>{item.body}</td>
                          </tr>
                      </Fragment>
                  
            
            
          })
          
        }


        
    </>
  )
}

export default Posts