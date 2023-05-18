// Este hook sirve para escuchar aquellos eventos realizados en nuestras actions en los formularios

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const session = event.cookies.get('session');

	if (!session) {
		// Resuelve el evento como una página más sin tener que realizar alguna operación
		return await resolve(event);
	}

	const res = await fetch(`http://localhost:3001/api/v1/users/${session}`);

	if (res.status === 200) {
		const user = await res.json();

		event.locals.user = user;
	}

	return await resolve(event);
}
