import {  init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

import es from './es.json';
import en from './en.json';

addMessages('es', es);
addMessages('en', en);

// register('es', () => {import('./es.json')})

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});