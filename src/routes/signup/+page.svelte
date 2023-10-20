<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch('http://localhost:8080/getAll');
		const data = await res.json();
		console.log(data);
	});
	
	let username = "";
	let email = "";
	let password = "";

	async function login(){

	}

</script>

<section>
	<div class="title">
		<h1>Encurtador de URL</h1>
		<h2>Cadastre-se conosco agora mesmo!</h2>
	</div>
	<form on:submit={login}>
		<div class="box">
			<label for="username">Username: </label>
			<input type="text" name="username" class="input" bind:value={username} placeholder="Digite seu username">
		</div>
		<div class="box">
			<label for="email">Email: </label>
			<input type="email" name="email" class="input" bind:value={email} placeholder="Digite seu email">
		</div>
		<div class="box">
			<label for="password">Senha: </label>
			<input type="password" name="password" class="input" bind:value={password} placeholder="Digite sua senha">
		</div>
		<button type="submit">Cadastrar</button>
		<a href="/login">Já tenho uma conta!</a>
	</form>
</section>

<style>
	section {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	form {
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		gap: 0.8rem;
		padding: 1rem;

		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-radius: 8px;
		border: 2px solid #25262735;
	}

	input {
		padding: 0.6rem;
		font-size: 12pt;
		border: 2px solid #cccccc;
		border-radius: 8px;
	}

	input:focus {
		outline: none;
		border: 2px solid #fa5700;
	}

	h1 {
		font-size: 36pt;
		color: #fa5700;
		margin: 0;
	}

	h2 {
		margin: 0;
		color: #444444;
	}

	label {
		font-size: 14pt;
		font-weight: 500;
		color: #444444;
	}

	button {
		font-size: 12pt;
		padding: 0.4rem 1.8rem;
		border: 2px solid #e65000;
		color: #fff;
		font-weight: bold;
		background-color: #fa5700;
		border-radius: 6px;
		transition: all 0.2s;
	}

	button:hover {
		background-color: #e65000;
		cursor: pointer;
	}

	a {
		color: #fa5700;
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	
	.box {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}	
	
</style>
