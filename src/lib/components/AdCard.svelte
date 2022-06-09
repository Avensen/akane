<script>
	import Button from './Button.svelte';

	export let title;
	export let text;
	export let image;
	export let variant;
</script>

{#if variant == 'primary'}
	<div class="flex flex-col-reverse lg:flex-row justify-between items-center px-4 lg:px-0 space-y-6 lg:space-y-0">
		<div class="basis-1/2 text-center lg:text-right flex flex-col space-y-4 lg:pr-16">
			<h1 class="uppercase font-black text-2xl inline">{title}</h1>
			<p class="mx-8 lg:mx-0">{text}</p>
			<div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 lg:justify-end py-8 px-16 lg:px-0">
				<Button text="Ver Portafolio" variant="secondary" />
				<Button text="Ver Oferta" variant="primary" />
			</div>
		</div>
		<div class="basis-1/2 flex justify-center items-center">
			<img src={image} class="shrink-0 w-72" alt="" />
		</div>
	</div>
{/if}
<!-- Variant Line -->
{#if variant == 'secondary'}
	<div class="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0 space-y-6 lg:space-y-0">
		<div class="basis-1/2 flex justify-center items-center">
			<img src={image} class="shrink-0 w-96" alt="" />
		</div>
		<div class="basis-1/2 text-center lg:text-left flex flex-col space-y-4 lg:pl-16">
			<h1 class="uppercase font-black text-2xl">{title}</h1>
			<p class="mx-8 lg:mx-0">{text}</p>
			<div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 lg:justify-start py-8 px-16 lg:px-0">
				<Button text="Ver Portafolio" variant="secondary" />
				<Button text="Ver Oferta" variant="primary" />
			</div>
		</div>
	</div>
{/if}
