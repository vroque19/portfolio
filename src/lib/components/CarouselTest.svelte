<script>
	let currentSlide = 0;
	const projects = [
		{
			title: 'Portfolio Website',
			description: 'A beautiful web application built with Svelte and TailwindCSS'
		},
		{ title: 'Frequency Visualizer', description: 'An e-commerce platform with modern design' },
		{ title: 'Project Three', description: 'A responsive dashboard application' }
	];

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % projects.length;
	};

	const prevSlide = () => {
		currentSlide = (currentSlide - 1 + projects.length) % projects.length;
	};
</script>

<section id="project-carousel" class="relative w-full overflow-hidden">
	<div class="carousel relative w-full">
		{#each projects as project, i}
			<div
				class="carousel-item absolute top-0 w-full transition-opacity duration-500 ease-in-out"
				class:hidden={i !== currentSlide}
			>
				<div
					class="h-48 w-full rounded-lg bg-neutral-two shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-primary-two"
				>
					<div class="px-20 pb-5 pt-5 font-extrabold md:text-4xl">{project.title}</div>
					<div class="px-20 pb-5 font-bold md:text-xl">{project.description}</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Navigation Buttons -->
	<div class="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-5">
		<button on:click={prevSlide} class="btn btn-circle">❮</button>
		<button on:click={nextSlide} class="btn btn-circle">❯</button>
	</div>
</section>

<style>
	.carousel-item {
		opacity: 0;
		visibility: hidden;
	}

	.carousel-item:not(.hidden) {
		opacity: 1;
		visibility: visible;
	}
</style>
