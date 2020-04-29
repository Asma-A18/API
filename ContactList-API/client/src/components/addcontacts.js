import React, { Component } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import { Link, Switch, Route } from "react-router-dom";



class AddContact extends Component {
  state = {
   cont : { name: '',
    email: '',
    phone: '',
   }

    
  };


  componentDidMount() {
   if (this.props.edit)  
      this.setState({
     cont : {   name: this.props.contact.name,
        email: this.props.contact.email,
        phone: this.props.contact.phone,
        id: this.props.contact._id,}
      });
  }





  handleChange = (e) => {
    this.setState({

  cont : {...this.state.cont, 
            [e.target.name]: e.target.value
         }  


    });
  };


  handleclick = () => {
    this.props.handleShow();
    this.props.addcontact(this.state.cont);
  };



  render() {
    return (
      <div>
{this.props.edit?null :<button className='addbutton' onClick={this.props.handleShow}>Add a Contact</button>}



 <Modal show={this.props.show} onHide={this.props.handleShow} animation={false}>
             <form className='inputgroup'>
            <label>
{this.props.edit? 'Editing a Contact' : 'Adding a contact'}           </label>
          <input name="name"  placeholder="name..." value={this.state.cont.name}  onChange={this.handleChange}/>
            <input name="email" placeholder="enter email..." value={this.state.cont.email} onChange={this.handleChange}/>
            <input  name="phone"  placeholder="enter phone n..." value={this.state.cont.phone} onChange={this.handleChange}/>  

            <div className='btngroup'>
              <Link to='/contacts'>
  <button  className='btn' onClick={() => this.handleclick()}>{this.props.edit? 'Save Edit' : 'Add contact'} </button> </Link>
              <button  className='btn' onClick={() => this.props.handleShow()}>
                Cancel
              </button>
              </div>
      
              </form>
        </Modal>







      </div>
    );
  }
}
export default AddContact;