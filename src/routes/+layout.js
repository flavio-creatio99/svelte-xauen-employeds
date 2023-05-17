/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const res = await fetch('http://localhost:3001/api/v1/employeds');

	let employeds = [];
	
	if (res.status === 200) {
		employeds = await res.json();
	}


	return { employeds };
}
