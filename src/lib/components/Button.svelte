<script>
	export let text = '';
	export let variant = 'primary';
	export let href = '';
	export let target = '';

	let variants = {
		base: 'uppercase py-3 px-10 rounded-xl text-sm inline-block font-medium',
		primary: 'bg-primary text-white',
		secondary: 'bg-secondary text-primary',
		tertiary: 'bg-white text-primary dark:bg-primary dark:text-white'
	};
</script>

<a {href} {target} class="{variants.base} {variants[variant]} effect">{text}</a>

<style lang="postcss">
	.effect {
		@apply transition ease-out hover:scale-105 duration-75;
	}

	.base {
		@apply uppercase py-2 px-7 rounded-xl text-sm inline-block font-medium;
	}

</style>
