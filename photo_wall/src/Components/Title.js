import React, {Component} from 'react'

import '../Styles/stylesheet.css'

class Title extends Component{
    render(){
      return  <h1> {this.props.mytitle}</h1>
    }
  }
  

export default Title