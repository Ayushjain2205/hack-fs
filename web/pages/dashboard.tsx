import React from 'react';
import Layout from '@/components/layout';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Monday',
    current: 4000,
    previous: 2400,
  },
  {
    name: 'Tuesday',
    current: 3000,
    previous: 1398,
  },
  {
    name: 'Wednesday',
    current: 2000,
    previous: 9800,
  },
  {
    name: 'Thursday',
    current: 2780,
    previous: 3908,
  },
  {
    name: 'Friday',
    current: 1890,
    previous: 4800,
  },
  {
    name: 'Saturday',
    current: 2390,
    previous: 3800,
  },
  {
    name: 'Sunday',
    current: 3490,
    previous: 4300,
  },
];

const Dashboard = () => {
  return (
    <Layout>
      Dashboard
      <div className="w-[1000px] h-[414px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#C4C4C4"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000000"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
};

export default Dashboard;
