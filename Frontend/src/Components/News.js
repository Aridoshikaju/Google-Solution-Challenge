import React,{useState,useEffect} from 'react'
import Cards from './news/Cards'
import db from './firebase_db';


function News() {
  const [blogs,setBlogs]=useState([]);

  // useEffect(() => {
  //   fetchBlogs();
  // }, [])


  // const fetchBlogs=async()=>{
  //   const response=db.collection('News DB');
	// 	const data = await response.get();
	// 	data.docs.forEach(item=>{
	// 		setBlogs([...blogs,item.data()])

	// 		})

  // }

  useEffect(() => {
    db.collection('News DB').orderBy('TimeDateStamp','desc').onSnapshot(snapshot =>(setBlogs(snapshot.docs.map(doc => ({
        data : doc.data()
      })
      ))
    ))
  },[])

  console.log(blogs)
  console.log(blogs[1]?.data.Title)
  var doc_arr = [];
  var arr_length = 0;
  // db.collection('News DB').get().then(element => {arr_length = element.docs.length; console.log(arr_length)});
  return (
    <Cards Title1={blogs[0]?.data.Title} Title2={blogs[1]?.data.Title} Title3={blogs[2]?.data.Title} Content1={blogs[0]?.data.Content} Content2={blogs[1]?.data.Content} Content3={blogs[2]?.data.Content} Image1={blogs[0]?.data.Image_url} Image2={blogs[1]?.data.Image_url} Image3={blogs[2]?.data.Image_url} />
    
    // <div>
		// {
      
		// 		// blogs.map(blog=>(
          
    //     //   <Cards Title={blog.data.Title} Content={blog.data.Content} />
    //     //   // return(
    //     //   //   <div className="blog-container">
    //     //   //     <h4>{blog.data.Title}</h4>
    //     //   //     <p>{blog.data.Content}</p>
              
    //     //   //   </div>
    //     //   // )
    //     // ))
    //     <Cards Title1={blogs[0]?.data.Title} Title2={blogs[1]?.data.Title} Title3={blogs[2]?.data.Title} Content1={blogs[0]?.data.Content} Content2={blogs[1].data.Content} Content3={blogs[2]?.data.Content} />
        
		// }
    // </div>
  )
}

export default News

{/* <Cards/> */}
{/* {blog.title} */}