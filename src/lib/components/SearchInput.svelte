<script>
</script>

<div class="max-w-lg w-full lg:max-w-xs">
	<label for="search" class="sr-only">Search</label>
	<div class="relative">
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			<!-- Heroicon name: solid/search -->
			<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<input id="search" name="search" spellcheck="false" class="search-input bg-zinc-50 dark:bg-dark dark:text-white border-gray-300 dark:border-gray-500" placeholder="Buscar" type="search" />
	</div>
</div>

<style lang="postcss">
	.search-input {
		@apply block w-full pl-10 pr-3 py-2
		border 
		rounded-md
		leading-5
		placeholder-gray-500
		focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary/60 focus:border-primary/60
		sm:text-sm;
	}
</style>
