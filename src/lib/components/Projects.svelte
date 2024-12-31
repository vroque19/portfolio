<script>
	import Carousel from './Carousel.svelte';
	import { ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

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

<section id="projects" class="py-20">
	<div class="p-4 pt-8 text-4xl font-extrabold md:text-6xl">My Projects</div>
	<div class="w-10/12 p-4 text-2xl text-opacity-85 md:text-4xl">
		I love learning new things and creating exciting projects in the process. You can check out some
		of my projects below.
	</div>
	<Carousel />
</section>
