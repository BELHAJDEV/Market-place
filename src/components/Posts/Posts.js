import React, { useEffect, useState , useContext } from 'react';
import './posts.css';
import {db} from '../../Firebase';
import Zoom from 'react-reveal/Zoom';
import {Link} from 'react-router-dom';
import {SideBarContext} from '../../contexts/SideBarContext'

function Posts() {
    const [posts,setPosts] = useState([]);

    const {value1} = useContext(SideBarContext);
    const [fixHeight,setFixHeight] = value1;

    useEffect(()=>{
        data();
        return () => setPosts([])
        

    },[])

    const data = ()=> {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot( snapshot => {
            setPosts( snapshot.docs.map(doc => ({
                id:doc.id,
                post : doc.data()
            }))

            )
        });
    }

    return (
        <Zoom>
        <div className={fixHeight === false ? 'posts_container' : 'post_container of' }
         onClick={()=> setFixHeight(false)}
        >
        
        
        {posts.map( ({id , post})=>{
            return(
                <Link to = {`/Post/${id}`} key={id + '1'}>

                <div className="posts" key={id}>
                    <img src={post.imagesUrl[0]} alt="" />
                    <h4>{post.productName}</h4>
                    <h3>{post.price}</h3>
                </div>
                </Link>
                
            )
        }
            
        

        )}
        
       
            
        </div>
        </Zoom>
        
    )
}

export default Posts
