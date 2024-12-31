<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Blog from "$lib/components/Blog.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Carousel from "$lib/components/Carousel.svelte"

	// State to control mobile menu
	let isMobileMenuOpen: boolean = $state(false);
	
</script>

<main class="w-full min-h-screen bg-neutral-one text-primary-three">
	<Nav bind:isMobileMenuOpen />

	<!-- Main content sections -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<Hero />
		<Carousel/>
		<Projects />
		<Blog />
		<Contact />
	</div>

	<Footer />
</main>
