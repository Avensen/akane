<script>
	export let icon = '';
	export let title = '';

   const iconSize = 24;
</script>

<div class="flex flex-col justify-center items-center gap-4 bg-transparent text-white border-2 border-white p-8 ring-0">
   <img src="{icon}" alt="{title}" class="h-{iconSize} w-{iconSize}">
   <h1 class="uppercase">{title}</h1>
</div>
