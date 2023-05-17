<script>
	/** @type {import('./$types').PageData} */
	import Form from '$lib/components/Form.svelte';

	export let data;
	export let form;
	export let nameUser = 'Flavio';
</script>

<main class="p-3">
	<h1 class="text-4xl">Hola de nuevo {nameUser}</h1>
	<h2 class="text-2xl">Registrar nuevo empleado</h2>
	<Form
		error={form}
		nameButton={'Crear empleado'}
		action={'?/create'}
		inputs={[
			{
				type: 'text',
				forLabel: 'name',
				forLabelName: 'Nombre:',
				id: 'name',
				name: 'name',
				placeHolder: 'Nombre de empleado',
				value: ''
			},
			{
				type: 'text',
				forLabel: 'surname',
				forLabelName: 'Apellido:',
				id: 'surname',
				name: 'surname',
				placeHolder: 'Apellido de empleado',
				value: ''
			},
			{
				type: 'email',
				forLabel: 'email',
				forLabelName: 'Correo electronico:',
				id: 'email',
				name: 'email',
				placeHolder: 'example@xauendev.com',
				value: ''
			},
			{
				type: 'password',
				forLabel: 'password',
				forLabelName: 'Contraseña:',
				id: 'password',
				name: 'password',
				placeHolder: 'Contraseña de empleado',
				value: ''
			}
		]}
	/>
</main>
