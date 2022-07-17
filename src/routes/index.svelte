<script>
	import Slider from '$lib/components/Slider.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import AdCard from '$lib/components/AdCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Tile from '$lib/components/Tile.svelte';
	import Swapper from '$lib/components/Swapper.svelte';

	import { iconCardsInfo } from '$lib/pseudo/info';
	import { adCardsInfo } from '$lib/pseudo/ad';
	import { blogCardsInfo } from '$lib/pseudo/blog';
	import { tilesInfo } from '$lib/pseudo/tiles';

	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Akane Digital</title>
</svelte:head>

<main class="relative overflow-x-hidden">
	<!-- Hero -->
	<section class="pt-16 pb-32 bg-gradient-to-b from-zinc-50 via-zinc-50 to-secondary/50">
		<div class="max-w-8xl pt-14 mx-auto">
			<div class="px-8">
				<h3 class="text-center mb-8 text-xl">
					{@html $t('home.hero.title')}
				</h3>
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

	<Swapper/>

	<!-- Section 1 -->
	<!-- <section class="" style="background-image: url(/bg-section-1.jpg); background-size: cover;">
		<div class="bg-gradient-to-t from-primary/50 to-secondary/50">
			<div class="max-w-7xl mx-auto lg:relative">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16">
					<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center text-white px-8 py-14 space-y-1">
						<h1 class="text-2xl font-normal">¡Hola, Stephanie Anormal!</h1>
						<h1 class="text-2xl font-extralight">Ya tienes una idea de negocio pero,</h1>
						<p class="text-2xl font-bold">¿sabes cómo ponerla en marcha?</p>
						<span class="pt-4">
							<Button text="Reservar cita" href="" variant="tertiary" />
						</span>
					</div>
					<div class="flex justify-center">
						<img src="/image-section-1.png" alt="" class="lg:absolute bottom-0 w-[500px]" />
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!-- /Section 1 -->

	<!-- Section 2 -->
	<section class="bg-gradient-to-b from-zinc-50 via-zinc-50 to-secondary/50 pt-20 pb-32">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-1 gap-8">
				{#each adCardsInfo as item, i}
					<AdCard {...item} variant={i % 2 == 0 ? 'primary' : 'secondary'} />
				{/each}
			</div>
		</div>
	</section>
	<!-- /Section 2 -->

	<!-- Section 3 -->
	<section class="" style="background-image: url(bg-section-2.jpg); background-size: cover;">
		<div class="bg-gradient-to-t from-primary/50 to-secondary/50">
			<div class="max-w-7xl mx-auto lg:relative">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16">
					<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center text-white px-8 py-14 space-y-1">
						<h1 class="text-2xl font-extralight">¿Eres influencer?</h1>
						<h1 class="text-2xl font-extralight">¡Puedes <b>ganar una web gratis!</b></h1>
						<p class="text-md font-extralight">Puedes ganar una web profesional, diseñada por un equipo experimentado <b>¡y 100% gratis!</b></p>
						<span class="pt-4">
							<Button text="Me interesa" href="" variant="tertiary" />
						</span>
					</div>
					<div class="flex justify-center">
						<img src="/influencer.png" alt="" class="lg:absolute bottom-0 w-[500px]" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Section 3 -->

	<!-- Section 4 -->
	<section class="">
		<div class="max-w-7xl mx-auto py-24">
			<h3 class="text-2xl text-center">
				<b class="font font-extrabold">Un blog</b> pensado para emprendedores
			</h3>
			<div class="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-16 pt-12 px-8">
				{#each blogCardsInfo as item}
					<BlogCard text={item.text} image={item.image} />
				{/each}
			</div>
		</div>
	</section>
	<!-- /Section 4 -->

	<!-- Section 5 -->
	<section class=" text-white" style:background="url('/client-support.jpg')">
		<div class="mx-auto bg-gradient-to-t from-black/80 to-zinc-600/50">
			<div class="max-w-4xl mx-auto flex flex-col text-center items-center justify-center space-y-4 p-12">
				<span class="text-2xl font-bold">
					<h1>Tu cliente</h1>
					<h1>es nuestra prioridad</h1>
				</span>
				<p>
					<b class="font-semibold">La Atención al Cliente es fundamental</b>, así que nos ocupamos de que tengas todas las herramientas para mantenera
					los tuyos felices. <b class="font-semibold">¿Sabes cuáles son los servicios que incluimos?</b>
				</p>
				<Button text="Ver Servicios" variant="primary" />
			</div>
		</div>
	</section>
	<!-- /Section 5 -->

	<!-- Section 6 -->
	<section class="bg-gradient-to-b from-zinc-50 via-zinc-50 to-secondary/50">
		<div class="max-w-7xl mx-auto py-20 flex flex-col space-y-16">
			<div class="text-center px-16">
				<h1 class="text-2xl"><b>Tus redes sociales</b> son tu mejor tarjeta de presentación</h1>
				<p>Atrae a tus clientes y mantenlos involucrados</p>
			</div>
			<div class="flex justify-center">
				<Slider />
			</div>
		</div>
	</section>
	<!-- /Section 6 -->

	<!-- Section 7 -->
	<section class="" style="background-image: url(/bg-section-7.jpg); background-size: cover;">
		<div class="bg-gradient-to-t from-primary/50 to-secondary/50">
			<div class="max-w-7xl mx-auto lg:relative">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16">
					<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center text-white px-8 py-14 space-y-1">
						<h1 class="text-2xl font-normal">¡Hola, Stephanie Anormal!</h1>
						<h1 class="text-2xl font-extralight">Ya tienes una idea de negocio pero,</h1>
						<p class="text-2xl font-bold">¿sabes cómo ponerla en marcha?</p>
						<span class="pt-4">
							<Button text="Reservar cita" href="" variant="tertiary" />
						</span>
					</div>
					<div class="flex justify-center">
						<img src="/image-section-7.png" alt="" class="lg:absolute bottom-0 w-[500px]" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Section 7 -->

	<!-- Section 8 -->
	<section>
		<div class="">
			<h1 class="text-center text-xl pt-16 pb-4"><b class="font-bold">Akane Digital</b> te asegura...</h1>
			<div style="background-image: url('/bg-footer.jpg'); background-size: cover;">
				<div class="grid grid-cols-2 lg:grid-cols-5 bg-gradient-to-t from-black/90 to-black/10">
					{#each tilesInfo as item}
						<Tile {...item} />
					{/each}
				</div>
			</div>
		</div>
	</section>
	<!-- /Section 8 -->
</main>
