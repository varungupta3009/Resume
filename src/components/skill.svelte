<script>
	export let name = '';
	export let exp;
	export let skl;
	export let end = false;
</script>

<div class="skill {end ? 'end' : ''}">
	<h2 class="name">
		{name}
	</h2>
	<div class="skillset">
		<h3 class="type exp">Experience</h3>
		<progress class="exp-level" value={exp} max="100" />
		<h3 class="type skl">Skill</h3>
		<progress class="skl-level" value={skl} max="100" />
	</div>
</div>

<style>
	.skill {
		margin-bottom: 1rem;
	}

	.end {
		margin-bottom: 1.5rem;
	}

	.name {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
	}

	.type {
		font-size: 1rem;
		line-height: 1.5rem;
		color: rgba(203, 213, 224);
	}

	.skillset {
		display: grid;
		align-items: end;
		grid-column-gap: 12px;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;
		grid-template-areas: 'exp exp-level' 'skl skl-level';
	}

	.exp {
		grid-area: exp;
	}

	.exp-level {
		grid-area: exp-level;
	}

	.skl {
		grid-area: skl;
	}

	.skl-level {
		grid-area: skl-level;
	}
</style>
