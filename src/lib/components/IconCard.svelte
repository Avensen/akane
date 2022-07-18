<script>
	import Button from './Button.svelte';

	export let icon = '';
	export let title = '';
	export let descriptions = [''];
</script>

<div class="">
	<div class="card bg-zinc-50 dark:bg-dark shadow-2xl dark:text-white shadow-primary/30 dark:shadow-black">
		<div class="flex flex-col justify-center items-center gap-4">
			<span class="h-20 flex justify-end items-center">
				{@html icon}
			</span>
			<h3 class="uppercase font-bold">{title}</h3>
		</div>
		<ul class="text-center dark:text-gray-100">
			{#each descriptions as description}
				<li>{description}</li>
			{/each}
		</ul>
		<span class="pt-6">
			<Button text="¡Me Interesa!" variant="primary" />
		</span>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply flex flex-col p-10 rounded-3xl justify-between items-center space-y-2;
	}
</style>
