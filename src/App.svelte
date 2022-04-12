<script>
	import Landing from './components/landing.svelte';
	import Header from './components/header.svelte';
	import Main from './components/main.svelte';
	import Footer from './components/footer.svelte';

	let checked = false;
	let print = false;
</script>

<div id="app">
	<!-- {#if print} -->
	<Landing bind:checked />
	<!-- {:else} -->
	<Header {checked} />
	<Main />
	<Footer />
	<!-- {/if} -->
	<!-- <input type="checkbox" bind:checked={print} /> -->
</div>

<style>
	#app {
		color: rgb(237, 242, 247);
		font-size: 0.75rem;
	}

	@media print {
		#app {
			display: grid;
			width: 21cm;
			height: 29.7cm;
			grid-template-rows: auto 1fr auto;
			font-family: 'Open Sans', sans-serif;
		}
	}

	/* input {
		position: fixed;
		top: 0;
		right: 0;
		opacity: 0;
	} */
</style>
