<script>
	import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-svelte';
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
			title: 'Complex Exponential',
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

<section id="project-carousel">
	<div class="carousel w-full py-10">
		<div id="slide1" class="carousel-item relative w-full">
			<div
				class="h-48 w-full rounded-lg bg-neutral-two shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-primary-two"
			>
				<div class=" px-20 pb-5 pt-5 font-extrabold md:text-4xl">{projects[0].title}</div>
				<div class=" px-20 pb-5 font-bold md:text-xl">{projects[0].description}</div>
			</div>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide2" class="carousel-item relative w-full">
			<div
				class="h-48 w-full rounded-lg bg-neutral-two shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-primary-two"
			>
				<div class=" px-20 pb-5 pt-5 font-extrabold md:text-4xl">{projects[1].title}</div>
				<div class=" px-20 pb-5 font-bold md:text-xl">{projects[1].description}</div>
			</div>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide3" class="btn btn-circle">❯</a>
				<!-- <ChevronLeft />
				<ChevronRight /> -->
			</div>
		</div>
		<div id="slide3" class="carousel-item relative w-full">
			<div
				class="h-48 w-full rounded-lg bg-neutral-two shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-primary-two"
			>
				<div class=" px-20 pb-5 pt-5 font-extrabold md:text-4xl">{projects[2].title}</div>
				<div class=" px-20 pb-5 font-bold md:text-xl">{projects[2].description}</div>
			</div>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide2" class="btn btn-circle">❮</a>
				<a href="#slide3" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>
</section>
