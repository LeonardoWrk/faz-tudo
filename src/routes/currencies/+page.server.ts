import axios from 'axios';
import cheerio from 'cheerio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	async function scrapeGoogleFinance() {
		try {
			let keysArray: string[] = [];
			let key: any;
			let leftSelectArray: string[] = [];
			let rightSelectArray: string[] = [];
			const response = await axios.get('https://www.google.com/finance/markets/currencies');
			const $ = cheerio.load(response.data);

			// achar the div with class name 'hyO8N' and extract its content
			const currencyData: string = $('.hyO8N').text();

			// Split the data by lines
			const lines: string[] = currencyData.trim().split('add_circle_outline');

			// Initialize an empty object to store formatted pairs
			const formattedPairs: { [key: string]: number } = {};

			// Iterate through each line
			lines.forEach((line: string) => {
				// Extract currency pair and rate
				const match: RegExpMatchArray | null = line.match(/CCY([A-Z]{3}) \/ ([A-Z]{3})([\d.-]+)/);

				if (match) {
					const currency1: string = match[1];
					const currency2: string = match[2];
					const rate: number = parseFloat(match[3]);
					formattedPairs[`${currency1}/${currency2}`] = rate;
				}
			});

			// Output the formatted pairs
			for (const pair in formattedPairs) {
				console.log(`${pair}: ${formattedPairs[pair]}`);
			}

			if (formattedPairs != undefined) {
				for (key in formattedPairs) {
					if (formattedPairs.hasOwnProperty(key)) {
						keysArray.push(key); // Output the key
					}
				}
			}

			keysArray.forEach((pair) => {
				const [moedaA, moedaB] = pair.split('/');
				leftSelectArray.push(moedaA);
				rightSelectArray.push(moedaB);
			});

			let MoedaUnRep = leftSelectArray.filter((moeda, index) => {
				return leftSelectArray.indexOf(moeda) === index;
			});
			let MoedaUnRep2 = rightSelectArray.filter((moeda, index) => {
				return rightSelectArray.indexOf(moeda) === index;
			});

			return { formattedPairs, MoedaUnRep, MoedaUnRep2 };
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	return { scrap: await scrapeGoogleFinance() };
};
