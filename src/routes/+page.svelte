<script>
	import INPUT_CLASS from '$lib/input.style';
	import { page } from '$app/stores';

	export let form;

	let isRegister = false;
	let action = '?/login';

	const handleSubmit = () => {
		isRegister = !isRegister;
		action = isRegister ? '?/register' : '?/login';
	};
</script>

<main class="p-3">
	<form {action} method="post" class="flex flex-col">
		{#if form?.message}
			<div class="mb-4 rounded-lg bg-red-200 px-6 py-5 text-base text-danger-700 my-3" role="alert">
				{form?.message}
			</div>
		{/if}
		<h1 class="text-2xl font-semibold">Control Administrador</h1>
		{#if isRegister}
			<label class="my-3" for="name">Nombre</label>
			<input class={INPUT_CLASS} type="text" name="name" id="name" />
		{/if}
		<label class="my-3" for="email">Correo Electronico</label>
		<input class={INPUT_CLASS} type="text" name="email" id="email" />
		<label class="my-3" for="password">Contraseña</label>
		<input class={INPUT_CLASS} type="text" name="password" id="password" />
		<div class="my-3">
			<button class="underline underline-offset-2" type="button" on:click={handleSubmit}
				>{isRegister ? 'Ya tienes una cuenta, inicia sesión' : 'Registrate'}</button
			>
		</div>
		<button class={INPUT_CLASS} type="submit"
			>{!isRegister ? 'Inciar Sesión' : 'Registrarse'}</button
		>
	</form>
</main>
