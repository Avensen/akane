<script>
	import Button from './Button.svelte';

	export let text = '';
	export let image = '';
</script>

<div
	class="bg-zinc-50 flex flex-col gap-4 p-8 text-center shadow-secondary/70 shadow-2xl rounded-3xl dark:bg-dark dark:shadow-black dark:text-white"
>
	<img src={image.src} class="pb-0 rounded-3xl" alt={image.alt} />
	<p class="mt-4">
		{@html text}
	</p>
	<span>
		<Button text="Leer más" href="" variant="primary" />
	</span>
</div>
