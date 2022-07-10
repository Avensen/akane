<script>
	import { flip } from 'svelte/animate';

	$: images = [
		{
			id: 1,
			src: 'banner_hero.png',
			alt: '1',
			text: 'hjhjhklhlkhj'
		},
		{
			id: 2,
			src: 'banner_hero.png',
			alt: '2',
			text: 'qwertyuiop'
		},
		{
			id: 3,
			src: 'banner_hero.png',
			alt: '3',
			text: 'zxcvbnm,lkjhgfdsa'
		}
	];

	function rotateLeft(e) {
		const transitioningImage = images[images.length - 1];
		document.getElementById(transitioningImage.id).style.opacity = 0;
		images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
		setTimeout(() => {
			document.getElementById(transitioningImage.id).style.opacity = 1;
		}, 350);
	}
	function rotateRight(e) {
		const transitioningImage = images[0];
		document.getElementById(transitioningImage.id).style.opacity = 0;
		images = [...images.slice(1, images.length), images[0]];
		setTimeout(() => {
			document.getElementById(transitioningImage.id).style.opacity = 1;
		}, 350);
	}
</script>

<div id="carousel-container" class="w-full overflow-x-hidden flex flex-col gap-4">
	<div id="carousel-images" class="flex justify-center items-center flex-nowrap">
		{#each images as { id, src, alt, text } (id)}
			<div animate:flip={{ duration: 350 }} class="flex justify-center items-center w-full">
				<img {id} {src} {alt} />
			</div>
		{/each}
	</div>
	<div class="flex gap-4">
		<button id="left" on:click={rotateLeft} class="bg-slate-700 p-4 basis-1/2">left</button>
		<button id="right" on:click={rotateRight} class="bg-slate-700 p-4 basis-1/2">right</button>
	</div>
</div>