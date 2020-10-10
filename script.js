console.log('%cVRG.', 'font-family: "Google Sans"; font-size: 10em;');

console.log(
	'%cHello There!',
	'font-family: Sen; font-size: 3em; color: #4285F4;'
);

console.log(
	'%cGeneral Kenobi!',
	'font-family: Sen; font-size: 1em; text-decoration: line-through;'
);

console.log(
	"%cSneaky lil' fucker aren't you?",
	'font-family: Sen; font-size: 1.5em;'
);

console.log(
	"%cI assure you, there's nothing much to see (or do) here.",
	'font-family: Sen; font-size: 2em;'
);

console.log(
	'%cBut if you wanna get in touch, just hit me up with a message @varungupta3009 anywhere, or specifically, varungupta3009@gmail.com, along with your findings.',
	'font-family: Sen; font-size: 1.5em;'
);

console.log(
	'%cAnyway, good luck with your expedition, pirate!',
	'font-family: Sen; font-size: 1.5em; color: #34A853;'
);

const checkSelfshot = (checked) => {
	document.getElementById('d-res-btn').textContent = checked
		? 'Download Resume (with Selfshot)'
		: 'Download Resume';
	document
		.getElementById('d-res-btn')
		.setAttribute(
			'href',
			checked
				? "/VRG's Resume [Latest] [Selfshot].pdf"
				: "/VRG's Resume [Latest].pdf"
		);
	document
		.getElementById('d-res-btn')
		.getAttribute(
			'download',
			checked ? "VRG's Resume (with Selfshot).pdf" : "VRG's Resume.pdf"
		);
	let e1 = checked ? 'logo' : 'official-pp';
	let e2 = checked ? 'official-pp' : 'logo';
	document.getElementById(e1).classList.add('hidden');
	document.getElementById(e2).classList.remove('hidden');
};
