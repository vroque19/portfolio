<script>
	import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-svelte";
</script>

<section id="home" class="py-20 md:py-32">
	<div class="max-w-3xl mx-auto text-center">
		<h1 class="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Vanessa Roque</h1>
		<p class="text-lg md:text-xl text-neutral-600 mb-8">Computer Engineering Student</p>
		<div class="flex justify-center space-x-4">
			<a href="https://github.com" target="_blank" class="p-2 text-primary-two hover:text-primary-three">
				<GithubIcon size={24} />
			</a>
			<a href="https://linkedin.com" target="_blank" class="p-2 text-primary-two hover:text-primary-three">
				<LinkedinIcon size={24} />
			</a>
			<a href="https://twitter.com" target="_blank" class="p-2 text-primary-two hover:text-primary-three">
				<TwitterIcon size={24} />
			</a>
		</div>
	</div>
</section>
