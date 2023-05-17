/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const res = await fetch('http://localhost:3001/api/v1/employeds');

	const employeds = await res.json();

	return { employeds };
}
