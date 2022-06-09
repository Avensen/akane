<script>
	let images = [
		{
			src: 'https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2',
			alt: ''
		},
		{
			src: 'https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB',
			alt: ''
		},
		{
			src: 'https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6',
			alt: ''
		}
	];
</script>

<div>
	<ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory">
		{#each images as { src, alt }}
			<li class="shrink-0 snap-center">
				<img {src} {alt} class="rounded-md" />
			</li>
		{/each}
	</ul>
</div>
