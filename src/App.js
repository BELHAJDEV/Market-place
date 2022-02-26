import './App.css';
import Header from './components/Header/Header';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {SideBarContext} from './contexts/SideBarContext';
import Posts from './components/Posts/Posts';
import AddPost from './components/addPost/AddPost';
import PostDetail from './components/PostsDetails/PostDetail';
import Room from './components/contactRoom/Room';
import ClientRoom from './components/clientRoom/ClientRoom';
import Reply from './components/replyRoom/Reply';
import MyPosts from './components/myPosts/MyPosts';
import Edit from './components/Edit/Edit';



function App() {

  const [fixHeight , setFixHeight ] = useState(false);
  const [activeUser,setActiveUser] = useState(null); 
  const [currentReceiver,setCurrentReceiver] = useState('')
  

  return (
    <div className={ fixHeight ? "App of" : "App"}>
    
      <SideBarContext.Provider 
      value={
        {
      value1 : [fixHeight,setFixHeight],
      value2 : [activeUser,setActiveUser],
      value3 : [currentReceiver,setCurrentReceiver],
      }}>

      <Router>
    
          <Header />
          
          <Routes>
            
              <Route path='/' element={<Posts />} />  
              <Route path='/addPost' element={<AddPost />} />
              <Route path='/Post/:id' element={<PostDetail />} />
              <Route path='/Post/:id/ContactRoom' element={<Room />} />
              <Route path='/Post/:id/Edit' element={<Edit />} />
              <Route path='/Post/:id/:client/Client' element={<Reply />} />
              <Route path='/Inbox' element={<ClientRoom />} />
              <Route path='/myPosts' element={<MyPosts />} />

          </Routes>
          
        </Router>

      </SideBarContext.Provider>
        
      
     
      
    </div>
  );
}

export default App;
