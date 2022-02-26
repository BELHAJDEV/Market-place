import React,{useState,useEffect,useContext,useRef} from 'react';
import './room.css';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {db} from '../../Firebase';
import {SideBarContext} from '../../contexts/SideBarContext';
import Zoom from 'react-reveal/Zoom';
import firebase from 'firebase/compat';




function Room() {
    const [sellerName,setSellerName] = useState('');
    const {value2,value3} = useContext(SideBarContext);
    const [activeUser,setActiveUser] = value2;
    const [currentReceiver,setCurrentReceiver] = value3;
    const [message,setMessage] = useState('');
    const [getMessages,setGetMessages] = useState([]);
    const [valid,setValid] = useState(true)
    const [rec,setRec] = useState('')
    
    

    let {id} = useParams();

  

    useEffect(()=>{
        db.collection('posts')
        .doc(id).onSnapshot( snapshot => {
            setSellerName(snapshot.data().username)
            setRec(activeUser)
              
        });
        
        
        
        


    },[id])
    
    const getData = ()=>{
       
        db.collection('chats')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot => 
            setGetMessages(snapshot.docs.map(
                doc => {
                    
                    if(activeUser && 
                        (
                        (doc.data().sender.toLowerCase() === activeUser.toLowerCase()
                        &&
                      
                        doc.data().productId === id
                        )
                        ||
                        (
                        doc.data().receiver.toLowerCase() === activeUser.toLowerCase()
                        &&
                        doc.data().seller.toLowerCase() === doc.data().sender.toLowerCase()
                        &&
                        doc.data().productId === id
                        
                        )
                        
                        
                        
                        )){
                            
                       
                        return doc.data()
                    }
                    else{
                        return null
                    }
                } 
                
        )))
    }
    useEffect(()=>{
        
        getData()
        

    },[id,activeUser,sellerName])




    const hundleChange = (e)=> {
        setMessage(e.target.value)

    }
    const sendMessage = (e)=>{
        e.preventDefault();
        if(message !==''){
            db.collection('chats').add({
                productId : id,
                message,
                sender : activeUser,
                seller : sellerName,
                receiver : sellerName,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        
        setMessage('');
        
    }
   
    return (
        <div className='container'>
        <Zoom>
            <div className="room_container">
                <div className="header">
                    <div>
                        <Avatar 
                                alt={activeUser === sellerName ? "client" : sellerName }
                                className='avatar'
                                src="/static/images/avatar/1.jpg"
                                onClick={ ()=> { 
                                    
                                    
                                    }}
                        />
                    </div>
                    <h3>{activeUser === sellerName ? "client" : sellerName }</h3>
                    
                </div>
                <div className="chat" id='chat' >
                   
                        {getMessages && getMessages.map((msg,index) => {
                            if(msg){
                                return(
                                        <div 
                                        
                                        className={msg !== null && msg.sender.toLowerCase() === activeUser.toLowerCase() ? "message_receiver" : "message"}
                                        key={index}
                                        >   <h4>{msg ? msg.name :null}</h4>
                                            <p>{msg ? msg.message : null}</p>
                                            <span>
                                            {msg ? new Date(
                                            msg.timestamp?.toDate()
                                            ).toUTCString()
                                            :null}
                                            </span>

                                        </div>

                                )}
                            
                            
                        
                    } )}
                        

                    
                                
                </div>
                <div className="text-field">
                <form action="">
                <input type="text" name="" id="" 
                    placeholder={activeUser !== sellerName ? `Type a message to ${sellerName}` : 'Type a message to the Client'} 
                    value={message}
                    onChange={hundleChange}
                    />
                    <button type='submit' onClick={sendMessage}>
                     <i className="far fa-paper-plane"></i>

                    </button>
                    
                </form>
                    
                </div>

            </div>
        </Zoom>
        </div>
    )
}

export default Room
