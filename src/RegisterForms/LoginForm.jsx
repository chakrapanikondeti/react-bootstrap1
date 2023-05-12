import React, { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";

export default function LoginForm() {
  return (
    <>
      <div>
        <Card className="m-5 p-4 myCard">
          <h2 className="text-center">LoginForm</h2>
          <Card.Body>
            <label for="email" className="form-label mt-2">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              id="email"
              placeholder="Enter Email"
            />
            <label for="password" className="form-label mt-3">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
            <div className="d-grid mt-3">
              <Button variant="primary" size="md">
                Submit
              </Button>
            </div>
            <div className="d-flex  justify-content-center align-items-center">
              <input className="form-check-input mr-2" type="checkbox" />
              <label className="form-check-label" for="my-check">
                Remember me?
              </label>

              <Button variant="link">Forgot Password?</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Application />
      <RegisterForm />
    </>
  );
}

function Application() {
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    const newTodo = {
      name: event.target.elements.name.value,
      // description: event.target.elements.description.value,
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="container mt-5">
      <Card className="m-5 p-4 myCard">
        <h1 className="mb-3">TODO List</h1>
        <Form onSubmit={addTodo}>
          <Form.Group controlId="formName">
            {/* <Form.Label>Add Task</Form.Label> */}
            <Form.Control type="text" name="name" />
          </Form.Group>
          {/* <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} />
        </Form.Group> */}
          <Button variant="primary" type="submit" className="mt-3">
            Add Task
          </Button>
        </Form>
        <hr />
        {todos.map((todo, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{todo.name}</Card.Title>
              {/* <Card.Text>{todo.description}</Card.Text> */}
              <Button variant="danger" onClick={() => removeTodo(index)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Card>
    </div>
  );
}

function RegisterForm() {
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    const newTodo = {
      name: event.target.elements.name.value,
      // description: event.target.elements.description.value,
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="container mt-5">
      <Card className="m-5 p-4 myCard">
        <h1>TODO List</h1>
        <Form onSubmit={addTodo}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" required />
          </Form.Group>
          {/* <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} />
        </Form.Group> */}
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Description</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.name}</td>
                {/* <td>{todo.description}</td> */}
                <td>
                  <Button variant="danger" onClick={() => removeTodo(index)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
