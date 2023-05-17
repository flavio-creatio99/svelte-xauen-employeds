/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = { 
    register: async ({ request }) => {
        const form = await request.formData();
        const email = form.get('email');
        const password = form.get('password');

        
    },
    login: async ({ request }) => {

    }
}