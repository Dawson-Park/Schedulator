export function timeCalculate(arrive, leave, breaking) {
	const min_arrive = timeToMin(strToTime(arrive))
	const min_leave = timeToMin(strToTime(leave))
	const min_break = timeToMin(strToTime(breaking))

	let result = minToTime(min_leave - min_arrive - min_break);

	return sanitizeTimeString(result);
}

export function timeToMin({ h, m }) {
	return ((h*60) + m);
}

export function strToTime(string) {
	const h = string.slice(0, 2);
	const m = string.slice(2);
	return { h:Number(h), m:Number(m) }
}

export function minToTime(time) {
	const hours = (time/60);
	const rhours = Math.floor(hours);
	const min = (hours - rhours) * 60;
	const rmin = Math.round(min);

	return `${set2Time(rhours)}${set2Time(rmin)}`;
}

export function set2Time(time) {
	if(time <= 0) return '00'
	else if(time < 10) return `0${time}`
	else return `${time}`
}

export function calculateTotal(array) {
	let res = 0;
	for (const el of array) {
		if(el !== '-') {
			res += timeToMin(strToTime(el));
		}
	}

	return sanitizeTimeString(minToTime(res));
}

export function sanitizeTimeString(string) {
	if(string === '0' || string === '00' || string === '000' || string === '0000' || string === 0) {
		return '-'
	}
	return string;
}