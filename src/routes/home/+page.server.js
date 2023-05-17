import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request }) => {
		const form = await request.formData();

		const name = form.get('name');
		const surname = form.get('surname');
		const email = form.get('email');
		const password = form.get('password');

		if (
			!name ||
			name === '' ||
			!surname ||
			surname === '' ||
			!email ||
			email === '' ||
			!password ||
			password === ''
		) {
			return fail(400, { message: 'Campos invalidos intentalo de nuevo' });
		}

		const employed = { name, surname, email, password };

		const res = await fetch('http://localhost:3001/api/v1/employeds', {
			method: 'POST',
			body: JSON.stringify({ ...employed, isAdmin: false }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.status !== 201) {
			return fail(400, { message: 'No se pudo crear el empleado' });
		}

		redirect(303, '/employed');
	}
};
