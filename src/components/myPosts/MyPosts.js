import React,{useState,useEffect,useContext} from 'react';
import './myPost.css';
import {db} from '../../Firebase';
import Zoom from 'react-reveal/Zoom';
import Slider from "react-slick";
import {Link,useNavigate} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import cap from '../../images/cap-1.jpg'
import cap2 from '../../images/cap-2.jpg'
import {SideBarContext} from '../../contexts/SideBarContext';



function MyPosts() {
    const [myPosts,setMyPosts] = useState([]);
    const [on,setOn] = useState(false);
    const {value2} = useContext(SideBarContext);
    const [activeUser,setActiveUser] = value2;
    const [ids,setIds] = useState([])
    const navigate = useNavigate()
    

let date = 0;
let item = '';

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc')
        .onSnapshot(snapshot => 
            setIds(
                snapshot.docs.map(doc => {
                    if(activeUser && doc.data().username.toLowerCase() === activeUser.toLowerCase()){
                        // console.log(doc.data().timestamp.seconds)
                        
                        return doc.id;
                    }else{
                        return null;
                    }
                })
            ))
            

        db.collection('posts').orderBy('timestamp','desc')
        .onSnapshot(snapshot => 
            setMyPosts(snapshot.docs.map(doc => {
                if(activeUser && doc.data().username.toLowerCase() === activeUser.toLowerCase()){
                    // console.log(doc.data().timestamp.seconds)
                    
                    return doc.data();
                }else{
                    return null;
                }
            })))        

    },[activeUser])

    const Delete = (id)=>{

        db.collection('posts').doc(id).delete()
        setOn(false)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='my_posts_container'>
        {myPosts && ids && myPosts.map((post,id) =>{
            if(post !== null){
                
                item = 0
                date = new Date(post.timestamp.seconds);
                
                
                 
                return(

               
            <div className="my_post" key={id}>
                <div className="post_header">
                    <div className="right">
                    <Avatar 
                            alt={post.username ? post.username : ''}  
                            className='avatar'
                            src="/static/images/avatar/1.jpg"
                            />
                        <h3>{post.username}</h3>
                    </div>
                    <div className="left">
                    <i className="far fa-edit" onClick={()=> navigate(`/Post/${ids[id]}/Edit`)}/>
                    <i className="far fa-trash-alt" onClick={()=> Delete(ids[id])}></i>
                    </div>
                   
                </div>
                <div className="post_image">
                    <Slider {...settings} className='slider'>
                    {Object.keys(post.imagesUrl).length !== 0 && post.imagesUrl.map((image,i) =>{
                        return(
                            <img key={i} src={image} alt="" />
                        )
                    })}
                    
                    
                    </Slider>
                </div>
                <div className="post_date">
                    <p>
                    {post ? new Date(
                    post.timestamp?.toDate()
                    ).toUTCString()
                    :null}
                    </p>
                    
                </div>
            </div>
            )
            }
        })}
            
        </div>
    )
}

export default MyPosts
