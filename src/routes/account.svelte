<script>
	import { page } from '$app/stores';

	// import { searchParams } from '$lib/hooks/pageParams'

	let slug = $page.params.slug;
	let obj = $page.url.searchParams;
	let query = $page.url.searchParams
		.toString()
		.split('&')
		.map((i) => i.split('='));

	let id = $page.url.searchParams.get('id');
	let name = $page.url.searchParams.get('name');

	console.log($page.url.searchParams);
	// some text
	async function click() {
		let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		let data = await res.json();
		console.log(data);
	}
</script>

<main class="bg-slate-800 flex flex-col justify-start items-center gap-4 pt-24">
	<div class="text-white grid place-items-center">
		{slug}
	</div>
	<div class="text-sky-200 flex justify-center items-center">
		{query}
	</div>
	<div class="text-sky-200 flex justify-center items-center">
		Para que Samuelili vea: {id}
	</div>
	<div class="text-sky-200 flex justify-center items-center">
		{obj.get('id')}
	</div>
	<div class="text-sky-200 flex justify-center items-center">
		{name}
	</div>
	<button
		on:click={click}
		class="px-6 py-2 border-2 border-pink-400 text-pink-400 my-14 hover:bg-pink-400 hover:text-slate-900 transition ease-in-out duration-100"
	>
		fetch
	</button>
</main>
<section class="bg-pink-400 flex justify-center">
	<button
		on:click={click}
		class="px-6 py-2 border-2 border-slate-900 my-14 hover:text-pink-400 hover:bg-slate-900 transition ease-in-out duration-100"
	>
		fetch
	</button>
</section>
