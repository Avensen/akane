<script>
	import Button from './Button.svelte';

	export let icon = '';
	export let title = '';
	export let descriptions = [''];
</script>

<div class="card">
	<div class="text-center">
		<i class="{icon} text-primary text-7xl" />
		<h3 class="uppercase font-bold">{title}</h3>
	</div>
	<ul class="text-center">
		{#each descriptions as description}
			<li>{description}</li>
		{/each}
	</ul>
	<span class="pt-6">
		<Button text="¡Me Interesa!" variant="primary" />
	</span>
</div>

<style lang="postcss">
	.card {
		@apply flex flex-col p-10 rounded-3xl bg-zinc-50 justify-between items-center shadow-xl shadow-orange-200 space-y-2;
	}
</style>
