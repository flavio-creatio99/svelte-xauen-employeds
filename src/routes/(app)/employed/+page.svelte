<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { employeds } = data;
</script>

<section class="p-4">
	{#if employeds.length > 0}
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3">#</th>
						<th scope="col" class="px-6 py-3"> Nombre </th>
						<th scope="col" class="px-6 py-3"> Apellido </th>
						<th scope="col" class="px-6 py-3"> Correo </th>
						<th scope="col" class="px-6 py-3"> Puesto </th>
						<th scope="col" class="px-6 py-3">
							<span class="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each employeds as { id, name, surname, email, isAdmin }, index (id)}
						<!-- content here -->
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								{++index}
							</th>
							<td class="px-6 py-4"> {name} </td>
							<td class="px-6 py-4"> {surname} </td>
							<td class="px-6 py-4"> {email} </td>
							<td class="px-6 py-4"> {isAdmin ? 'Administrador' : 'Desarrollador'} </td>
							{#if isAdmin}
								<td class="px-6 py-4 text-right">
									<a
										href={`/profile/${id}`}
										class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
									>
								</td>
							{:else}
								<td />
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div
			id="toast-simple"
			class="flex items-center w-full max-w-md p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
			role="alert"
		>
			<svg
				class="w-5 h-5 text-blue-600 dark:text-blue-500"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
				/>
			</svg>
			<div class="pl-4 text-sm font-normal">No hay empleados disponibles para mostrar</div>
		</div>
	{/if}
</section>
