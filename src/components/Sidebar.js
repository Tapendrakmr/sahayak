import { React, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "@restart/ui/esm/Button";
import Tooltip from "./Tooltip";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState("sample UI");

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Show Details
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My flows</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="sample UI" title="Sample UI">
              <Tooltip />
            </Tab>
            <Tab eventKey="flows" title="My flows">
              Profile
            </Tab>
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;
