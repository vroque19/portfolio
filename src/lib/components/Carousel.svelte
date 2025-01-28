<script>
	import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	// Projects data
	const projects = [
		{
			id: 1,
			title: 'Portfolio Website',
			description: 'My personal website built with Svelte and TailwindCSS',
			image: 'cute-corgi.png',
			link: 'https://vanessa.codes'
		},
		{
			id: 2,
			title: 'Complex Exponential Simulation',
			description: 'A simple visualizer tool to simulate rotating phasor signals',
			image: 'visualizer.gif',
			link: 'https://waves-from-rotating-vector.vercel.app'
		},
		{
			id: 3,
			title: 'Gen-Z translation tool',
			description: 'Real-time audio input/ output that will translate slang into proper english',
			image: 'cute-corgi.png',
			link: ''
		}
	];
	let items = Array.from({ length: 5 });
	const a = { foo: 3 };
	let isClicked = false;
	let currentSlide = 0;

	function toggleColor() {
		isClicked = !isClicked;
	}
	function nextSlide() {
		if (currentSlide < projects.length - 1) {
			console.log(projects[currentSlide].title);

			currentSlide = currentSlide + 1;
		}
	}
	function prevSlide() {
		if (currentSlide > 0) {
			console.log(projects[currentSlide].title);
			currentSlide = currentSlide - 1;
		}
	}
</script>

<section id="project-carousel">
	<div class="carousel w-full py-10">
		<div class="carousel-item relative w-full">
			<div
				class="h-48 w-full rounded-lg bg-neutral-two shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-primary-two"
			>
				<div class=" px-20 pb-5 pt-5 font-extrabold md:text-4xl">
					{projects[currentSlide].title}
				</div>
				<div class=" px-20 pb-5 font-bold md:text-xl">{projects[currentSlide].description}</div>
				<a class=" px-20 pb-5 font-thin md:text-sm" href={projects[currentSlide].link}>
					{projects[currentSlide].link}
				</a>
			</div>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<div class="btn btn-circle bg-neutral-300 shadow-sm" on:click={prevSlide}>
					<ChevronLeft />
				</div>
				<div class="btn btn-circle bg-neutral-300" on:click={nextSlide}>
					<ChevronRight />
				</div>
				<!-- <a href="#slide1" class="btn btn-circle">❮</a> -->
				<!-- <a href="#slide2" class="btn btn-circle">❯</a> -->
			</div>
		</div>
	</div>
</section>
