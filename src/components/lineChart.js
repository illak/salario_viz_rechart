import React from 'react';
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
	ResponsiveContainer
} from 'recharts';

const lineChart = ({ data, names, dniTable, colors }) => {
	return (
		<ResponsiveContainer>
			<LineChart
				data={data}
				margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis
					dataKey='fecha'
					label={{ value: 'mes', position: 'bottom' }}
				/>
				<YAxis
					label={{
						value: 'salario (AR$)',
						angle: -90,
						position: 'left',
						offset: 20
					}}
				/>
				<Tooltip
					formatter={(value, name, props) => `$${value}`}
					contentStyle={{ background: '#ffeaca' }}
					itemStyle={{ fontWeight: 'bold' }}
					labelStyle={{ textAlign: 'center', fontWeight: 'bold' }}
					itemSorter={(v1, v2) => {
						return v2.value - v1.value;
					}}
				/>
				<Legend verticalAlign='top' />
				{dniTable.map((dni, i) => (
					<Line
						key={dni}
						name={names[dni]}
						type='monotone'
						dataKey={dni}
						stroke={colors[i]}
					/>
				))}
				<Line
					connectNulls
					key='1302'
					name='Educación (cargo 1302 / maestro de grado)'
					type='monotone'
					dataKey='1302'
					stroke='purple'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default lineChart;
