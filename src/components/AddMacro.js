import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";

export default function AddMacro() {
    return (
      <Table>
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Button variant="primary" type="submit">
        Submit
      </Button></td>
              </tr>
              
            </tbody>
    </Table>
    )
}