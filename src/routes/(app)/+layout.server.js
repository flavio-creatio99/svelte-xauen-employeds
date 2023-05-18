import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	// Compruebo que hay un usuario logeado y se los paso a todas las páginas
	const { user } = locals;

	if (!user) {
		throw redirect(303, '/');
	}
}
