<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { json } from '@sveltejs/kit';
	import { error } from '@sveltejs/kit';

	export let data: PageData;
	if (!data.scrap) throw error(404, 'Data request failed');

	let value: number;
	let unitValue: number = 0.0;
	let formattedNumber: any;
	let leftSelectArray = data.scrap.MoedaUnRep;
	let rightSelectArray = data.scrap.MoedaUnRep2;
	let leftCurrency: any = '';
	let rightCurrency: any = '';
	let currencies: any;
	let fristoption: boolean = false;
	let secondoption: Boolean = false;
	let x: string = 'text-white';
	let y: string = 'bg-[#09080b]';
	let z: string = 'border';

	function handleUpdateX(event: CustomEvent<string>) {
		x = event.detail;
		console.log('Updated x:', x);
	}

	function handleUpdateY(event: CustomEvent<string>) {
		y = event.detail;
		console.log('Updated y:', y);
	}

	function handleUpdateZ(event: CustomEvent<string>) {
		z = event.detail;
	}

	console.log('q inferno	', x);
	console.log('q infero2', y);

	onMount(async () => {
		localStorage.setItem('coin', JSON.stringify(data.scrap?.formattedPairs));
		currencies = localStorage.getItem('coin');
	});

	function faztudofuncionareeunaolembroopq(rightCurrency: any, leftCurrency: any) {
		formattedNumber = parseFloat(
			JSON.parse(currencies)[leftCurrency + '/' + rightCurrency]
		).toFixed(2);
	}
	// Chama a função de atualização ao mudar o valor selecionado
	$: unitValue = formattedNumber * value;
</script>

<div id="teste" class={`container mx-auto h-screen ${x}`}>
	<Nav />

	<div class=" e flex h-[80%] w-full flex-col items-center justify-center font-Poppins">
		<h1 class="">Currency Converter x:{x} y:{y} z:{z}</h1>

		<div class="m-4">
			<form
				id="meuForm"
				on:submit|preventDefault={(event) =>
					faztudofuncionareeunaolembroopq(rightCurrency, leftCurrency)}
			>
				<div class="relative">
					<label class="absolute right-3 top-2 text-sm" for="meuinput">Amount</label>
					<input
						type="text"
						id="meuInput"
						class="h-10 w-96 rounded-lg border bg-[#09080b]"
						bind:value
					/>
				</div>
			</form>
		</div>
		<div class="flex justify-evenly">
			<div class={`w-40 rounded-lg ${z} ${y}`}>
				<div class="">
					<p class=" absolute">{rightCurrency}</p>
					<button
						class="flex h-full w-full justify-end p-3"
						type="button"
						on:click={() => {
							fristoption = !fristoption;
						}}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 text-white"
							fill="currentColor"
							viewBox="0 0 512 512"
							><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
							/></svg
						></button
					>
					{#if fristoption}
						<div class="bg-red absolute mt-2 max-h-44 w-40 overflow-auto">
							{#each rightSelectArray as currencies}
								<button on:click={() => (rightCurrency = currencies)} class="mr-2 flex justify-end"
									>{currencies}</button
								>
							{/each}
						</div>
					{/if}
				</div>
			</div>

			<div class="m-4"></div>

			<div class={`w-40 rounded-lg ${z} ${y}`}>
				<div class="">
					<p class=" absolute">{leftCurrency}</p>
					<button
						class="flex h-full w-full justify-end p-3"
						type="button"
						on:click={() => {
							secondoption = !secondoption;
						}}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 text-white"
							fill="currentColor"
							viewBox="0 0 512 512"
							><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
							/></svg
						></button
					>
					{#if secondoption}
						<div class="bg-red absolute mt-2 max-h-44 w-40 overflow-auto">
							{#each leftSelectArray as currencies}
								<button on:click={() => (leftCurrency = currencies)} class="mr-2 flex justify-end"
									>{currencies}</button
								>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<button class=" mt-5 h-10 w-96 rounded-lg bg-[#533DA1]">Convert</button>
	</div>
	<footer class=" flex justify-end">
		<Button
			bind:z
			bind:x
			bind:y
			on:updateX={handleUpdateX}
			on:updateY={handleUpdateY}
			on:updateZ={handleUpdateZ}
		>
			<svg class="bg-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
				><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					fill="#ffffff"
					d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
				/></svg
			>
		</Button>
	</footer>
</div>

<style>
	:global(body.dark-mode) {
		background-color: white;
		color: black;
	}
</style>
