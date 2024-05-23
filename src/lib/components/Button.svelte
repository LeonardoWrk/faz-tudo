<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let x: any;
	export let y: any;
	const dispatch = createEventDispatcher();

	function toggle(x: any, y: any) {
		y = y === 'bg-white' ? 'bg-[#09080b]' : 'bg-white';
		console.log('y teste', y);
		x = x === 'text-red-500' ? 'text-black' : 'text-red-500';
		console.log('x teste', x);
		window.document.body.classList.toggle('dark-mode');
		setTimeout(() => {
			dispatch('update', x);
		}, 0);

		setTimeout(() => {
			dispatch('update', y);
		}, 500);
		console.log('o x', x);
		console.log('o y', y);
	}

	console.log('teste2', x);
	console.log('teste2', y);
</script>

<button class="mr-72 h-3 w-6" on:click={() => toggle(y, x)}>
	<slot />
</button>
