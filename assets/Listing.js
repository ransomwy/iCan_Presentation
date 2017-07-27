import React, { Component } from 'react';
import {
  Header,
  Button,
  Card,
  Image,
  Modal,
} from 'semantic-ui-react';


class Listing extends Component {
  state = { active: false , buttonDisabled: false, counter: 0}

  handleClick = () => {
    this.setState({ active: !this.state.active, buttonDisabled: true, counter: 1 });
  }

  icanBtn = () => {
    let { active, buttonDisabled } = this.state;
      return (
        <Button ref="btn"
          fluid
          size='medium'
          toggle active={active}
          disabled={this.state.buttonDisabled}
          onClick={this.handleClick}
        >
          iCan
        </Button>
      )
    }


    listing = () => {
      let { active, counter } = this.state
      return(
      <div className='card'>
        <img width="400px" src= {'https://res.cloudinary.com/didyzqw64/image/upload/v1500327704/events_mpadax.jpg'} />
          <div className='container'>
          <h3><b>Title</b></h3>
          <h6>Volunteers: {counter}</h6>
          <p>discription</p>
          </div>
            <div className='ui buttons'>
              {this.icanBtn()}
            </div>
      </div>
      )
    }

  render() {
    return(
      <div>
      {this.listing()}
      </div>
    );
  }



}

export default Listing;
