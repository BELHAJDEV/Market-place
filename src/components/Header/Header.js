import React from 'react';
import './header.css';
import {useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../Firebase'
import Avatar from '@material-ui/core/Avatar';
import { SideBarContext } from '../../contexts/SideBarContext';
// import Typical from 'react-typical';



function Header() {

    const [open,setOpen] = useState(false);
    const [openSide,setOpenSide] = useState(false);
    const [text,setText] = useState('');
    const [openSignIn ,setOpenSignIn] = useState(false);
    const [openSignUp ,setOpenSignUp] = useState(false);
    
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState(null);
    const [getName,setGetName] = useState('');
    const [close,setClose]= useState(false);

    const {value1,value2,value3} = useContext(SideBarContext);
    const [fixHeight,setFixHeight] = value1;
    const [activeUser,setActiveUser] = value2;

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((authUser)=> {
          if(authUser) {
            // user has logged in
            
            setUser(authUser);    
            setGetName(authUser.displayName);
            setActiveUser(authUser.displayName);
            
                  
          }else{
            //  user has slogged out
            setUser(null)
            
          }
        })
        return () => {
          unsubscribe();
          
        }
      },[user,username,setActiveUser])

    useEffect(()=>{
        setFixHeight(close);

    },[fixHeight,close,setFixHeight]) 
     

    const login = (e)=> {
        e.preventDefault();
        console.log(text);
        setText('');

        

    }
    const signIn = (e)=>{
        e.preventDefault();

        console.log(
          
            "The email in ",email,
            "The pass in ",password
            );
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error)=> alert(error.message))
        setOpenSignIn(false);
        setClose(false);
    }
    async function signUp (e){
        e.preventDefault();
        
            await auth.createUserWithEmailAndPassword(email,password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                displayName : username,
              });
            
              
              
            })
            .catch((error) => alert(error.message) );
            
        
        setOpenSignUp(false);
        console.log(getName);
        setClose(false);
        window.location.reload();
       
        
        
    }
    
    
    

    
    
    return (
        

            <div className={close === false ? 'header': 'header of'}>
        
        

            <div className="header__container">
                <div className="logo">
                <Link to='/' className='logo' onClick={()=>{
                    setOpenSide(false);
                    setClose(false)
                }}>
                    <i className="fas fa-store"></i>
                    <h3>
                    
                    Market place
            
                    </h3>
                </Link>
                
                </div>
            <div className="search">
                <form action="">

                <input 
                    type="text" 
                    placeholder='Search an item ...'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                 />
                 <button type="submit" onClick={login}>
                 <i className="fas fa-search"></i>

                 </button>
                

                </form>
                
            </div>

            {/*  */}
            {user ? (
                <div className='right_container'>
                    <div className='logout' onClick={()=> auth.signOut()}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <div>
                        <Avatar 
                            alt={getName}  
                            className='avatar'
                            src="/static/images/avatar/1.jpg"
                            onClick={ ()=> { 
                                console.log(getName);
                                setClose(!close)
                                setOpenSide(true);
                                
                                }}
                        />
                    </div>
                </div>
                
                
            ):(
            
            <div className="auth">

                <div className="link sign_in"
                onClick={()=>{
                    setOpenSignUp(false);
                    setOpenSignIn(true);
                    setClose(true);
                    
                }}>
                    <h3>Sign In</h3>
                </div>
                
                <div className="link sign_up"
                 onClick={()=>{
                    setOpenSignIn(false);
                    setOpenSignUp(true);
                    setClose(true);

                }} >
                    <h3>Sign up</h3>
                </div>

                <i className="fas fa-bars" onClick={() => {

                setOpen(!open);
                setClose(!close);

                
                }}></i>
            </div>

            )}
            
            {open === true ? (
                <div className="auth-mobile">
                <div className="signIn" onClick={() => {
                    setOpen(false);
                    setOpenSignUp(false);
                    setOpenSignIn(true);
                    setClose(true);
                    

                }}>
                    <Link to=''>
                        Sign In
                    </Link>
                    
                </div>
                <div className="signUp"
                    onClick={()=> {
                        setOpen(false);
                        setOpenSignIn(false);
                        setOpenSignUp(true);
                    setClose(true);


                        }}
                >
                    <Link to=''>
                        Sign Up
                    </Link>
                </div>
                </div>

            ): null}

            {/*  */}

            <div className={openSide === false ? "sidebar" : 'sidebar on'}>
            <div className="sidebar_header">
                <div className='profil'>
                    <Avatar alt={getName} 
                        className='avatar'
                        src="/static/images/avatar/1.jpg"
                        onClick={()=> console.log(user.displayName)}
                    />
                    <h4>{getName}</h4>
                </div>
                        
                <div className="close_icon" onClick={()=>
                {
                    setOpenSide(false);
                    setClose(false)
                    
                }}>
                    <i className='fas fa-times'></i>
                </div>
                
            </div>
            <div className="features">
                <div className="add_post" onClick={()=> {
                    setOpenSide(false);
                    setClose(false);
                }}>
                    <Link to='/addPost' >
                    <i className='fa fa-plus-square'></i>
                    <h4>Add post</h4>
                    </Link>
                    
                </div>

                <div className="my-posts"
                onClick={()=> {
                    setOpenSide(false);
                    setClose(false);
                }}
                >
                <Link to='/myPosts'>
                    <i className="fas fa-book-reader"></i>
                    <h4>Your posts</h4>
                </Link>
                </div>
                
                <div className="msgs"
                onClick={()=> {
                    setOpenSide(false);
                    setClose(false);
                }}
                >
                <Link to='/Inbox'>
                    <i className="fas fa-envelope"></i>
                    <h4>Inbox</h4>
                </Link>
                </div>

                {/* <div className="reviews"
                onClick={()=> {
                    setOpenSide(false);
                    setClose(false);
                }}

                >

                    <Link to='/Reviews'>
                    <i className="far fa-star"></i>
                    <h4>Your reviews</h4>
                    </Link>
                </div> */}
                <div className='logout' onClick={()=>{
                    auth.signOut();
                    setOpenSide(false);
                    setClose(false);
                    
                }
                }>
                        <i className="fas fa-sign-out-alt"></i>
                        <h4>Logout</h4>
                </div>



            </div>
            
        </div>
            
        </div>
        <div className="login">
        {openSignIn === true ? (
            
            <div className='signIn_container'>
            <form>
            <h3>Sign In</h3>
            <i className='fas fa-times' onClick={()=>{
                    setClose(false);
                    setOpenSignIn(false);
                    }}></i>
            <div className="email">
                <h4>Email</h4>
                <input type="email" placeholder='email..' value={email} onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="pass">
                <h4>Password</h4>
                <input type="password" placeholder='Password'
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                />

            </div>
            <button 
                type="submit"
                onClick={signIn}>
                Sign in</button>
        </form>
        
            </div>
        ):null}
        {openSignUp === true ? (

        
            <div className='signUp_container'>
    
                <form>
                    <h3>Sign Up</h3>
                    <i className='fas fa-times' onClick={()=> {
                        setClose(false);
                        setOpenSignUp(false)
                    }}></i>

                    <div className='username'>
                        <h4>Username</h4>
                        <input type="text"
                            placeholder='Username'
                            value={username} onChange={(e)=>setUsername(e.target.value)}
                            />
                        
                    </div>
                    <div className="email">
                        <h4>Email</h4>
                        <input type="email" placeholder='email'
                        value={email} onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="pass">
                        <h4>Password</h4>
                        <input type="password" placeholder='Password'
                        value={password} onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={signUp}>Sign Up</button>
                </form>    
            </div>
        ):null}
        </div>
    
            </div>
           

        
        
    )
}

export default Header
