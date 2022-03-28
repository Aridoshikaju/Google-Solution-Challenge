import React from 'react'
// import First from '../images/deskyop.png'
// import Second from '../images/Screenshot 2021-12-06 163856.png'
import Third from '../images/glass1.jpeg'
import {Card, Button} from 'react-bootstrap'
//import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import firebase from 'firebase/compat/app';



function Cards({Title1,Title2,Title3,Content1,Content2,Content3,Image1,Image2,Image3}){
    
    // const firebaseApp = firebase.apps[0];
    console.log(Title1)
    return(
      // <Row xs={1} md={3} className="Container" >
      //   <Col>
      //     <Card style={{ width: '18rem' }} >
      //     <Card.Img variant="top" src={Third} />
      //     <Card.Body>
      //       <Card.Title>{Title1}</Card.Title>
      //       <Card.Text>
      //         {Content1}
      //       </Card.Text>
      //       <Button variant="primary">Go somewhere</Button>
      //     </Card.Body>
      //     </Card>
      //   </Col>
      //   <Col>
      //     <Card style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src={Third} />
      //     <Card.Body>
      //       <Card.Title>{Title2}</Card.Title>
      //       <Card.Text>
      //         {Content2}
      //       </Card.Text>
      //       <Button variant="primary">Go somewhere</Button>
      //     </Card.Body>
      //     </Card>
      //   </Col>
      //   <Col>
      //     <Card style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src={Third} />
      //     <Card.Body>
      //       <Card.Title>{Title3}</Card.Title>
      //       <Card.Text>
      //         {Content3}
      //       </Card.Text>
      //       <Button variant="primary">Go somewhere</Button>
      //     </Card.Body>
      //     </Card>
      //   </Col>
        
        
      // </Row>



      <div xs={1} md={3} className="container shadow p-3 mt-5 mb-5 bg-#282c34 rounded" >
        <div className='row h2'><div className='col'><h2>Latest News</h2></div></div>
        <div className='row'>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor:'rgb(248, 164, 38)' }} >
          <Card.Img variant="top" src={Image1} />
          <Card.Body>
            <Card.Title>{Title1}</Card.Title>
            <Card.Text>
              {Content1}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor:'rgb(248, 164, 38)'  }}>
          <Card.Img variant="top" src={Image2} />
          <Card.Body>
            <Card.Title>{Title2}</Card.Title>
            <Card.Text>
              {Content2}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor:'rgb(248, 164, 38)'  }}>
          <Card.Img variant="top" src={Image3} />
          <Card.Body>
            <Card.Title>{Title3}</Card.Title>
            <Card.Text>
              {Content3}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        
        </div>
      </div>








      // console.log(Title),
      // <Card style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src={Third} />
      //     <Card.Body>
      //       <Card.Title>{Title}</Card.Title>
      //       <Card.Text>
      //         {Content}
      //       </Card.Text>
      //       <Button variant="primary">Go somewhere</Button>
      //     </Card.Body>
      //     </Card>
  //   <Row xs={1} md={2} className="g-4">
  //   {Array.from({ length: 10 }).map((_, idx) => (
  //     <Col>
  //       <Card>
  //         <Card.Img variant="top" src="holder.js/100px160" />
  //         <Card.Body>
  //           <Card.Title>Card title</Card.Title>
  //           <Card.Text>
  //             This is a longer card with supporting text below as a natural
  //             lead-in to additional content. This content is a little bit longer.
  //             {/* {JSON.stringify(firebaseApp.options, null, 2)} */}
  //           </Card.Text>
  //         </Card.Body>
  //       </Card>
  //     </Col>
  //   ))}
  // </Row>
  );
}

export default Cards