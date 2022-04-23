<script>
	export let ladder = false;
	export let employer;
	export let logo;
	export let site;
	export let jobs = [];
	export let title = '';
	export let start = '';
	export let end = '';
	export let rounded = false;

	let getExp = (d1, d2) => {
		let y,
			m,
			result = '(';
		m = (d2.getFullYear() - d1.getFullYear()) * 12;
		m -= d1.getMonth();
		m += d2.getMonth();
		m++;
		y = parseInt(m / 12);
		m = m % 12;
		if (y > 0) result += y + (y === 1 ? ' yr ' : ' yrs ');
		if (m > 0) result += m + (m === 1 ? ' mo' : ' mos');
		return result.trim() + ')';
	};
</script>

{#if ladder}
	<div class="job">
		<img
			src={logo}
			class="logo {rounded ? 'rounded' : ''}"
			alt={employer}
		/>
		<div>
			<a href={site}>
				{#each jobs as job, i}
					<div class="job-ladder">
						<h2 class="title">
							{job.title}
						</h2>
						{#if !i}
							<h3 class="employer">{employer}</h3>
						{/if}
						<span class="duration">
							{job.start} – {job.end ? job.end : 'Present'}
							{getExp(
								new Date(job.start),
								job.end ? new Date(job.end) : new Date()
							)}
						</span>
					</div>
				{/each}
			</a>
		</div>
	</div>
{:else}
	<div class="job">
		<img
			src={logo}
			class="logo {rounded ? 'rounded' : ''}"
			alt={employer}
		/>
		<div class="details">
			<a href={site}>
				<h2 class="title">
					{title}
				</h2>
				<h3 class="employer">
					{employer}
				</h3>
				<span class="duration">
					{start} – {end ? end : 'Present'}
					{getExp(new Date(start), end ? new Date(end) : new Date())}
				</span>
			</a>
		</div>
	</div>
{/if}

<style>
	.job {
		display: flex;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	.logo {
		width: 3rem;
		margin-right: 1rem;
	}

	.details {
		padding-left: 1rem;
	}

	.title {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
	}

	.employer {
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

	.job-ladder {
		border-left: 2px solid hsl(221, 39%, 34%);
		transform: translateX(-2px);
		padding-bottom: 0.5rem;
		padding-left: 1rem;
	}

	.job-ladder:first-of-type {
		border-color: #4285f4;
	}

	.job-ladder::before {
		content: '';
		display: block;
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 6px solid #202124;
		background-color: hsl(221, 39%, 34%);
		transform: translate(-22px, -1px);
	}

	.job-ladder:first-of-type::before {
		background-color: #4285f4;
	}

	.job-ladder:last-of-type {
		border-color: #202124;
		padding-bottom: 0;
	}
</style>
