<script>
	import Button from './Button.svelte';

	export let text = '';
	export let image = '';
</script>

<div
	class="bg-zinc-50 flex flex-col gap-4 p-8 text-center shadow-secondary/70 shadow-2xl rounded-3xl transition ease-in-out duration-200 hover:scale-110"
>
	<img src={image} class="pb-4" alt="" />
	<p>
		{@html text}
	</p>
	<span>
		<Button text="Leer más" href="" variant="primary" />
	</span>
</div>
