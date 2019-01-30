// Code ClickityClick Component Here
import React, { Component} from 'react'


export default class ClickityClick extends Component {
  constructor(){
    super()
    this.state = {
      hasBeenClicked: false
    }

  }

  handleOnClick = () => {

    this.setState({
      hasBeenClicked: true
    })

  }


  render(){
    return(
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleOnClick}>Click Me</button>
      </div>
    )
  }



}
