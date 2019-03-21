import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const pieChart = ({ data, colors, width, height }) => {
	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill='white'
				textAnchor={x > cx ? 'start' : 'end'}
				dominantBaseline='central'
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<PieChart width={width} height={height} style={{ margin: '0 auto' }}>
			<Legend verticalAlign='top' />
			<Pie
				data={data}
				dataKey='value'
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={80}
				fill='#8884d8'
			>
				{data.map((entry, index) => (
					<Cell key={index} fill={colors[index % colors.length]} />
				))}
			</Pie>
		</PieChart>
	);
};

export default pieChart;
