<script>
	import { Mail, MapPin, Phone } from "lucide-svelte";

	// Form state
	let name = $state("");
	let email = $state("");
	let message = $state("");

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, email, message });
		// Reset form
		name = "";
		email = "";
		message = "";
	};
</script>

<section id="contact" class="py-20">
	<h2 class="text-3xl font-bold text-center mb-12">Contact</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		<div class="space-y-6">
			<h3 class="text-xl font-semibold mb-4">Get in touch</h3>
			<div class="flex items-center space-x-3">
				<Mail size={20} class="text-neutral-600" />
				<span>viroque19@gmail.com</span>
			</div>
			<div class="flex items-center space-x-3">
				<Phone size={20} class="text-neutral-600" />
				<span>+1 (330) 730-9139</span>
			</div>
			<div class="flex items-center space-x-3">
				<MapPin size={20} class="text-neutral-600" />
				<span>CA</span>
			</div>
		</div>

		<form class="space-y-4" onsubmit={handleSubmit}>
			<div>
				<label for="name" class="block text-sm font-medium text-neutral-700 mb-1">Name</label>
				<input id="name" type="text" bind:value={name} class="w-full px-4 py-2 rounded-md border border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" required />
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-neutral-700 mb-1">Email</label>
				<input id="email" type="email" bind:value={email} class="w-full px-4 py-2 rounded-md border border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" required />
			</div>
			<div>
				<label for="message" class="block text-sm font-medium text-neutral-700 mb-1">Message</label>
				<textarea id="message" bind:value={message} rows="4" class="w-full px-4 py-2 rounded-md border border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" required></textarea>
			</div>
			<button type="submit" class="w-full bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-800 transition-colors duration-200">Send Message</button>
		</form>
	</div>
</section>
