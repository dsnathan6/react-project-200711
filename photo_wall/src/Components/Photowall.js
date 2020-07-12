import React, {Component} from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom';

class Photowall extends Component{
    render(){
        return <div>
            
            <Link className="addButton"  to="/AddPhoto"></Link>
         

            <div className = "photoGrid">
                {this.props.posts.map((post, index)=><Photo post={post} key={index} onRemove = {this.props.onRemove} onAdd = {this.props.onAdd}/>)}
            </div>
        </div>
    }
}

export default Photowall

//   <button onClick ={()=>this.props.addPhoto()} className="addButton" ></button>
//<a onClick = {()=>this.props.addPhoto()} className= 'addButton' href= '#AddPhoto'>Link</a>