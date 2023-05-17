<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { employeds } = data;
</script>

<section class="p-4">
	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
				{:else}
					<!-- empty list -->
					<h1>Sin datos</h1>
				{/each}
			</tbody>
		</table>
	</div>
</section>
