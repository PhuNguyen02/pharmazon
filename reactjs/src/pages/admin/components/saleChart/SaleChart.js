import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './salechart.css'
const SaleChart = () => {
    const data = [
        {
          name: 'Jan',
          sale: 4000,
          income: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          sale: 3000,
          income: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          sale: 2000,
          income: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          sale: 2780,
          income: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          sale: 1890,
          income: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          sale: 2390,
          income: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          sale: 3490,
          income: 4300,
          amt: 2100,
        },
        {
            name: 'Aug',
            sale: 4000,
            income: 2400,
            amt: 2400,
          },
          {
            name: 'Sep',
            sale: 3000,
            income: 1398,
            amt: 2210,
          },
          {
            name: 'Oct',
            sale: 2000,
            income: 9800,
            amt: 2290,
          }, 
          {
            name: 'Nov',
            sale: 2000,
            income: 9800,
            amt: 2290,
          },
          {
            name: 'Dec',
            sale: 2780,
            income: 3908,
            amt: 2000,
          },
      ];
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="sale" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
   
    );
};

export default SaleChart;