import React, { Component } from 'react'


class Photo extends Component{
    render(){
        const post = this.props.post;
        return   <figure className="figure">
                    <img className = "photo" src={post.imageLink}/>
                    <p className="imgDescribe" align='center'>{post.description}</p>
                    <div>
                        <button className="removeButton" onClick={()=>this.props.onRemove(post)}></button>
                        <button className="addImage" onClick={()=>this.props.onAdd(post)}></button>
                    </div>
                </figure> 
    }
}


export default Photo