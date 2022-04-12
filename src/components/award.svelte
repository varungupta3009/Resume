<script>
	export let name;
	export let link;
	export let sub;
</script>

<div class="award">
	<a href={link}>
		<h2 class="name">
			{name}
		</h2>
		<h3 class="sub">
			{sub}
		</h3>
	</a>
</div>

<style>
	.award {
		margin-bottom: 0.5rem;
		font-size: 1rem;
	}

	.name {
		font-size: 1rem;
		font-weight: 600;
	}

	.sub {
		font-size: 1rem;
	}
</style>
