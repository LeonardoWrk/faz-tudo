<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { json } from '@sveltejs/kit';

	export let data: PageData;
	let valor: number;
	let final: any;
	let numeroFormatado: any;
	let scrap: any = data.scrap;
	let moeda1: any = data.scrap?.MoedaUnRep;
	let moeda2: any = data.scrap?.MoedaUnRep2;
	let teste: any = '';
	let leftCurrency: any = '';
	let rightCurrency: any = '';
	let currencyData: any;

	console.log(moeda1);

	onMount(async () => {
		localStorage.setItem('coin', JSON.stringify(data.scrap?.formattedPairs));
		getcoin = localStorage.getItem('coin');

		console.log('boring', teste);
		console.log('valor', teste);
		console.log('teste ', scrap[teste]);
	});

	function faztudofuncionareeunaolembroopq(leftCurrency: any, rightCurrency: any) {
		console.log('porraaaaaaaaaaa', teste);
		formattedNumber = JSON.parse(getcoin)[leftCurrency + '/' + rightCurrency].toFixed(2);
		numeroFormatado = brlusd.tofixed(2);
		console.log('boring', teste);
		console.log('valor', teste);
		console.log('teste ', scrap[teste]);
		console.log('caralho', brlusd);
	}

	function conversao() {
		final = numeroFormatado * valor;
	}

	// Chama a função de atualização ao mudar o valor selecionado

	$: {
		faztudofuncionareeunaolembroopq(leftCurrency, rightCurrency);
	}
</script>

<p>A variável leftcurrency contém: {leftCurrency}</p>
<p>A variável rightcurrency contém: {rightCurrency}</p>
<h1>${numeroFormatado}</h1>
<h1>%{final}</h1>
<form id="meuForm" on:submit={conversao}>
	<input type="text" id="meuInput" bind:value={valor} />
	<button type="submit">Obter Valor</button>
</form>

<select
	class="h-8 w-[85%] rounded-lg border border-[#27293a] uppercase text-black"
	bind:value={leftCurrency}
>
	<option value="" />
	{#each moeda1 as currencies}
		<option>{currencies}</option>
	{/each}
</select>

<select
	class="h-8 w-[85%] rounded-lg border border-[#27293a] uppercase text-black"
	bind:value={rightCurrency}
>
	<option value="" />
	{#each moeda2 as currencies}
		<option>{currencies}</option>
	{/each}
</select>
