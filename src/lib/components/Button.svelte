<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let x: string;
	export let y: string;
	export let z: string;

	const dispatch = createEventDispatcher();

	function toggle(x: string, y: string, z: string) {
		// Toggle the values
		let newY = y === 'bg-white' ? 'bg-[#09080b]' : 'bg-white';
		let newX = x === 'text-white' ? 'text-black' : 'text-white';
		let newZ = z === 'border' ? 'border-black' : 'border';

		// Update the body class
		window.document.body.classList.toggle('dark-mode');

		// Dispatch separate events for each value
		dispatch('updateX', newX);
		dispatch('updateY', newY);
		dispatch('updateZ', newZ);

		console.log('newX:', newX);
		console.log('newY:', newY);
	}

	console.log('Initial x:', x);
	console.log('Initial y:', y);
</script>

<button class="mr-72 h-3 w-6" on:click={() => toggle(x, y, z)}>
	<slot />
</button>
