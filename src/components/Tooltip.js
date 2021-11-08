import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from "@restart/ui/esm/Button";
import Container from 'react-bootstrap/Container'


const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Sample Tooltip</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Container><Button variant="success">Click to select</Button></Container>
    </OverlayTrigger>
  );
  
  export default Example;