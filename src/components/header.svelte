<script>
	import { checked } from '../stores';

	let isChecked;

	checked.subscribe((value) => (isChecked = value));
</script>

<header>
	<div class="intro">
		{#if isChecked}
			<img src="/img/VRG-S.jpg" id="faceshot" alt="Faceshot of Varun" />
		{:else}
			<img src="/img/VRG.svg" id="logo" alt="The VRG Logo" />
		{/if}
		<div>
			<h1 class="name">Varun R Gupta</h1>
			<h2 class="sub">Programmer, Web Developer & Designer</h2>
		</div>
	</div>
	<a href="https://goo.gl/maps/bN2Y76FmAcY7JsL16">
		<span class="address"
			>52, 11th Main, 30th Cross<br />Banashankari 2nd Stage<br
			/>Bengaluru, INDIA 560070<br />▼ WHC9+8C BSK</span
		>
	</a>
	<div class="links">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-mail-opened"
				width="12"
				height="12"
				viewbox="0 0 24 24"
				stroke-width="1.5"
				stroke="#FFFFFF"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<polyline points="3 9 12 15 21 9 12 3 3 9" />
				<path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
				<line x1="3" y1="19" x2="9" y2="13" />
				<line x1="15" y1="13" x2="21" y2="19" />
			</svg>
			<a
				href="mailto:varungupta3009@gmail.com?subject=I%20would%20love%20to%20hire%20you!%20(Please%3F)&body=Hey%20Varun%2C"
			>
				varungupta3009@gmail.com
			</a>
			<br />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-phone-call"
				width="12"
				height="12"
				viewbox="0 0 24 24"
				stroke-width="1.5"
				stroke="#FFFFFF"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<path
					d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
				/>
				<path d="M15 7a2 2 0 0 1 2 2" />
				<path d="M15 3a6 6 0 0 1 6 6" />
			</svg>
			<a href="https://wa.me/+919739856528"> +91 97398 56528 </a>
			<br />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-social"
				width="12"
				height="12"
				viewbox="0 0 24 24"
				stroke-width="1.5"
				stroke="#FFFFFF"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<circle cx="12" cy="5" r="2" />
				<circle cx="5" cy="19" r="2" />
				<circle cx="19" cy="19" r="2" />
				<circle cx="12" cy="14" r="3" />
				<line x1="12" y1="7" x2="12" y2="11" />
				<path d="M6.7 17.8l2.8 -2" />
				<path d="M17.3 17.8l-2.8 -2" />
			</svg>
			<a href="https://links.VRG.rocks/"> varungupta3009 </a>
			<br />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-brand-chrome"
				width="12"
				height="12"
				viewbox="0 0 24 24"
				stroke-width="1.5"
				stroke="#FFFFFF"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<circle cx="12" cy="12" r="9" />
				<circle cx="12" cy="12" r="3" />
				<line x1="12" y1="9" x2="20.4" y2="9" />
				<line
					x1="12"
					y1="9"
					x2="20.4"
					y2="9"
					transform="rotate(120 12 12)"
				/>
				<line
					x1="12"
					y1="9"
					x2="20.4"
					y2="9"
					transform="rotate(240 12 12)"
				/>
			</svg>
			<a href="https://www.VRG.rocks/">www.VRG.rocks</a>
		</div>
	</div>
</header>

<style>
	header {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 500;
		background-color: #4285f4;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 1);
	}

	.intro {
		display: flex;
		align-items: center;
	}

	.intro img {
		width: 6rem;
		height: 6rem;
		margin-right: 0.75rem;
	}

	#faceshot {
		border-radius: 50%;
		border-width: 4px;
		border-color: #eeeeee;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
	}

	.name {
		font-size: 1.875rem;
		font-family: 'Google Sans Display', sans-serif;
		color: #edf2f7;
	}

	.sub {
		font-size: 1.25rem;
		font-family: 'Sen', sans-serif;
	}

	.address {
		font-size: 1rem;
	}

	.icon {
		display: inline;
	}

	.links {
		font-size: 1rem;
		display: flex;
	}

	.links svg {
		margin-right: 0.5rem;
		display: inline;
	}
</style>
