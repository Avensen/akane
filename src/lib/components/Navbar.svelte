<script>
	import SearchInput from './SearchInput.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { t, locale, locales, format } from 'svelte-i18n';

	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;

	const navigation = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Tu Cuenta', href: '/account' },
		{ name: 'Servicios', href: '/services' },
		{ name: 'Cotización', href: '/pricing' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Más', href: '/more' }
	];

	let menuOpen = false;
	let y = 0;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<svelte:window bind:scrollY={y} />

<nav class="bg-zinc-50/90 dark:bg-dark backdrop-blur-md {y > 60 && 'shadow-sm'}">
	<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex px-2 lg:px-0">
				<div class="flex-shrink-0 flex items-center mr-8">
					<img class="block h-8 w-auto" src="logo.svg" alt="Akane" on:click="{() => {localStorage.theme = 'dark'}}"/>
				</div>
				<div class="hidden lg:ml-6 lg:flex lg:space-x-8">
					{#each navigation as { name, href }}
						<a
							{href}
							class="{pathname === href
								? 'text-primary border-primary/70 font-semibold'
								: 'text-gray-500 font-normal border-transparent'} hover:border-primary/70 inline-flex items-center pt-1 border-b-[3px] text-sm transition ease-in-out duration-150"
						>
							{name}
						</a>
					{/each}
				</div>
			</div>
			<div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
				<SearchInput />
			</div>
			<div class="flex items-center lg:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					on:click={toggleMenu}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary/60"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!--
				 Icon when menu is closed.
 
				 Heroicon name: outline/menu
 
				 Menu open: "hidden", Menu closed: "block"
			  -->
					<svg
						class="{menuOpen ? 'hidden' : 'block'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<!--
				 Icon when menu is open.
 
				 Heroicon name: outline/x
 
				 Menu open: "block", Menu closed: "hidden"
			  -->
					<svg
						class="{menuOpen ? 'block' : 'hidden'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if menuOpen}
		<div class="{menuOpen ? 'block' : 'hidden'} lg:hidden" id="mobile-menu" transition:slide={{ delay: 50, duration: 330, easing: quintOut }}>
			<div class="pt-2 pb-3 space-y-1">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
				{#each navigation as nav}
					<a
						href={nav.href}
						class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-secondary hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-normal"
					>
						{nav.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
