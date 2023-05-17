import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return { id: params.id };
}

/** @type {import('./$types').Actions} */
export const actions = {
	edit: async ({ request, params, locals }) => {
		//TODO: Falta ver aquí como hacer el update
		console.log(params.id);

		const form = await request.formData();

		const name = form.get('name');
		const surname = form.get('surname');
		const email = form.get('email');
		const password = form.get('password');

		if (
			!name &&
			name === '' &&
			!surname &&
			surname === '' &&
			!email &&
			email === '' &&
			!password &&
			password === ''
		) {
			return fail(400, { message: 'Campos invalidos intentalo de nuevo' });
		}

		const employed = { name, surname, email, password };

		// const res = await fetch('http://localhost:3001/api/v1/employeds', {
		// 	method: 'PATCH',
		// 	body: JSON.stringify({ ...employed, isAdmin: false }),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });

		redirect(303, '/employed');
	}
};
