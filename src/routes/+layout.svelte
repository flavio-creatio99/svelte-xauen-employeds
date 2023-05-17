<script>
	/** @type {import('./$types').LayoutData} */
	export let data;

	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
</script>

<Navbar />
<slot />
