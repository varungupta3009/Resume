<script>
	export let checked;
</script>

<section>
	<div>
		<h1>You can choose from the options below.</h1>
		<div class="download">
			<span>
				{#if checked}
					<a
						href="/VRG's Resume [Latest] [Selfshot].pdf"
						download="VRG's Resume (with Selfshot).pdf"
						id="d-res-btn"
					>
						Download Resume (with Selfshot)
					</a>
				{:else}
					<a
						href="/VRG's Resume [Latest].pdf"
						download="VRG's Resume.pdf"
						id="d-res-btn"
					>
						Download Resume
					</a>
				{/if}
			</span>
			<button onclick="window.print();"> Print Resume </button>
		</div>
		<div class="toggle-div">
			<label for="selfshot">
				<div class="toggle">
					<input id="selfshot" type="checkbox" bind:checked />
					<!-- onclick="checkSelfshot(this.checked)" -->
					<div class="toggle__line" />
					<div class="toggle__dot" />
				</div>
				<div class="toggle-text">
					Include Selfshot (not recommended)
				</div>
			</label>
		</div>
		<h2 class="mobile">Printing available only on desktop.</h2>
		<h2 class="desktop">Print Properties</h2>
		<h3>
			<!-- <span class="text-2xl text-gray-200 hidden">Strictly configure these properties if printing:&nbsp;</span>Sheet -->
			Size: A4, Scale: 100% (or Default), Margins: None, Background Graphics:
			Check ☑.
		</h3>
		<div class="github">
			<!-- Place this tag where you want the button to render. -->
			<a
				class="github-button"
				href="https://github.com/varungupta3009"
				data-color-scheme="no-preference: dark; light: dark; dark: dark;"
				data-size="large"
				aria-label="Follow @varungupta3009 on GitHub"
			>
				Follow @varungupta3009
			</a>
			<a
				class="github-button"
				href="https://github.com/varungupta3009/resume"
				data-color-scheme="no-preference: dark; light: light; dark: dark;"
				data-icon="octicon-star"
				data-size="large"
				aria-label="Star varungupta3009/resume on GitHub">Star</a
			>
			<!-- Place this tag where you want the button to render. -->
			<a
				class="github-button"
				href="https://github.com/varungupta3009/resume/fork"
				data-color-scheme="no-preference: dark; light: light; dark: dark;"
				data-icon="octicon-repo-forked"
				data-size="large"
				aria-label="Fork varungupta3009/resume on GitHub">Fork</a
			>
		</div>
	</div>
</section>

<style>
	section {
		background-color: #1f1f1f;
		display: grid;
		padding: 3rem;
		text-align: center;
		width: 100vw;
		height: 100vh;
		place-items: center;
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		margin-top: 2rem;
		color: #e5e7eb;
		font-size: 1.5rem;
	}

	.desktop {
		display: none;
	}

	h3 {
		display: none;
		margin-top: 0.5rem;
		color: #d1d5db;
		font-size: 1.25rem;
	}

	.download {
		margin-bottom: 2rem;
		margin-top: 2rem;
	}

	.download span {
		display: inline-flex;
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	}

	.download button {
		display: none;
		margin-left: 2rem;
		color: #6b7280;
		font-size: 1rem;
		font-weight: 500;
		background: none;
	}
	.download button:hover {
		color: #d1d5db;
	}
	.download button:focus {
		color: #ffffff;
		outline: 0;
	}

	#d-res-btn {
		display: inline-flex;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		background-color: #2563eb;
		color: #fff;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		line-height: 1.5rem;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.375rem;
		border-width: 1px;
		border-color: transparent;
		transition-property: background-color, border-color, color, fill, stroke,
			opacity, box-shadow, transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 75ms;
	}
	#d-res-btn:hover {
		background-color: #3b82f6;
	}
	#d-res-btn:focus {
		border-color: #3b82f6;
		outline: 0;
	}
	#d-res-btn:active {
		background-color: #60a5fa;
	}

	@media (min-width: 767px) {
		.mobile {
			display: none;
		}

		.desktop,
		h3 {
			display: block;
		}

		.download button {
			display: inline-block;
		}
	}

	.toggle-div {
		display: flex;
		margin-top: 1.5rem;
		justify-content: center;
		align-items: center;
	}

	.toggle-div label {
		display: flex;
		margin-bottom: 1rem;
		align-items: center;
		cursor: pointer;
	}

	.toggle {
		position: relative;
	}

	.toggle input {
		display: none;
	}

	.toggle-text {
		margin-left: 0.75rem;
		color: #6b7280;
		font-size: 1rem;
		font-weight: 500;
	}
	.toggle-text:hover {
		color: #fff;
	}
	.toggle-text:focus {
		outline: 0;
		color: #111827;
	}

	.toggle__line {
		background-color: #9ca3af;
		width: 2rem;
		height: 0.75rem;
		border-radius: 9999px;
		box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	}

	.toggle__dot {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
			0 1px 2px 0 rgba(0, 0, 0, 0.06);
		top: -0.25rem !important;
		left: -0.25rem !important;
		transition: all 0.3s ease-in-out;
	}

	input:checked ~ .toggle__dot {
		transform: translateX(100%);
		background-color: #4285f4;
	}

	.github {
		display: flex;
		margin-top: 2rem;
		justify-content: center;
		gap: 1rem;
	}

	@media print {
		section {
			display: none;
		}
	}
</style>
