import React, { useEffect, useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
// import { useUserContext } from '../hooks/useUserContext';
import { Table } from 'react-bootstrap';

const CalorieIntakeHistory = () => {
  const { getEntries, entries } = useCalorieContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getEntries(userId);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  return (
    <div id='CIHtable'>
      <h2>Calorie Intake History</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Food</th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
              <th>Carbohydrates</th>
            </tr>
          </thead>
          <tbody>
            {entries.slice(-10).map((entry) => (
              <tr key={entry.id}>
                <td>{formatDate(entry.date)}</td>
                <td>{entry.food}</td>
                <td>{entry.calories}</td>
                <td>{entry.fat}</td>
                <td>{entry.protein}</td>
                <td>{entry.carbohydrates}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CalorieIntakeHistory;



