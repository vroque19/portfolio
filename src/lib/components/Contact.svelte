<script>
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import { init, sendForm } from '@emailjs/browser';
	import { error } from '@sveltejs/kit';

	// Form state
	let name = $state('');
	let email = $state('');
	let message = $state('');
	const publicKey = "RB_sOnbzvRkMIz8nZ";
	const serviceID = "service_hfnzmxp";
	const templateID = "contact-form";
	init(publicKey);
	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		console.log({ name, email, message });
		sendForm(serviceID, templateID, form).then(
			() => {
				console.log('SUCCESS!');
				// Reset form
				name = '';
				email = '';
				message = '';
				alert('Email sent successfully.');
			},
			(error) => {
				console.log('FAILED', error);
				console.log(serviceID, publicKey, templateID);
				alert('Email failed to send.');
			}
		);
	};
</script>

<section id="contact" class="py-20">
	<h2 class="mb-12 text-center text-3xl font-bold">Contact</h2>
	<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
		<div class="space-y-6">
			<h3 class="mb-4 text-xl font-semibold">Get in touch</h3>
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
				<span>Sunnyvale, CA</span>
			</div>
		</div>

		<form class="space-y-4" onsubmit={handleSubmit}>
			<div>
				<label
					for="name"
					class="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-one">Name</label
				>
				<input
					id="name"
					type="text"
					name="name"
					bind:value={name}
					class="w-full rounded-md border border-neutral-300 bg-neutral-two px-4 py-2 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 dark:bg-primary-two dark:text-neutral-one"
					required
				/>
			</div>
			<div>
				<label
					for="email"
					class="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-one">Email</label
				>
				<input
					id="email"
					type="email"
					name="email"
					bind:value={email}
					class="w-full rounded-md border border-neutral-300 bg-neutral-two px-4 py-2 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 dark:bg-primary-two dark:text-neutral-one"
					required
				/>
			</div>
			<div>
				<label
					for="message"
					class="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-one"
					>Message</label
				>
				<textarea
					id="message"
					name="message"
					bind:value={message}
					rows="4"
					class="w-full rounded-md border border-neutral-300 bg-neutral-two px-4 py-2 focus:border-neutral-500 focus:ring-1 focus:ring-secondary-mauve dark:bg-primary-two dark:text-neutral-one"
					required
				></textarea>
			</div>
			<button
				type="submit"
				class="w-full rounded-md bg-neutral-two px-4 py-2 text-neutral-800 transition-colors duration-200 hover:bg-secondary-mauve hover:text-neutral-800 dark:bg-primary-two dark:text-neutral-one dark:hover:bg-primary-three dark:hover:text-primary-one"
				>Send Message</button
			>
		</form>
	</div>
</section>
