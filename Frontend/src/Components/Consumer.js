import React from 'react'
import Slideshow from './Consumer/Slideshow'
import Forms from './Consumer/Forms'
// import Todav from './Consumer/Form'
// import Table from './Consumer/Table'
// import Graph from './Consumer/Graph'

function Consumer() {
  return (
    <div>
        <Slideshow/>
        <Forms/>
        {/* <br/>
         <Todav/> 
         <br/><br/><br/>
         <Table/>
         <br/><br/><br/>
         <Graph/>
         */}
    </div>
  )
}

export default Consumer;