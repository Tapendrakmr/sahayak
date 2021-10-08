import "./Flow.css";
import "../App.css";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar';

function Flow() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <header>
        <span>Sahayak</span>
      </header>
      <footer>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU"
          alt=""
        />
        <select name="flow" id="flow">
          <option value="null">Choose existing...</option>
          <option value="demo1">Demo1</option>
          <option value="demo2">Demo2</option>
          <option value="demo3">Demo3</option>
        </select>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Create a flow
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </footer>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {

  let [flowName, setFlowName] = useState({
    flow: '',
    desc: ''
  })

  let [side, showSide] = useState(false);

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    flowName[name] = value;
    setFlowName(flowName);
  }

  let save = (e) => {
    e.preventDefault();
    console.log(flowName);
    showSide(true);
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new flow
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method="post" onSubmit={save}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Flow Name</Form.Label>
            <Form.Control type="text" name="flow" placeholder="Enter flow name" onChange={handleChange} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tag</Form.Label>
            <Form.Select aria-label="Default select example" name="desc" onChange={handleChange}>
              <option>Open this select menu</option>
              <option value="1">New User Onboarding</option>
              <option value="2">User Surveys</option>
              <option value="3">Announcements</option>
              <option value="4">Feature Tutorials</option>
            </Form.Select>  
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={props.onHide}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Flow;