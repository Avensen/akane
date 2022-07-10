<script>
	let images = [
		{
			src: '/promo/promo-slide-1.png',
			alt: ''
		},
		{
			src: '/promo/promo-slide-2.png',
			alt: ''
		},
		{
			src: '/promo/promo-slide-3.png',
			alt: ''
		}
	];
</script>

<div class="">
	<ul class="flex overflow-x-auto gap-6 snap-x snap-center snap-mandatory example">
		{#each images as { src, alt }}
			<li class="shrink-0 snap-center flex">
				<span class="flex justify-center items-center">
					<img {src} {alt} class="rounded-md w-96 " />
				</span>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.example::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.example {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
