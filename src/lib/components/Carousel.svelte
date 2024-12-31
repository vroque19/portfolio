<script>
	import { ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	// Projects data
	const projects = [
		{
			id: 1,
			title: 'Portfolio Website',
			description: 'A beautiful web application built with Svelte and TailwindCSS',
			image: 'cute-corgi.png',
			link: 'https://vanessa.codes'
		},
		{
			id: 2,
			title: 'Frequency Visualizer',
			description: 'An e-commerce platform with modern design',
			image: 'visualizer.gif',
			link: 'https://project2.com'
		},
		{
			id: 3,
			title: 'Project Three',
			description: 'A responsive dashboard application',
			image: 'cute-corgi.png',
			link: 'https://project3.com'
		}
	];
	let items = Array.from({ length: 5 });
	const a = { foo: 3 };
</script>

<section id="project-carousel bg-blue-200">
	<h1 class="text-center text-5xl">Projects</h1>
	<div class="carousel w-full py-2">
		{#each projects as project}
			<div id={project.title} class="carousel-item relative w-full">
				<div
					class=" border- h-48 w-full rounded-lg bg-neutral-two shadow-md transition-shadow duration-300 hover:shadow-lg"
				>
					<h1 class="text-pretty text-2xl font-bold">{project.title}</h1>
					<p class="text-secondary-green mb-4">{project.description}</p>
				</div>
				<div
					class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
				>
					<a href="#slide{project.id}" class="btn btn-circle">❮</a>
					<a href="#slide{project.id + 1}" class="btn btn-circle">❯</a>
				</div>
			</div>
		{/each}
	</div>
</section>
