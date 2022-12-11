export function set(key: string, value: string, expDays: number) {
	const date = new Date();
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${key}=${value}; ${expires}; path=/`;
}

export function get(key: string): string | null {
	const name = key + '=';
	const cDecoded = decodeURIComponent(document.cookie);
	const cArr = cDecoded.split('; ');

	let res: string | null = null;

	cArr.forEach((val) => {
		if (val.indexOf(name) === 0) res = val.substring(name.length);
	});

	return res;
}

export function remove(key: string) {
	document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
