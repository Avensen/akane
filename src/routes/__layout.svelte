<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import { init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';
	import { onMount } from 'svelte';

	import es from '$lib/locales/es.json';
	import en from '$lib/locales/en.json';

	let theme;

	addMessages('es', es);
	addMessages('en', en);

	init({
		fallbackLocale: 'es',
		initialLocale: getLocaleFromNavigator()
	});

	onMount(() => {
		localStorage.theme = '';
		theme = localStorage.theme;
	});
</script>

<div id="main-container-root-layuot" class={theme}>
	<div class="fixed z-40 top-0 inset-x-0">
		<Navbar />
	</div>
	<slot />
</div>
