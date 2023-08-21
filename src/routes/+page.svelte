<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch('http://localhost:8080/getAll');
		const data = await res.json();
		console.log(data);
	});
	
	let urlSolicitada = "";
	let urlEncurtada = "";

	async function create() {
		const Url = {
			urlOriginal: urlSolicitada
		}

		console.log(JSON.stringify(Url))

		const response = await fetch('http://localhost:8080/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Url)
        });

		const data = await response.json();
        console.log(data);

		urlEncurtada = data.urlEncurtada;
	}

</script>

<section>
	<h1>Encurtador de URL</h1>
	<form>
		<input type="text" bind:value={urlSolicitada} placeholder="Put your link here" name="url"/>
		<button id="button" type="submit" on:click={create}>Encurtar</button>
	</form>
	{#if urlEncurtada != ""}
	<div class="response">
		<span id="url">{urlEncurtada}</span>
		<button class="bg">
			<ion-icon name="copy-outline" />
		</button>
	</div>
	{/if}
</section>

<style>
	section {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	form {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 0.4rem;
	}

	input,
	#button {
		padding: 1rem 0.6rem;
		border-radius: 10px;
		outline: none;
		font-size: 16pt;
	}

	input {
		width: 41%;
		border: 2px solid #cccccc;
		color: #252627;
	}

	#button {
		width: 10%;
		color: #fff;
		font-weight: 500;
		background-color: #fa5700;
		border: 2px solid #e65000;
		transition: all 0.2s;
	}

	#button:hover {
		background-color: #e65000;
		cursor: pointer;
	}

	h1 {
		font-size: 36pt;
		color: #fa5700;
	}

	.response {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.4rem 1rem;
		width: 50%;
		background-color: #e8e8e8;
		border: 2px dashed #cccccc;
		border-radius: 10px;
		color: #252627;
		font-size: 14pt;
	}

	.bg {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem;

		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-radius: 8px;
		border: 2px solid #25262735;
	}

	.bg > ion-icon {
		font-size: 18pt;
		transition: all 0.2s;
	}

	.bg:hover {
		color: #cccccc;
		cursor: pointer;
	}
</style>
