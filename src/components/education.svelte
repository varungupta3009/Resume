<script>
	export let school;
	export let logo;
	export let site;
	export let degree;
	export let duration;
	export let rounded = false;
</script>

<div class="job">
	<img src={logo} class="logo {rounded ? 'rounded' : ''}" alt={school} />
	<div class="details">
		<a href={site}>
			<h2 class="degree">
				{school}
			</h2>
			<h3 class="school">
				{degree}
			</h3>
			<span class="duration">{duration}</span>
		</a>
	</div>
</div>

<style>
	.job {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.logo {
		width: 3rem;
		margin-right: 0.75rem;
	}

	.details {
		padding-left: 1rem;
	}

	.degree {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
	}

	.school {
		font-size: 1rem;
	}

	.duration {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: rgba(203, 213, 224);
	}

	.rounded {
		border-radius: 0.5rem;
	}
</style>
