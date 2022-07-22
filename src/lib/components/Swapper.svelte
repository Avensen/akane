<script>
	import Button from './Button.svelte';

	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import { cubicOut, linear, quintIn, quintOut, sineOut } from 'svelte/easing';

	let slidesCount = 3;
	let currentSlide = 0;

	onMount(() => {
		setInterval(() => {
			currentSlide = (currentSlide + 1) % slidesCount;
		}, 4000);
	});
</script>

<div class="carousel text-white dark:text-dark">
	<section class="" style="background-image: url(/bg-section-1.png); background-size: cover;">
		<div class="bg-gradient-to-t from-primary/90 to-secondary/90 dark:from-zinc-100/90 dark:to-zinc-50/90">
			<div class="max-w-7xl mx-auto lg:relative">
				{#if currentSlide === 0}
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16" in:fade={{ delay: 10, duration: 3000, easing: cubicOut}}>
						<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center px-8 py-14 space-y-1">
							<h1 class="text-2xl font-normal">¡Hola, Stephanie Anormal!</h1>
							<h1 class="text-2xl font-extralight">Ya tienes una idea de negocio pero,</h1>
							<p class="text-2xl font-bold">¿sabes cómo ponerla en marcha?</p>
							<span class="pt-4">
								<Button text="Reservar cita" href="" variant="tertiary" />
							</span>
						</div>
						<div class="flex justify-center pt-6">
							<img src="/image-section-1.png" alt="" class="bottom-0 w-[500px]" />
						</div>
					</div>
				{/if}
				{#if currentSlide === 1}
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16" in:fade={{ delay: 10, duration: 3000, easing: cubicOut }}>
						<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center px-8 py-14 space-y-1">
							<h1 class="text-2xl font-normal">¡Hola, Stephanie Estupida!</h1>
							<h1 class="text-2xl font-extralight">Ya tienes una idea de negocio pero,</h1>
							<p class="text-2xl font-bold">¿sabes cómo ponerla en marcha?</p>
							<span class="pt-4">
								<Button text="Reservar cita" href="" variant="tertiary" />
							</span>
						</div>
						<div class="flex justify-center pt-6">
							<img src="/image-section-1.png" alt="" class="bottom-0 w-[500px]" />
						</div>
					</div>
				{/if}
				{#if currentSlide === 2}
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-16" in:fade={{ delay: 10, duration: 3000, easing: cubicOut }}> 
						<div class="text-center lg:text-left lg:items-start flex flex-col justify-center items-center px-8 py-14 space-y-1">
							<h1 class="text-2xl font-normal">¡Hola, Stephanie Monga!</h1>
							<h1 class="text-2xl font-extralight">Ya tienes una idea de negocio pero,</h1>
							<p class="text-2xl font-bold">¿sabes cómo ponerla en marcha?</p>
							<span class="pt-4">
								<Button text="Reservar cita" href="" variant="tertiary" />
							</span>
						</div>
						<div class="flex justify-center pt-6">
							<img src="/image-section-1.png" alt="" class="bottom-0 w-[500px]" />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>
</div>
