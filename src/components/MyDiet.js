import React from "react";
import Table from "react-bootstrap/Table";

export default function MyDiet() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chicken Parmesan</td>
                    <td>800cal</td>
                    <td>36g</td>
                    <td>40g</td>
                    <td>10g</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>Fruit Cup</td>
                    <td>60cal</td>
                    <td>1g</td>
                    <td>15g</td>
                    <td>0g</td>
                    <td>x</td>
                </tr>
            </tbody>
        </Table>
    )
}