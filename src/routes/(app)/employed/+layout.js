/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	// Cargamos todos los empleados y los enviamos de manera global a las props de nuestras páginas
	const res = await fetch('http://localhost:3001/api/v1/employeds');

	const employeds = await res.json();

	return { employeds };
}
