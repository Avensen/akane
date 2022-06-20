<script>
	import Button from '$lib/components/Button.svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleSlide() {}
</script>

<div class="carousel w-full example mx-auto relative overflow-hidden">
	<div id="item1" class="carousel-item w-full flex justify-center">
		<div class="flex flex-col justify-center items-center pb-8 lg:flex-row-reverse gap-6 lg:gap-32">
			<div class="flex flex-col gap-6">
				<h1 class="text-center text-3xl">
					<b class="text-primary block text-4xl">Ya tienes una idea</b> <span class="block">de negocio pero, ¿sabes</span> cómo ponerla en marcha?
				</h1>
				<span class="flex justify-center">
					<Button text="Reservar cita" />
				</span>
				<div class="flex justify-center w-full py-2 gap-0">
					<a href="#item1" class="btn btn-xs"
						><span class="h-3 w-3 bg-primary rounded-full hover:h-4 hover:w-4 transition-all ease-in-out duration-150" /></a
					>
					<a href="#item2" class="btn btn-xs"
						><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a
					>
					<a href="#item3" class="btn btn-xs"
						><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a
					>
					<!-- <a href="#item4" class="btn btn-xs"><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a>
					<a href="#item5" class="btn btn-xs"><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a> -->
				</div>
			</div>
			<img src="banner_hero.png" class="w-[450px] " alt="carousel item" />
			<!-- <img src="banner_hero.png" class="w-[450px] hidden lg:inline-block lg:absolute z-50 -bottom-20 left-[15%]" alt="carousel item" /> -->
		</div>
	</div>
	<div id="item2" class="carousel-item w-full flex justify-center">
		<div class="flex flex-col justify-center items-center pb-8 lg:flex-row-reverse gap-6 lg:gap-32">
			<div class="flex flex-col gap-6">
				<h1 class="text-center text-3xl">
					<b class="text-primary block text-4xl">Ya tienes una idea</b> <span class="block">de negocio pero, ¿sabes</span> cómo ponerla en marcha?
				</h1>
				<span class="flex justify-center">
					<Button text="Reservar cita" />
				</span>
				<div class="flex justify-center w-full py-2 gap-0">
					<a href="#item1" class="btn btn-xs"
						><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a
					>
					<a href="#item2" class="btn btn-xs"
						><span class="h-3 w-3 bg-primary rounded-full hover:h-4 hover:w-4 transition-all ease-in-out duration-150" /></a
					>
					<a href="#item3" class="btn btn-xs"
						><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a
					>
				</div>
			</div>
			<img src="banner_hero.png" class="w-[450px] " alt="carousel item" />
			<!-- <img src="banner_hero.png" class="w-[450px] hidden lg:inline-block lg:absolute z-50 -bottom-20 left-[15%]" alt="carousel item" /> -->
		</div>
	</div>
	<div id="item3" class="carousel-item w-full flex justify-center">
		<div class="flex flex-col justify-center items-center pb-8 lg:flex-row-reverse gap-6 lg:gap-32">
			<div class="flex flex-col gap-6">
				<h1 class="text-center text-3xl">
					<b class="text-primary block text-4xl">Ya tienes una idea</b> <span class="block">de negocio pero, ¿sabes</span> cómo ponerla en marcha?
				</h1>
				<span class="flex justify-center">
					<Button text="Reservar cita" />
				</span>
				<div class="flex justify-center w-full py-2 gap-0">
					<a href="#item1" class="btn btn-xs"
						><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a
					>
					<a href="#item2" class="btn btn-xs"
						><span class="h-2 w-2 bg-secondary rounded-full hover:h-3 hover:w-3 transition-all ease-in-out duration-150" /></a
					>
					<a href="#item3" class="btn btn-xs"
						><span class="h-3 w-3 bg-primary rounded-full hover:h-4 hover:w-4 transition-all ease-in-out duration-150" /></a
					>
				</div>
			</div>
			<img src="banner_hero.png" class="w-[450px] " alt="carousel item" />
			<!-- <img src="banner_hero.png" class="w-[450px] hidden lg:inline-block lg:absolute z-50 -bottom-20 left-[15%]" alt="carousel item" /> -->
		</div>
	</div>
</div>

<style lang="postcss">
	.example::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.example {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
