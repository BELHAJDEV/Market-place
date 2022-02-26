import React,{useState,useEffect,useContext} from 'react';
import './postDetail.css';
import { useParams } from 'react-router-dom';
import {db} from '../../Firebase';
import Zoom from 'react-reveal/Zoom'
import {Link} from 'react-router-dom';
import {SideBarContext} from '../../contexts/SideBarContext';
import Slider from "react-slick";




function PostDetail() {
    let {id} = useParams();
    const [postDetail,setPostDetail] = useState({});
    const [sellerName,setSellerName] = useState('');
    const {value2} = useContext(SideBarContext);
    const [activeUser,setActiveUser] = value2;

    

    useEffect(()=>{
        db.collection('posts')
        .doc(id).onSnapshot( snapshot => {
            setPostDetail(snapshot.data());
            setSellerName(snapshot.data().username)
     
        });
        

    },[id]);
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
 
        <Zoom>
        
        {activeUser && sellerName !== activeUser ? (
            <div className="contact">
                <Link to={`/Post/${id}/ContactRoom`}>
                    Contact Seller
                </Link>
            </div>

        ):(<div></div>)}

       {activeUser ? ( 
        <div className='post_detail_container'>
        
        <Slider {...settings} className='slider_two'>
        {Object.keys(postDetail).length !== 0  ? (
            postDetail.imagesUrl.map((url,index) => {
                return (
                    

                  
                   <div className='post_img' key={index}>
                        
                            <img src={url} alt="" />      
                                
                    </div>
                                 
                    
                    
                )
            })
               
        ):null}
        
        
        </Slider>    
        </div>
        ):(
            <div className='err_login'>
            <h1><i className="fas fa-exclamation-triangle"></i></h1>
                <h1>You have to Login</h1>
                
            </div>
        )}
        
        
        </Zoom>

       
    
       

    )
}

export default PostDetail
