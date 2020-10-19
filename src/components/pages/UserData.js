import React, { Component } from "react";
//import "./Contact.css";
import Row from "react-bootstrap/Row";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

class UserData extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: ""
  //   };
  // };

  // handleChange = (event) => {
  //   const inputId = event.target.name;
  //   const value = event.target.value;
  //   this.setState({ [inputId]: value })
  // }

  resetForm = (event) => {
    // event.preventDefault();
    // this.setState({
    //   name: "",
    //   email: "",
    //   subject: "",
    //   message: ""
    // })
  }


  // encodeURIComponent(JSON.stringify({name, yourMessage}));

  render() {

    return (
      <><MDBContainer>
        <MDBContainer fluid>
          <Row  className="contactSpacing">
            <MDBCol xs="12">
              <h2>Contact</h2>
              <h6>dazacher2000@yahoo.com</h6>
              <h6>(480) 580-8769</h6>
            </MDBCol>
          </Row>
          <MDBRow id="straight-line">
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid>
          <MDBRow className="formRow">
            <MDBCol md='6'>
              <form action="mailto:dazacher2000@yahoo.com" method="POST" encType="text/plain" className='hoverable' style={{ padding: 38 }}>
                <div className='grey-text'>
                  <MDBInput
                    label='Your Name'
                    name="name"
                    // value={this.state.name}
                    onChange={this.handleChange}
                    icon='user'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                    placeHolder="Enter Your Name"
                  />
                  <MDBInput
                    icon='envelope'
                    label='E-mail Address'
                    name="email"
                    // value={this.state.email}
                    onChange={this.handleChange}
                    group
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                    placeHolder="Enter Your E-mail Address"
                  />
                  <MDBInput
                    label='Subject'
                    icon='tag'
                    name="subject"
                    // value={this.state.subject}
                    onChange={this.handleChange}
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                    placeHolder="Enter A Subject"
                  />
                  <MDBInput
                    type='textarea'
                    name="message"
                    // value={this.state.message}
                    onChange={this.handleChange}
                    rows='2'
                    label='Your message please...'
                    icon='pencil-alt'
                    placeHolder="Enter Your Message Here...."
                  />
                </div>
                <div className='text-center'>
                  <button
                    type="submit"
                    value="send"
                    className="fa submitButton"
                    onClick={this.sendMail}>
                    Submit <MDBIcon far icon='paper-plane' className='ml-1' />
                  </button>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
      </>
    );
  };
};

export default UserData;