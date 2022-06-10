<script>
	export let icon = '';
	export let title = '';

	const size = 16;
</script>

<div class="flex flex-col justify-center items-center gap-4 bg-transparent text-white border-2 border-white px-8 py-10 sm:py-12 md:py-14 lg:py-20 ring-0">
	<img src={icon} alt={title} class="h-{size} w-{size}" />
	<h1 class="uppercase">{title}</h1>
</div>
