<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { json } from '@sveltejs/kit';

	export let data: PageData;
	let valor: number;
	let final: any;
	let numeroFormatado: any;
	let scrap: any = data.scrap;
	let teste: any = '';
	let teste3: any = '';
	let teste2: any = '';
	let key: any;
	let getcoin: any;
	let keysArray: string[] = [];
	let moeda1: string[] = [];
	let moeda2: string[] = [];

	let onMountWait = new Promise((resolve) => {
		onMount(async () => {
			localStorage.setItem('coin', JSON.stringify(data.scrap));
			getcoin = localStorage.getItem('coin');

			console.log('boring', teste);
			console.log('valor', teste);
			console.log('teste ', scrap[teste]);

			resolve(getcoin); // Resolvendo a Promise após a execução do onMount()
		});
	});

	if (data.scrap != undefined) {
		for (key in data.scrap) {
			if (data.scrap.hasOwnProperty(key)) {
				keysArray.push(key); // Output the key
			}
		}
	}
	// Iterar sobre cada par de moedas
	keysArray.forEach((pair) => {
		const [moedaA, moedaB] = pair.split('/');
		moeda1.push(moedaA);
		moeda2.push(moedaB);
	});

	console.log('Moeda 1:', moeda1);
	console.log('Moeda 2:', moeda2);

	async function faztudofuncionareeunaolembroopq(teste: any, teste2: any, teste3: any) {
		await onMountWait;

		teste = teste3 + '/' + teste2;
		console.log('porraaaaaaaaaaa', teste);
		let brlusd = JSON.parse(getcoin)[teste];
		numeroFormatado = brlusd;
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
	{#each moeda1 as ad}
		<option>{ad}</option>
	{/each}
</select>

<select
	class="h-8 w-[85%] rounded-lg border border-[#27293a] uppercase text-black"
	bind:value={teste2}
>
	<option value="" />
	{#each moeda2 as po}
		<option>{po}</option>
	{/each}
</select>
