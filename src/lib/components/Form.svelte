<script>
	import INPUT_CLASS from '$lib/input.style';

	export let error;
	export let nameButton = 'Enviar';
	export let action;
	export let inputs = [
		{
			type: 'text',
			name: 'name',
			id: 'id',
			placeHolder: 'example',
			forLabel: 'label',
			forLabelName: 'example label',
			value: ''
		}
	];

	let showPassword = false;

	const handleShowPassword = () => (showPassword = !showPassword);
</script>

<form {action} method="post" class="flex flex-col">
	{#if error?.message}
		<div class="mb-4 rounded-lg bg-red-200 px-6 py-5 text-base text-danger-700 my-3" role="alert">
			{error?.message}
		</div>
	{/if}
	{#each inputs as { type, name, id, placeHolder, forLabel, forLabelName, value } (id)}
		<!-- content here -->
		<label class="my-3" for={forLabel}>{forLabelName}</label>
		{#if type === 'password'}
			<!-- content here -->
			<div class="flex items-center justify-between">
				<input
					class="{INPUT_CLASS} w-full mr-3"
					type={(type = showPassword ? 'text' : 'password')}
					{name}
					{id}
					placeholder={placeHolder}
					{value}
				/>
				<button
					type="button"
					on:click={() => handleShowPassword()}
					class="border-2 p-2 border-teal-700 rounded-md flex items-center justify-center"
				>
					{#if showPassword}
						<!-- content here -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-lock"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
							/>
							<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
							<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
						</svg>
					{:else}
						<!-- else content here -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-lock-open"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
							/>
							<path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
							<path d="M8 11v-5a4 4 0 0 1 8 0" />
						</svg>
					{/if}
				</button>
			</div>
		{:else}
			<input class={INPUT_CLASS} {type} {name} {id} placeholder={placeHolder} {value} />
		{/if}
	{/each}
	<button class="{INPUT_CLASS} my-3" type="submit">{nameButton}</button>
</form>
