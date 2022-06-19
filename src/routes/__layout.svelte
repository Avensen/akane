<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import { init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

	import es from '$lib/locales/es.json';
	import en from '$lib/locales/en.json';

	addMessages('es', es);
	addMessages('en', en);

	init({
		fallbackLocale: 'es',
		initialLocale: getLocaleFromNavigator()
	});
</script>

<div class="fixed z-40 top-0 inset-x-0">
	<Navbar />
</div>
<slot />
