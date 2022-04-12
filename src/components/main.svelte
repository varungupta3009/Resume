<script>
	import Experience from './experience.svelte';
	import Education from './education.svelte';
	import Skill from './skill.svelte';
	import Award from './award.svelte';
	import data from '../data.json';
	import Hobby from './hobby.svelte';
	import Language from './language.svelte';
</script>

<main>
	<div class="left">
		<section class="experience">
			<h1 class="section-title">Experience</h1>
			<!-- <Ladder /> -->
			{#each data.experiences as experience}
				<Experience {...experience} />
			{/each}
		</section>
		<section class="education">
			<h1 class="section-title">Education</h1>
			{#each data.educations as education}
				<Education {...education} />
			{/each}
		</section>
		<section class="awards">
			<h1 class="section-title">Publications & Awards</h1>
			{#each data.awards as award}
				<Award {...award} />
			{/each}
		</section>
		<section class="languages">
			<h1 class="section-title">Languages</h1>
			<div class="languages-list">
				{#each data.languages as language}
					<Language {...language} />
				{/each}
			</div>
		</section>
		<section class="hobbies">
			<h1 class="section-title">Hobbies</h1>
			<div class="hobbies-list">
				{#each data.hobbies as hobby}
					<Hobby {...hobby} />
				{/each}
			</div>
		</section>
	</div>
	<div class="right">
		<section class="skills">
			<h1 class="section-title">Knowledge and Skills</h1>
			{#each data.skills as skill}
				<Skill {...skill} />
			{/each}
		</section>
		<div>
			<span id="resumelink">
				Generated at&nbsp;
				<a href="https://resume.VRG.rocks/"> resume.VRG.rocks </a>
			</span>
		</div>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 60% 40%;
		padding: 2rem;
	}

	h1 {
		font-family: 'Sen', sans-serif;
	}

	section:not(:last-of-type) {
		margin-bottom: 1.25rem;
	}

	.section-title {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.hobbies-list {
		font-size: 1rem;
		margin-bottom: -4px;
		margin-top: 0.75rem;
	}

	.languages-list,
	.hobbies-list {
		display: flex;
	}

	#resumelink {
		color: rgb(113, 128, 150);
	}
</style>
