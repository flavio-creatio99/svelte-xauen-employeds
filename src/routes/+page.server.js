import { redirect, fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

// Cerramos sesión
export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();

		const email = form.get('email');
		const password = form.get('password');

		if (!email || email === '' || !password || password === '') {
			return fail(400, { message: 'Campos invalidos intentalo de nuevo' });
		}

		const user = { email, password };

		const res = await fetch('http://localhost:3001/api/v1/users/login', {
			method: 'POST',
			body: JSON.stringify({ ...user }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.status !== 200) {
			return fail(400, { message: 'No se pudo iniciar sesión' });
		}

		const data = await res.json();

		// Ahora lo que haremos es estable la id del usuario en las cookies, lo mas normal sería utilizar un token que nos devolvería la api
		cookies.set('session', data.id, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(303, '/home');
	},
	register: async ({ request }) => {
		const form = await request.formData();

		const name = form.get('name');
		const email = form.get('email');
		const password = form.get('password');

		if (!name || name === '' || !email || email === '' || !password || password === '') {
			return fail(400, { message: 'Campos invalidos intentalo de nuevo' });
		}

		const user = { name, email, password };

		const res = await fetch('http://localhost:3001/api/v1/users/register', {
			method: 'POST',
			body: JSON.stringify({ ...user }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.status !== 201) {
			return fail(400, { message: 'No se pudo registrar correctamente' });
		}

		throw redirect(303, '/home');
	},
	logout: async ({ cookies }) => {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(303, '/');
	}
};
