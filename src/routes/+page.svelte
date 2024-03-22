<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.scrap);
	onMount(() => {
		localStorage.setItem('coin', JSON.stringify(data.scrap));
	});
</script>

<h1>{JSON.stringify(data.scrap)}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
