import { init, getLocaleFromNavigator, register } from 'svelte-i18n';

register('es', () => {
	import('./es.json');
});
register('en', () => {
	import('./en.json');
});

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
