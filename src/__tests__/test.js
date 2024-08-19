import healthChecker from '../health.js';

const dataList = [
	[{name: 'Маг', health: 90}, 'healthy'],
	[{name: 'Воин', health: 14}, 'critical'],
	[{name: 'Лучник', health: 45}, 'wounded'],
]; 

test.each(dataList)('testing healthChecker func', (character, expected) => {
	const result = healthChecker(character);
	expect(result).toBe(expected);
});