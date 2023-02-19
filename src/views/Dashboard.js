import React, { useEffect, useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
import CalorieIntakeHistory from '../components/CalorieIntakeHistory';
import '../assets/style/dashboard.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Dashboard = () => {
  const { getEntries, entries } = useCalorieContext();
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getEntries(userId);
  });

  useEffect(() => {
    console.log('Entries changed:', entries)
    if (entries && entries.length) {
      const data = entries.map((entry) => ({
        name: new Date(entry.date).toLocaleDateString(),
        calories: entry.calories,
      }));
      data.sort((a, b) => new Date(a.name) - new Date(b.name));
      setGraphData(data);
    }
  }, [entries]);

  return (
    <div className='bg-color'>
        <div>
            <h2>Calorie Intake History</h2>
            <div id='linechart'>
              <LineChart 
                  width={800}
                  height={400}
                  data={graphData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                  <XAxis dataKey="name" interval={0} />
                  <YAxis />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="calories" stroke="#ff7300" yAxisId={0} />
              </LineChart>
            </div>
      </div>
      <div>
        <CalorieIntakeHistory/>
      </div>
    </div>
  );
};

export default Dashboard;

