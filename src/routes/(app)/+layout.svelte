<script>
	import Navbar from '$lib/components/Navbar.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<Navbar />
<slot />
