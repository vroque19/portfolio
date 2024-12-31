<script>
	import { GithubIcon, LinkedinIcon, TwitterIcon, Smile } from 'lucide-svelte';
</script>

<section id="home" class="flex flex-col items-center py-10 md:py-16">
	<Smile class=" h-96 w-96" />
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mb-6 text-4xl font-bold md:text-6xl">Hi, I'm Vanessa Roque</h1>
		<p class="mb-8 text-lg text-neutral-600 md:text-xl">Computer Engineering Student</p>
		<div class="flex justify-center space-x-4">
			<a
				href="https://github.com/vroque19"
				target="_blank"
				class="p-2 text-primary-two hover:text-primary-three"
			>
				<GithubIcon size={24} />
			</a>
			<a
				href="https://www.linkedin.com/in/vanessairoque/"
				target="_blank"
				class="p-2 text-primary-two hover:text-primary-three"
			>
				<LinkedinIcon size={24} />
			</a>
		</div>
	</div>
</section>
