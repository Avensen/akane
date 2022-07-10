<script>
	export let text = '';
	export let variant = 'primary';
	export let href = '';
	export let target = '';

	let variants = {
		base: 'uppercase py-3 px-10 rounded-xl text-sm inline-block font-medium',
		primary: 'bg-primary text-white',
		secondary: 'bg-secondary text-primary',
		tertiary: 'bg-white text-primary'
	};
</script>

<a {href} {target} class="{variants.base} {variants[variant]} effect">{text}</a>

<!-- <button type="button" class="base uppercase inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{text}</button> -->
<style lang="postcss">
	.effect {
		@apply transition ease-out hover:scale-105 duration-150;
	}

	.base {
		@apply uppercase py-2 px-7 rounded-xl text-sm inline-block font-medium;
	}

	.btn {
		@apply inline-flex items-center
			px-8 py-2
			border border-transparent
			text-sm font-medium
			rounded-md
			shadow-sm
			text-white bg-indigo-600
			hover:bg-indigo-700
			focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
	}
</style>
