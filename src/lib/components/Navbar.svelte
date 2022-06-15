<script>
	import SearchInput from './SearchInput.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { t, locale, locales, format } from 'svelte-i18n';

	const navigation = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Tu Cuenta', href: '/' },
		{ name: 'Servicios', href: '/' },
		{ name: 'Cotización', href: '/' },
		{ name: 'Blog', href: '/' },
		{ name: 'Más', href: '/' }
	];

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<nav class="bg-zinc-50/90 backdrop-blur-md uppercase">
	<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex px-2 lg:px-0">
				<div class="flex-shrink-0 flex items-center">
					<img class="block lg:hidden h-8 w-auto" src="logo.svg" alt="Akane" />
					<img class="hidden lg:block h-8 w-auto" src="logo.svg" alt="Akane" />
				</div>
				<div class="hidden lg:ml-6 lg:flex lg:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					{#each navigation as { name, href }}
						<a
							{href}
							class="border-transparent text-gray-500 hover:border-secondary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-normal transition ease-in-out duration-150"
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
