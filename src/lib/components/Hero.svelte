<script>
	import { GithubIcon, LinkedinIcon, TwitterIcon, Smile } from 'lucide-svelte';
</script>

<section id="home" class="flex flex-col items-center py-10 md:py-16">
	<Smile size={400} />
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mb-6 text-4xl font-bold md:text-6xl">Hi, I'm Vanessa Roque</h1>
		<p class="mb-8 text-lg md:text-xl">Computer Engineer</p>
		<div class="flex justify-center space-x-4">
			<a
				href="https://github.com/vroque19"
				target="_blank"
				class="p-2 hover:scale-x-105 hover:text-primary-two dark:hover:text-neutral-two"
			>
				<GithubIcon size={24} />
			</a>
			<a
				href="https://www.linkedin.com/in/vanessairoque/"
				target="_blank"
				class="p-2 hover:scale-x-105 hover:text-primary-two dark:hover:text-neutral-two"
			>
				<LinkedinIcon size={24} />
			</a>
		</div>
	</div>
</section>
