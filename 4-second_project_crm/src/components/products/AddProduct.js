import React from 'react';
import { Form, FormGroup, Label, FormFeedback, FormText, Input, Col } from 'reactstrap';


function AddProduct() {
  return (
    <Form>
        <FormGroup row>
          <Label
            for="exampleSelect"
            sm={2}
          >
            Kategori seciniz
          </Label>
          <Col sm={10}>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
            >
              <option>
                1
              </option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Valid input
          </Label>
          <Input valid />
          <FormFeedback valid>
            Sweet! that name is available
          </FormFeedback>
          <FormText>
            Example help text that remains unchanged.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            Invalid input
          </Label>
          <Input invalid />
          <FormFeedback>
            Oh noes! that name is already taken
          </FormFeedback>
          <FormText>
            Example help text that remains unchanged.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Input without validation
          </Label>
          <Input />
          <FormFeedback tooltip>
            You will not be able to see this
          </FormFeedback>
          <FormText>
            Example help text that remains unchanged.
          </FormText>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="exampleEmail">
            Valid input
          </Label>
          <Input valid />
          <FormFeedback
            tooltip
            valid
          >
            Sweet! that name is available
          </FormFeedback>
          <FormText>
            Example help text that remains unchanged.
          </FormText>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="examplePassword">
            Invalid input
          </Label>
          <Input invalid />
          <FormFeedback tooltip>
            Oh noes! that name is already taken
          </FormFeedback>
          <FormText>
            Example help text that remains unchanged.
          </FormText>
        </FormGroup>
      </Form>
  )
}

export default AddProduct