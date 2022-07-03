<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://picsum.photos/300/200?random=1',
		'https://picsum.photos/300/200?random=2',
		'https://picsum.photos/300/200?random=3'
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style>
	img, button {
		position: absolute;
	}
</style>

{#each [carouselPhotos[index]] as src (index)}
	<img transition:fade {src} alt="" />	
{/each}

<button on:click={next}>Next!</button>