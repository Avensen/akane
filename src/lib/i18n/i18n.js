import {  init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

import es from './es.json';

addMessages('es', es);

// register('es', () => {import('./es.json')})

init({
	fallbackLocale: 'es',
	initialLocale: getLocaleFromNavigator()
});