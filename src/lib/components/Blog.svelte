<script>
	// Blog posts data
	const posts = [
		{
			title: "Getting Started with Svelte 5",
			excerpt: "Learn about the new features in Svelte 5 and how to use them",
			date: "2024-01-15",
			readTime: "5 min read",
		},
		{
			title: "Mastering TailwindCSS",
			excerpt: "Tips and tricks for using TailwindCSS effectively",
			date: "2024-01-10",
			readTime: "4 min read",
		},
		{
			title: "Web Development Best Practices",
			excerpt: "Essential practices for modern web development",
			date: "2024-01-05",
			readTime: "6 min read",
		},
	];
</script>

<section id="blog" class="py-20">
	<h2 class="text-3xl font-bold text-center mb-12">Blog</h2>
	<div class="space-y-8">
		{#each posts as post}
			<article class="bg-neutral-two p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
				<div class="flex justify-between items-start mb-4">
					<h3 class="text-xl font-semibold">{post.title}</h3>
					<div class="text-sm text-neutral-500">{post.readTime}</div>
				</div>
				<p class="text-neutral-600 mb-4">{post.excerpt}</p>
				<div class="flex justify-between items-center">
					<span class="text-sm text-neutral-500">{post.date}</span>
					<a href="#" class="text-neutral-900 hover:text-neutral-600">Read more →</a>
				</div>
			</article>
		{/each}
	</div>
</section>
