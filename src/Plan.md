-- Header--

##Name of the App
##Search field
##Sign-in(up) -- out

const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [user,setUser] = useState(null);


  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if(authUser) {
        // user has logged in
        // console.log(authUser);
        setUser(authUser);
        
      }else{
        //  user has slogged out
        setUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  },[user,username])



  useEffect( ()=> {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc=>({
        id : doc.id,
        post : doc.data()
      })))
    });

  },[]);


  const signUp = (event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=> {
      return authUser.user.updateProfile({
        displayName : username,
      })
    })
    .catch((error) => alert(error.message) )

    setOpen(false);

  }

  const signIn = (event)=>{
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .catch((error)=> alert(error.message))
    setOpenSignIn(false);

  }

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db , auth , storage};


#####


useEffect(() => {
      imageList.forEach((image, index) => {
         if (image.status === "FINISH" || image.status === "UPLOADING") return;
         changeImageField(index, "status", "UPLOADING");
         const uploadTask = image.storageRef.put(image.file);
         uploadTask.on(
            "state_changed",
            null,
            function error(err) {
               console.log("Error Image Upload:", err);
            },
            async function complete() {
               const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
               changeImageField(index, "downloadURL", downloadURL);
               changeImageField(index, "status", "FINISH");
            }
         );
      });
   });





   db.collection('posts').add({
                imagesUrl : urls,
                username : activeUser,
                place,
                productName : title,
                category,
                price

                
                
            });

###get messages 

db.collection('posts')
        .doc(id)
        .collection('rooms')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot=>{
            setGetMessages(snapshot.docs.map(doc => {
                if( (doc.data().sender === sellerName 
                    && doc.data().seller === sellerName 
                    && doc.data().receiver === activeUser )
                    ||
                    (doc.data().sender === activeUser 
                    && doc.data().seller === sellerName 
                    && doc.data().receiver === sellerName)
                    
                    ){
                        
                        doc.data()
                    }
                    return getMessages;
            }
                
                ));
        })




        if(activeUser){
                            if(doc.data().receiver.toLowerCase() === activeUser.toLowerCase()){
                                room.unshift(doc.data())      
                                setMessages([...room])
                            }
                            
                        }

                        return messages

############################
/*
    const getMessages = ()=>{
        
        db.collection('posts').orderBy('timestamp','asc')
        .onSnapshot(snapshot => 
            
                snapshot.docs.map(doc => 
                    db.collection('posts').doc(doc.id).collection('rooms')
                    .orderBy('timestamp','asc')
                    .onSnapshot(snapshot => 
                        
                        snapshot.docs.map( 
                            doc => {
                            
                            if(
                                activeUser 
                                && doc.data() 
                                && (doc.data().receiver.toLowerCase() 
                                === 
                                activeUser.toLowerCase())
                            ){
                                
                                room.unshift(doc.data())
                                // console.log(messages)
                                setMessages([...room])
                                
                                return doc.data()
                                
                                                        
                            }else{
                                return null
                            }
                            
                        }
                        )
                        
                        
                        )
                        
                   
                    
                    
                    
                )

            
        )
        

    }
*/


### Bootstrap slider

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="..." alt="First slide">
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide">
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


### React bootstrap
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

render(<ControlledCarousel />);