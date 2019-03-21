import React from 'react';
import Spinner from './components/Spinner';

import useSpreadsheetData from './components/useSpreadsheetData';
import MyLineChart from './components/lineChart';
import MyPieChart from './components/pieChart';

import * as classes from './style.module.css';

const App = () => {
	const tableNames = [
		'enero_2018!A3:H12',
		'febrero_2018!A3:H12',
		'marzo_2018!A3:H12',
		'abril_2018!A3:H12',
		'mayo_2018!A3:H12',
		'junio_2018!A3:H12',
		'julio_2018!A3:H12',
		'setiembre_2018!A3:H12',
		'octubre_2018!A3:H12',
		'noviembre_2018!A3:H12',
		'diciembre_2018!A3:H12'
	];

	const dniTable = [
		'22774175',
		'20532788',
		'7982372',
		'25019875',
		'13984417'
	];
	const colors = ['green', 'blue', 'red', 'brown', 'orange'];

	const genreDataEnero = [
		{ name: 'M', value: 216 },
		{ name: 'F', value: 83 }
	];
	const genreDataDic = [{ name: 'M', value: 214 }, { name: 'F', value: 89 }];
	const genreColors = ['#0088FE', '#00C49F'];

	const data = useSpreadsheetData(tableNames, dniTable);

	// Agentes municipales de cargo:1302 (maestros/educación)
	const updatedData = data =>
		data.map(obj => {
			switch (obj.fecha) {
				case '01/01/18':
					return { ...obj, '1302': 23364.19 };
				case '01/07/18':
					return { ...obj, '1302': 27957.83 };
				case '01/12/18':
					return { ...obj, '1302': 34655.25 };
				default:
					return obj;
			}
		});

	const lChart = data ? (
		<MyLineChart
			data={updatedData(data.data)}
			names={data.names}
			dniTable={dniTable}
			colors={colors}
		/>
	) : null;

	const pChart1 = (
		<MyPieChart
			data={genreDataEnero}
			colors={genreColors}
			width={200}
			height={300}
		/>
	);

	const pChart2 = (
		<MyPieChart
			data={genreDataDic}
			colors={genreColors}
			width={200}
			height={300}
		/>
	);

	return (
		<div className={classes['container']}>
			<div
				className={classes['line-chart']}
				style={{ marginTop: '100px' }}
			>
				<h1 style={{ textAlign: 'center' }}>
					Evolución del salario (bruto) de funcionarios durante el año
					2018
				</h1>

				<div style={{ width: '80%', margin: '40px auto' }}>
					<p>
						Se toman los 5 salarios más altos de funcionarios y se
						visualiza la evolución de los mísmos en comparación al
						básico de agentes municipales con denominación "MAESTRO
						DE GRADO".
					</p>
					<p>Los datos se cargan de dos spreadsheets:</p>
					<ul>
						<li>
							<a href='https://docs.google.com/spreadsheets/d/1rFRJR08PnZETrorlMZrLDz0qN90sWAe3-mQj60KItJ8/edit#gid=883916300'>
								spreadsheet 1
							</a>
						</li>
						<li>
							{' '}
							<a href='https://docs.google.com/spreadsheets/d/1F82EVZq-gavhzepZ5PPPUU1iyjrH5KA8V1-5_Gqa1VI/edit#gid=1858989657'>
								spreadsheet 2
							</a>{' '}
						</li>
					</ul>
					<p>
						y provienen del{' '}
						<a href='https://gobiernoabierto.cordoba.gob.ar/data/datos-abiertos'>
							Portal de Datos Abiertos de la Ciudad de Córdoba
						</a>
					</p>
				</div>
				<div
					style={{
						width: '80%',
						height: 500,
						margin: '0 auto'
					}}
				>
					{data ? lChart : <Spinner />}
				</div>
			</div>
			<div className={classes['pie-chart-one']}>
				<h2 style={{ textAlign: 'center', marginBottom: '130' }}>
					Distribución de Género -Enero-
				</h2>
				{pChart1}
			</div>
			<div className={classes['pie-chart-two']}>
				<h2 style={{ textAlign: 'center', marginBottom: '130' }}>
					Distribución de Género -Diciembre-
				</h2>
				{pChart2}
			</div>
		</div>
	);
};

export default App;
