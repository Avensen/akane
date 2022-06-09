<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import AdCard from '$lib/components/AdCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Tile from '$lib/components/Tile.svelte';

	import { iconCardsInfo } from '$lib/pseudo/info';
	import { adCardsInfo } from '$lib/pseudo/ad';
	import { blogCardsInfo } from '$lib/pseudo/blog';
	import { tilesInfo } from '$lib/pseudo/tiles';
</script>

<svelte:head>
	<title>Akane Digital</title>
</svelte:head>

<main class="relative overflow-x-hidden">
	<div class="fixed z-40 top-0 inset-x-0">
		<Navbar />
	</div>

	<!-- Hero -->
	<section class="py-16 bg-gradient-to-b from-zinc-50 via-zinc-50 to-secondary/50">
		<div class="max-w-8xl pt-14 mx-auto">
			<div class="px-8">
				<h3 class="uppercase text-center mb-8"><b class="font-bold">Te ayudamos</b> con tu negocio</h3>
				<ul class="grid grid-cols-1 gap-16 mx-2 sm:mx-24 lg:grid-cols-3 place-content-center">
					{#each iconCardsInfo as item}
						<li class="grid">
							<IconCard {...item} />
						</li>
					{/each}
				</ul>
			</div>
			<div />
		</div>
	</section>
	<!-- Hero -->

	<!-- Section 1 -->
	<!-- <section class="bg-zinc-50">
		<div class="mx-auto max-w-7xl py-28 px-10">
			<div class="relative"> -->
	<!-- <div
					class="absolute h-[230px] w-[230px] rounded-full bg-gradient-to-br from-[#FFBD6E] to-[#F28B0E] -left-[50px] top-[50px]"
				/> -->
	<!-- <ul class="flex justify-between space-x-12">
					{#each iconCardsInfo as item}
						<li class="basis-1/3">
							<IconCard {...item} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section> -->

	<!-- Section 1 -->

	<!-- Section 2 -->
	<section class="bg-gradient-to-b from-zinc-50 via-zinc-50 to-secondary/50 py-12">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-1 gap-8">
				{#each adCardsInfo as item, i}
					<AdCard {...item} variant={i % 2 == 0 ? 'primary' : 'secondary'} />
				{/each}
			</div>
		</div>
	</section>
	<!-- Section 2 -->

	<!-- Section 3 -->
	<section class="bg-gradient-to-t from-primary/80 to-secondary/80">
		<div class="max-w-7xl mx-auto lg:relative">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16">
				<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center text-white px-8 py-14 space-y-1">
					<h1 class="uppercase text-3xl font-extralight">¿Eres influencer?</h1>
					<h1 class="uppercase text-3xl font-extralight">¡Puedes <b>ganar una web gratis!</b></h1>
					<p class="text-xl font-extralight">Puedes ganar una web profesional, diseñada por un equipo experimentado <b>¡y 100% gratis!</b></p>
					<span class="pt-4">
						<Button text="Me interesa" href="" variant="tertiary" />
					</span>
				</div>
				<div class="flex justify-end">
					<img src="influencer.png" alt="" class="lg:absolute bottom-0 w-96" />
				</div>
			</div>
		</div>
	</section>
	<!-- Section 3 -->

	<!-- Section 4 -->
	<section class="">
		<div class="max-w-7xl mx-auto py-24">
			<h3 class="uppercase text-2xl text-center">
				<b class="font font-extrabold">Un blog</b> pensado para emprendedores
			</h3>
			<div class="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-16 pt-12 px-8">
				{#each blogCardsInfo as item}
					<BlogCard text={item.text} image={item.image} />
				{/each}
			</div>
		</div>
	</section>
	<!-- Section 4 -->

	<!-- Section 5 -->
	<section class="bg-gradient-to-t from-black/80 to-zinc-600/50 text-white" style:background="url('client-support.jpg')">
		<div class="max-w-4xl mx-auto">
			<div class="flex flex-col text-center items-center justify-center space-y-4 p-12">
				<span class="text-2xl font-semibold uppercase">
					<h1>Tu cliente</h1>
					<h1>Es nuestra prioridad</h1>
				</span>
				<p>
					<b class="font-semibold">La Atención al Cliente es fundamental</b>, así que nos ocupamos de que tengas todas las herramientas para mantenera
					los tuyos felices. <b class="font-semibold">¿Sabes cuáles son los servicios que incluimos?</b>
				</p>
				<Button text="Ver Servicios" variant="primary" />
			</div>
		</div>
	</section>
	<!-- Section 5 -->

	<!-- Section 6 -->
	<section class="bg-gradient-to-b from-zinc-50 via-zinc-50 to-secondary/50">
		<div class="max-w-7xl mx-auto py-20 flex flex-col space-y-16">
			<div class="text-center px-16">
				<h1 class="uppercase text-2xl"><b>Tus redes sociales</b> son tu mejor tarjeta de presentación</h1>
				<p>Atrae a tus clientes y mantenlos involucrados</p>
			</div>
			<div class="flex justify-center px-8">
				<Carousel />
			</div>
		</div>
	</section>
	<!-- Section 6 -->

	<!-- Section 7 -->
	<!-- Section 7 -->

	<!-- Section 8 -->
	<section>
		<div class="">
			<h1 class="uppercase text-center text-xl pt-16 pb-4"><b class="font-bold">Akane Digital</b> te asegura...</h1>
			<div class="grid grid-cols-2 lg:grid-cols-5 bg-black">
				{#each tilesInfo as item}
					<Tile {...item} />
				{/each}
			</div>
		</div>
	</section>
	<!-- Section 8 -->

	<!-- <footer class="bg-gradient-to-t from-primary to-secondary py-32" style="background-image: url('footer_bg.png'); background-size: cover; opacity: 90%;">
		<div class="max-w-7xl mx-auto text-center text-white">
			<h1 class="uppercase font-extrabold text-3xl pb-4">
				Tu cliente <br /> es nuestra prioridad
			</h1>
			<p class="pt-2">
				¿Tienes una idea de negocio pero <b class="font-bold">no sabes qué necesitas <br /> para salir al mercado</b> de una vez?
			</p>
			<div class="pt-8 flex justify-center space-x-12">
				<button class="uppercase rounded-lg py-1 px-8 bg-white text-primary transition ease-in-out duration-200 hover:scale-110"> ¡Me interesa! </button>
				<button class="uppercase rounded-lg py-1 px-8 bg-white text-primary"> Saber más </button>
			</div>
		</div>
	</footer> -->
</main>
