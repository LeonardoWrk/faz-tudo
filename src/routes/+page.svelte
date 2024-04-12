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
	let teste3: any = '';
	let teste2: any = '';
	let getcoin: any;

		onMount(async () => {
			localStorage.setItem('coin', JSON.stringify(data.scrap?.formattedPairs));
			getcoin = localStorage.getItem('coin');

			console.log('boring', teste);
			console.log('valor', teste);
			console.log('teste ', scrap[teste]);
		});
	
	async function faztudofuncionareeunaolembroopq(teste: any, teste2: any, teste3: any) {

    teste = teste3 + '/' + teste2;
    try {
        let brlusd = JSON.parse(getcoin)[teste];
    
        
        if (brlusd !== undefined) {
            numeroFormatado = brlusd.toFixed(2);
        } else {
            console.error('brlusd is undefined or not a number');
        }
    } catch (error) {
        console.error('Error parsing JSON or calling toFixed:', error);
    }
}

	function conversao() {
		final = numeroFormatado * valor;
	}

	// Chama a função de atualização ao mudar o valor selecionado
	$: {
		faztudofuncionareeunaolembroopq(teste, teste2, teste3);
	}
</script>

<p>A variável teste contém: {teste3}</p>
<p>A variável teste2 contém: {teste2}</p>
<h1>${numeroFormatado}</h1>
<h1>%{final}</h1>
<form id="meuForm" on:submit={conversao}>
	<input type="text" id="meuInput" bind:value={valor} />
	<button type="submit">Obter Valor</button>
</form>

<select
	class="h-8 w-[85%] rounded-lg border border-[#27293a] uppercase text-black"
	bind:value={teste3}
>
	<option value="" />
	{#each moeda1 as currencies}
		<option>{currencies}</option>
	{/each}
</select>

<select
	class="h-8 w-[85%] rounded-lg border border-[#27293a] uppercase text-black"
	bind:value={teste2}
>
	<option value="" />
	{#each moeda2 as currencies}
		<option>{currencies}</option>
	{/each}
</select>
