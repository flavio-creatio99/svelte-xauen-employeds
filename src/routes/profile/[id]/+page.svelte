<script>
	import Form from '$lib/components/Form.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	export let form;

	const { employeds } = data;
	const employedFounded = employeds.find(({ id }) => id === Number(data.id));

	const { name, surname, email } = employedFounded;
</script>

<h1>Perfíl</h1>

<main class="p-3">
	<Form
		error={form}
		nameButton={'Actualizar empleado'}
		action={'?/edit'}
		inputs={[
			{
				type: 'text',
				forLabel: 'name',
				forLabelName: 'Nombre:',
				id: 'name',
				name: 'name',
				placeHolder: 'Nombre de empleado',
				value: name
			},
			{
				type: 'text',
				forLabel: 'surname',
				forLabelName: 'Apellido:',
				id: 'surname',
				name: 'surname',
				placeHolder: 'Apellido de empleado',
				value: surname
			},
			{
				type: 'email',
				forLabel: 'email',
				forLabelName: 'Correo electronico:',
				id: 'email',
				name: 'email',
				placeHolder: 'example@xauendev.com',
				value: email
			},
			{
				type: 'password',
				forLabel: 'password',
				forLabelName: 'Contraseña:',
				id: 'password',
				name: 'password',
				placeHolder: 'Actualizar contraseña',
				value: ''
			}
		]}
	/>
</main>
