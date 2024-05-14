<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
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

<Nav>alo</Nav>

<div class="container mx-auto h-screen">

<div class=" font-Poppins flex h-screen w-full flex-col items-center justify-center bg-[#09080b] text-white">
	<h1 class="text-white">Currency Converter</h1>

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
		<div class="w-40 rounded-lg border bg-[#09080b]">
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

		<div class="w-40 rounded-lg border bg-[#09080b]">
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
</div>
