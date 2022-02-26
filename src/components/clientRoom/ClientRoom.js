import React,{useState,useEffect,useContext} from 'react';
import './clientRoom.css';
import {db} from '../../Firebase';
import {SideBarContext} from '../../contexts/SideBarContext';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';



function ClientRoom() {
    
    
    const {value2} = useContext(SideBarContext);
    const [activeUser,setActiveUser] = value2;
    
    const [messages,setMessages] = useState([]);
    

    const getData = ()=>{
       
        db.collection('chats')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => 
            setMessages(snapshot.docs.map(
                doc => {
                    if(activeUser 
                   
                    && 
                    doc.data().receiver.toLowerCase() === activeUser.toLowerCase()

                    && doc.data().seller.toLowerCase() === activeUser.toLowerCase() 
                    ){
                       
                        return doc.data()
                    }
                    else{
                        return null
                    }
                } 
                
        )))
    }
    useEffect(()=>{
        getData();
        return () => setMessages([])

    },[activeUser])


    return (
        <div className='messages_container'>
         
            
            {messages && messages.map((msg,id) => {

                if(msg != null  && Object.keys(msg).length !== 0 ){
                    return(
                    <Fade top key={id}>
                        <Link to={`/Post/${msg.productId}/${msg.sender}/Client`}>

                        <div>
                            <h3>{msg.sender}</h3>
                            <p>{msg.message}</p>
                        </div>
                        </Link>
                        
                    
                    
                    </Fade>
                    )
                }
                
                
                
            }
            
            )}
            
            
               
           
           


           
        </div>
    )
}

export default ClientRoom
