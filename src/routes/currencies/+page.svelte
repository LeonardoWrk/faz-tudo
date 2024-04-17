<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { json } from '@sveltejs/kit';
	import { error } from '@sveltejs/kit';

	export let data: PageData;
    if (!data.scrap) throw error(404, 'Data request failed');

	let value: number;
	let unitValue: number = 0.0
	let formattedNumber: any;
	let leftSelectArray = data.scrap.MoedaUnRep;
    let rightSelectArray = data.scrap.MoedaUnRep2;
	let leftCurrency: any = '';
	let rightCurrency: any = '';;
	let currencies : any;

	onMount(async () => {
		localStorage.setItem('coin', JSON.stringify(data.scrap?.formattedPairs));
		currencies  = localStorage.getItem('coin');
	});
	
	function faztudofuncionareeunaolembroopq(rightCurrency: any, leftCurrency: any) {
		formattedNumber = parseFloat(JSON.parse(currencies)[leftCurrency + '/' + rightCurrency]).toFixed(2);
	}
	// Chama a função de atualização ao mudar o valor selecionado
	$: unitValue = formattedNumber * value;
	
</script>
<div class=" bg-[#09080b] w-full h-screen flex justify-center items-center">
	<div class=" bg-[#141415] border rounded-lg h-[35%] w-[35%] flex justify-center items-center flex-col ">
		<!-- <form id="meuForm" on:submit|preventDefault={event => faztudofuncionareeunaolembroopq(rightCurrency, leftCurrency)}>
			<input type="text" id="meuInput" bind:value={value} />
			<button type="submit">Obter Valor</button>
		</form> -->
	
		<div class="flex-col">
			<div class=" w-[100%]  bg-[#6D6C71] mb-6 flex">
				<input type="text" class="w-[35%] bg-[#6D6C71]">
				<select
			    class="m-2 w-[30%] rounded-lg border border-[#27293a] uppercase text-black ml-auto"
			    bind:value={leftCurrency}
		     >
		   	<option value="" />
			{#each leftSelectArray as currencies}
				<option>{currencies}</option>
			{/each}
		</select>
			</div>

			<div class=" w-[100%]  bg-[#6D6C71] flex">
				<input type="text" class="w-[35%] bg-[#6D6C71]">
				<select
			    class="m-2 w-[30%] rounded-lg border border-[#27293a] uppercase text-black ml-auto"
			    bind:value={rightCurrency}
		     >
		   	<option value="" />
			{#each rightSelectArray as currencies}
				<option>{currencies}</option>
			{/each}
		</select>
			</div>
		</div>
	</div>
</div>
