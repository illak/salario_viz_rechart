import { useState, useEffect } from 'react';
import config from './config';

const useSpreadsheetData = (tableNames, dniTable) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		// 1. Load the JavaScript client library.
		window.gapi.load('client', initClient);
	}, []);

	const initClient = () => {
		// 2. Initialize the JavaScript client library.
		window.gapi.client
			.init({
				apiKey: config.apiKey,
				// Your API key will be automatically added to the Discovery Document URLs.
				discoveryDocs: config.discoveryDocs
			})
			.then(() => {
				// 3. Initialize and make the API request.
				load();
			});
	};

	// const containsDni = dniString =>
	//     dniTable.map(dni => dniString.includes(dni)).reduce((a, b) => a || b);

	const parseDni = dniString => dniString.split(' ')[2];

	const load = () => {
		window.gapi.client.load('sheets', 'v4', () => {
			window.gapi.client.sheets.spreadsheets.values
				.batchGet({
					spreadsheetId: config.spreadsheetId,
					ranges: tableNames
				})
				.then(response => {
					const valueRanges = response.result.valueRanges;

					let dataArray = [];
					let nameByDNI = {};

					//console.log(valueRanges);

					valueRanges.forEach(range => {
						let myData = { fecha: range.values[0][4] };
						range.values.forEach(v => {
							myData = {
								...myData,
								[parseDni(v[3])]: +v[6].replace(/,/g, '.')
							};
						});

						dataArray = dataArray.concat(myData);
					});

					valueRanges[0].values.forEach(v => {
						nameByDNI = {
							...nameByDNI,
							[parseDni(v[3])]: `${v[1]}, ${v[0]}`
						};
					});

					setData({ names: nameByDNI, data: dataArray });
				})
				.catch(err => console.log(err));
		});
	};

	return data;
};

export default useSpreadsheetData;
