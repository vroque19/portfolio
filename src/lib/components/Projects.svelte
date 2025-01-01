<script>
	import Carousel from './Carousel.svelte';
	import Saos from 'saos';
	import { ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import Test from './CarouselTest.svelte';

	// Projects data
	const projects = [
		{
			title: 'Portfolio Website',
			description: 'A beautiful web application built with Svelte and TailwindCSS',
			image: 'favicon.png',
			link: 'https://vanessa.codes'
		},
		{
			title: 'Frequency Visualizer',
			description: 'An e-commerce platform with modern design',
			image: 'visualizer.gif',
			link: 'https://project2.com'
		},
		{
			title: 'Project Three',
			description: 'A responsive dashboard application',
			image: 'cute-corgi',
			link: 'https://project3.com'
		}
	];
</script>

<!-- <div><p>animation: from-left</p></div> -->
<section id="projects" class="py-20">
	<div class="p-4 pt-8 text-4xl font-extrabold md:text-6xl">My Projects</div>
	<div class="w-10/12 p-4 text-2xl text-opacity-85 md:text-4xl">
		I'm passionate about learning and creating. Take a look at some of the projects I've been
		working on below.
	</div>
	<!-- <Carousel /> -->
	<Test />
</section>
