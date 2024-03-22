<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		localStorage.setItem('coin', JSON.stringify(data.scrap));
		let getcoin: any = localStorage.getItem('coin');
		let brlusd = JSON.parse(getcoin)['USD/BRL'];

		console.log(brlusd);
	});
</script>

<h1>{JSON.stringify(data.scrap)}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
