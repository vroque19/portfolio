<script>
	import '../app.css';
	let { children } = $props();
</script>
<div class="flex flex-col bg-neutral-cream">
	<div class="px-4 lg:px-6 h-14 flex items-center justify-items-center">
		<div class="w-full ">
			<a class="text-xl text-bold hover:text-secondary-mauve" href="/">VR</a>
		</div>
		<h1 class="w-full text-center">Vanessa Isabel Roque</h1>
		<nav class="w-full flex gap-6 sm:gap-6  justify-end">
			<a class="text-sm text-bold hover:text-secondary-mauve" href="/projects"> Projects</a>
			<a class="text-sm text-bold hover:text-secondary-mauve" href="/contact"> Contact</a>
		</nav>
	</div>
</div>
{@render children()}
