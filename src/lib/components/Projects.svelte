<script>
	import { ExternalLink } from "lucide-svelte";
	import { fade } from "svelte/transition";

	// Projects data
	const projects = [
		{
			title: "Portfolio Website",
			description: "A beautiful web application built with Svelte and TailwindCSS",
			image: "favicon.png",
			link: "https://vanessa.codes",
		},
		{
			title: "Frequency Visualizer",
			description: "An e-commerce platform with modern design",
			image: "visualizer.gif",
			link: "https://project2.com",
		},
		{
			title: "Project Three",
			description: "A responsive dashboard application",
			image: "$assets/ui-placeholder.png",
			link: "https://project3.com",
		},
	];
</script>

<section id="projects" class="py-20">
	<h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each projects as project}
			<div class="bg-neutral-two rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" transition:fade>
				{#if project == projects[0]} 
				<iframe class="w-full h-48" src="/" frameborder="0"></iframe>
				{:else}
				<img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
				{/if}
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2">{project.title}</h3>
					<p class="text-primary-three mb-4">{project.description}</p>
					<a href={project.link} target="_blank" class="inline-flex items-center text-primary-three hover:text-primary-two">
						View Project
						<ExternalLink size={16} class="ml-1" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

