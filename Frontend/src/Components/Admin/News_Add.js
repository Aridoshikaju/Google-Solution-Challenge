import React,{useState} from 'react';
// import { firestore } from 'firebase-admin';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import db,{storage} from '../../firebase_db';
import { toast } from 'react-toastify';

function News_Add() {
    const [formData,setformData] = useState({
        Content:"",
        Image_url:"",
        TimeDateStamp: firebase.firestore.Timestamp.now().toDate(),
        Title:"",    
    })

    const [progress,setProgress] = useState(0);

    // console.log(firebase.firestore.Timestamp.now().toDate())
    const handleChange = (e)=>{
        setformData({...formData, [e.target.name] : e.target.value });
    }

    const handleImageChange = (e)=>{
     setformData({...formData, Image_url : e.target.files[0] });   
    }

    const handlePublish = ()=>{
        if(!formData.Content || !formData.Image_url || !formData.Title){
            alert("please fill all the fields");
            return;
        }

        const storageRef = ref(storage, `/images/${Date.now()}${formData.Image_url.name}`);

        const uploadImage = uploadBytesResumable(storageRef, formData.Image_url)

        uploadImage.on("state_changed" , 
            (snapshot) => {
                const progressPercent = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) * 100);
                setProgress(progressPercent);
            },
            (err)=>{
                console.log(err);
            },
            () => {
                setformData({
                    Content:"",
                    Image_url:"",
                    Title:"",
                });

                getDownloadURL(uploadImage.snapshot.ref)
                .then((url) => {
                    db.collection('News DB').add({
                        Content : formData.Content,
                        Image_url : url,
                        TimeDateStamp : firebase.firestore.Timestamp.now().toDate(),
                        Title : formData.Title,
                    })
                    .then(() => {
                        toast("News added successfully", {type : "success"});
                        setProgress(0);
                    })
                    .catch(err => {
                        toast("Error adding article", {type : "error"});
                    })
                })
            }    
        )
    }

  return (
    <div className='container m-5'>
        <div className='row h2'><div className='col'><u>Add Events</u></div></div>
        <div className='row mt-2'>
            <div className='col-md-8'>
                {/* <p className='text-left'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p> */}

                <label htmlFor=''>Title</label>
                <input type="text" name='Title' className='form-control' 
                    value={formData.Title}
                    onChange={(e) => handleChange(e)}
                />

                <label htmlFor=''>Content</label>
                <textarea name='Content' className='form-control' 
                    value={formData.Content}
                    onChange={(e) => handleChange(e)}
                />

            </div>
            <div className='col-md-4'>
                {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                <label htmlFor=''>Image</label>
                <input type="file" name='image' accept='image/' className='form-control' 
                    onChange={(e) => handleImageChange(e)}
                />

                {progress === 0 ? null : (
                    <div className='progress'>
                        <div className='progress-bar progress-bar-striped m' style={{width:`${progress}%`}}>
                            {`uploading image ${progress}%`}
                        </div>
                    </div>
                )}

                
                <button className='form-control btn-primary mt-2' onClick={handlePublish}>Publish</button>
            </div>
            
        </div>
        
        {/* <div className='border p-3 mt-3 bg-light' style={{position:'fixed'}}>
            <h2>Add Events</h2>
            <label htmlFor=''>Title</label>
            <input type="text" name='title' className='form-control'/>

            <label htmlFor=''>Content</label>
            <textarea name='content' className='form-control'/>

            <label htmlFor=''>Image</label>
            <input htmlFor='file' name='image' accept='image/' className='form-control'/>

            <div className='progress'>
                <div className='progress-bar progress-bar-striped mt-2' style={{width:'50%'}}>
                    50%
                </div>
            </div>

            <button className='form-control btn-primary mt-2'>Publish</button>
        </div> */}
        
    </div>
  )
}

export default News_Add