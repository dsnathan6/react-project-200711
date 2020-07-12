import React, {Component} from 'react'
import Title from './Title'
import Photowall from './Photowall'
import Addphoto from './Addphoto'
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import '../Styles/stylesheet.css' 

class Main extends Component{

  constructor(){
    super();
    this.state={
      posts:[{
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }, 
        ],
      navigate:'display'
    }
    this.onRemove = this.onRemove.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onAddPhoto = this.onAddPhoto.bind(this)
    this.postSubmitted = this.postSubmitted.bind(this)


  }

  onRemove(postData){
    console.log("In the Remove")
    console.log(postData.description)
    this.setState((state)=>({posts:state.posts.filter((post)=>post!==postData)}))
    console.log("mydata", this.state.posts[1])

  }

  onAdd(postData){
    console.log("In this ADD")
    console.log("mydata", postData.description)
    this.setState((state)=>{
       posts: state.posts.push(postData)
    })
    console.log("mydata", this.state.posts[this.state.posts.length-1])
    console.log("mydata LEN", this.state.posts.length)

  }
  
  onAddPhoto(){
    console.log("In the on add photss")
    this.setState({
      navigate:'addphoto'
    })
  }

  postSubmitted(newPost){
    alert("In the post submit : main")
    console.log("dsn", newPost)
    this.setState(state=>({
      posts:state.posts.concat([newPost])
    }))
    console.log(this.state.posts)
  }

  componentDidUpdate(){
    alert("udated")
  }
    render(){
      return (
        <Router>
        <div>
        <Route exact path='/' render={()=>(
          <div>
            <Title mytitle = {"DSN Photowall"}/>
            <Photowall posts = {this.state.posts} onRemove={this.onRemove} onAdd={this.onAdd} addPhoto = {this.onAddPhoto}/>
          </div>
        )}/>

        <Route exact path='/AddPhoto' render={({history})=>(
          <div>
            <Addphoto postSubmitted={(newPost)=>{
              this.postSubmitted(newPost)
              history.push('/')

            }}/>
          </div>
        )}/>
        </div>
        </Router>
      )
    }
}
  
export default Main