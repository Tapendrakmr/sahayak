import { Container } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function EditorComponent() {
  return (
      <Container>
          <Editor />
      </Container>
  );
}

export default EditorComponent;