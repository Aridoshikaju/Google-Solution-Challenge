import React from 'react'
import Slideshow from './Provider/slideshow'
import Todav from './Provider/Todav'
import Table from './Provider/Table'
import Graph from './Provider/Graph'
import Table_demo from './Provider/Table_demo'

function Provider() {
  return (
    <div>
        <Slideshow/>
        <br/>
         <Todav/> 
         <br/><br/><br/>
         {/* <Table/> */}
         <Table_demo/>
         <br/><br/><br/>
         <Graph/>
        
    </div>
  )
}

export default Provider;