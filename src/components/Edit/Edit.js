import React,{useState,useEffect,useContext} from 'react';
import './edit.css';
import {SideBarContext} from '../../contexts/SideBarContext';
import {storage,db} from '../../Firebase';
import firebase from 'firebase/compat';
import { Zoom } from 'react-reveal';
import {Link,useNavigate,useParams} from 'react-router-dom'

function Edit() {
    let {id} = useParams();
    let navigate = useNavigate()
    const [imagesSelected,setImagesSelected] = useState([]);
    const [imagesName,setImagesName] = useState([])
    const {value2} = useContext(SideBarContext);  
    const [activeUser,setActiveUser] = value2;
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [place,setPlace] = useState('');

    useEffect(()=>{
        db
        .collection('posts')
        .doc(id)
        .onSnapshot( snapshot => {
            setTitle(snapshot.data().productName);
            setPrice(snapshot.data().price);
            setPlace(snapshot.data().place);
            setCategory(snapshot.data().category)
        })
        

    },[id])

    let i =-1;
    const hundleSelect = ()=> {
        let input = document.getElementById('file');
        input.click();
        i++;    
    }

    const hundleChange = (e) =>{
        
        if(e.target.value !== ''){
    
            setImagesSelected([e.target.files[i],...imagesSelected]);
            setImagesName([e.target.files[i].name,...imagesName])
                     
        }
    }

let j = 0
   let content = [];
   const Add = ()=> {
       db.collection('posts').doc(id).set({
           productName : title,
           price,
           imagesUrl : content,
           username : activeUser,
           place,
           category,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()


       });
       setImagesSelected([])
       navigate('/')
       
   }
    const saveArticle = async(e)=>{
        e.preventDefault();
        
        
         imagesSelected.map( async (image) => { 
            
            await storage.ref(`images/${image.name}`).put(image);
            await storage.ref('images').child(image.name).getDownloadURL().then(
                url => {
                    content.unshift(url);
                    j++;
                })
        
           
            if(j === imagesSelected.length) {
                Add()
            }
           
        })
        
    
        setPlace('');
        setTitle('');
        setCategory('');
        setPrice('');
        

    }

    return (
        <Zoom>
        <div className="container">
        
        <input type="file" className='file'
            onChange={hundleChange}
            name="" id="file" />

        
            <div className='add_container'>
            <h3>Edit Post</h3>

            <div className="data_container"
            onClick={hundleSelect}
            >
                  <h4>{imagesSelected.length} Selected +</h4>

            </div>
            <div className="details">
                <form action="">
                    <div className="title">
                        <input type="text" placeholder='Title' name="" id="" value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                        />
                    </div>
                    <div className="price">
                    <input type="text" placeholder='Price' name="" id="" 
                         value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                    />

                    </div>
                    <div className="category">
                    <input type="text" placeholder='Category' name="" id="" 
                         value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                    />
                        <i className="fas fa-caret-down"></i>             
                    </div>
                    <div className="place">
                        <input type="text" placeholder='Place' name="" id=""
                        value={place}
                        onChange={(e)=> setPlace(e.target.value)}
                         />
                        <i className="fas fa-map-marker-alt"></i>
                    </div>

                    <div className="save_article">
                        <button type='submit' onClick={saveArticle}>
                        <Link to='/'>
                        Edit
                        </Link>
                        </button>
                    </div>

                    
                </form>
            </div>

        
            </div>
            
        </div>
        
        </Zoom>
    )
}

export default Edit
