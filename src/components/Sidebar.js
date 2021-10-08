// import { React, useState } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { render } from 'react-dom';
// import Button from "@restart/ui/esm/Button";


// function Sidebar({ name, ...props }) {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow} className="me-2">
//           {name}
//         </Button>
//         <Offcanvas show={show} onHide={handleClose} {...props}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             Some text as placeholder. In real life you can have the elements you
//             have chosen. Like, text, images, lists, etc.
//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
//   }
  
//   function Example() {
//     return (
//       <>
//         {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//           <Sidebar key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
//   }
  
//   render(<Example />);

//   export default Example;