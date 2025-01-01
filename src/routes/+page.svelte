<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Saos from 'saos';
</script>

<!-- Main content sections -->
<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Hero />
	<!-- <Carousel /> -->
	<Saos
		once={true}
		animation={'slide-top 1.2s cubic-bezier(.25,.46,.45,.94) both'}
		animation_out={'slide-out 1s cubic-bezier(.25,.46,.45,.94) both'}
		top={200}
		bottom={50}
	>
		<Projects />
	</Saos>
	<!-- <Blog /> -->
	<Contact />
</div>

<style>
	@keyframes -global-slide-top {
		0% {
			transform: translateY(200px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	@keyframes -global-slide-out {
		0% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(200px);
		}
	}
</style>
