import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch Sahayak
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Let's build something!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Work on a flow</h4>
        <p>
        Onboard new users, increase adoption, or improve product engagement with modals, tooltips, and more.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Link to="/flow"><Button>Build flows</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
