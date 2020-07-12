import React, {Component} from 'react'

class Addphoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        const imgURL = event.target.elements.imgurl.value
        const imgDescription= event.target.elements.description.value
        const newPost = {id:0, 
                description:imgDescription, 
                imageLink:imgURL}
        if ( imgURL && imgDescription){
            this.props.postSubmitted(newPost)
        }
    }
    render(){
        return (
        <div>
            <h1>Place to add new photos</h1>
            <form onSubmit = {this.handleSubmit}> 
                <title className='imgDescribe'>Photo Link</title>
                <input type='text' placeholder='URL Link' name='imgurl'/>
                <input type='text' placeholder='Description' name ='description'/>
                <button className='submitButton' >Post</button>

            </form>
        </div>
        )
    }
}

export default Addphoto