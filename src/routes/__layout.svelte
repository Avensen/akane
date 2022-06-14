<!-- src/_layout.svelte -->
<script context="module">
	import { waitLocale } from 'svelte-i18n';

	export async function preload() {
		// awaits for the loading of the 'en-US' and 'en' dictionaries
		return waitLocale();
	}
</script>

<script>
	import '../app.css';
	// import Navbar from '$lib/components/Navbar.svelte';

	import { init, getLocaleFromNavigator, addMessages, isLoading } from 'svelte-i18n';

	import es from '$lib/i18n/es.json';

	addMessages('es', es);

	// register('es', () => {import('./es.json')})

	init({
		fallbackLocale: 'es',
		initialLocale: getLocaleFromNavigator()
	});
</script>

<!-- 
<div class="relative overflow-hidden font-poppins bg-transparent">
	<div
		class="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-300 to-orange-500 -right-[60px] -top-[230px]"
	/> -->
<!-- <div
		class="absolute h-[230px] w-[230px] rounded-full bg-gradient-to-br from-orange-300 to-orange-500 left-[30px] top-[160px] z-10"
	/> -->
<!-- <div class="absolute h-[90px] w-[90px] rounded-full bg-gradient-to-t from-orange-500 to-orange-300 left-20 top-[220px] z-30 shadow-orange-500 shadow-lg border-none">
	</div>
</div> -->
{#if $isLoading}
	<div>Loading</div>
{:else}
	<div class="font-light">
		<slot />
	</div>
{/if}
