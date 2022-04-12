<footer>
	<div class="about">
		<h1>About me</h1>
		<h2>
			I am an experienced developer with proficiency in web design. Fluent
			in many computing languages with over 11 years of experience in
			Python, C++, and JS. Polymath, geek, and love to explore the
			bleeding edge of technology and internet. I am also a hobbyist
			designer and hacker.
		</h2>
	</div>
	<div class="connect">
		<h1>Let's Connect</h1>
		<h2>
			<a href="http://in.VRG.rocks/"
				>I recommend checking out my LinkedIn Profile to stay regularly
				updated, and to get in touch with me instantly.</a
			>
		</h2>
	</div>
	<a href="http://in.VRG.rocks/">
		<img
			src="/assets/LinkedIn Code QR.svg"
			id="inqr"
			alt="QR Code to LinkedIn Profile"
		/>
	</a>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #101114;
		padding-inline: 1rem;
		padding-block: 1.25rem;
		border-top: 2px solid #4285f4;
		text-align: justify;
	}

	h1 {
		color: #4285f4;
		font-family: 'Google Sans Display';
		margin-top: -6px;
		font-size: 1.5rem;
	}

	h2 {
		margin-bottom: -2px;
		font-size: 1rem;
	}

	.about,
	.connect {
		border-left: 2px solid #4285f4;
		padding-left: 0.75rem;
	}

	.about {
		flex-basis: 56%;
		margin-left: -6px;
	}

	.connect {
		flex-basis: 27%;
	}

	#inqr {
		height: 90px;
	}
</style>
