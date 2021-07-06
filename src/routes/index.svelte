<script>
	import Instagram from '$lib/icons/instagram.svelte';
	import Facebook from '$lib/icons/facebook.svelte';
	import { fade } from 'svelte/transition';
	let formData = { name: '', email: '', message: '' };
	let success = '';
	let error = '';

	const handleSubmit = async (e) => {
		try {
			const submit = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(formData)
			});

			const data = await submit.json();

			success = 'submitted';
			setTimeout(() => {
				success = '';
			}, 5000);
		} catch (ex) {
			error = ex;
			console.error('Error submitting a message', error);
			setTimeout(() => {
				error = '';
			}, 5000);
		}
	};
</script>

<svelte:head>
	<title>Picture Day Productions</title>
</svelte:head>

<div class="bg-hero-image bg-cover bg-center h-80 md:h-160 flex">
	<div class="max-w-6xl mx-auto px-3 self-center">
		<div class="grid grid-cols-12">
			<div class="col-span-8">
				<h4 class="text-white font-thin">
					I created Picture Day Productions to make art that is freeing, collaborative, and healing,
					and that asks more questions than it answers so we can continue to wander in the infinite
					possibility of what life can be.
				</h4>
			</div>
		</div>
	</div>
</div>

<div class="py-6">
	<div class="max-w-6xl mx-auto px-3">
		<div class="grid grid-cols-12">
			<div class="col-span-12 md:col-span-4 md:pr-5 pb-5">
				<img
					class="rounded-lg overflow-hidden shadow-md"
					src="https://res.cloudinary.com/maljuburi/image/upload/v1625291259/PictureDayProductions/JB_2020.jpg"
					alt="random"
					width="100%"
				/>
			</div>

			<div class="col-span-12 md:col-span-8">
				<h3 class="text-center md:text-left">Jennifer Bartels</h3>
				<hr />
				<p class="text-gray-700">
					I was born and raised in Upstate New York, where I make my home today. My work history is
					varied and has always inclined toward the creative. Years of training in ballet and modern
					dance led to a stint as a professional dancer with the Maude Baum and Company Dance
					Theatre in Albany, NY. While living in Brooklyn for twelve years, I studied improv comedy
					at the Upright Citizens Brigade in Manhattan and earned a degree in jewelry design from
					The Fashion Institute of Technology.
				</p>
			</div>
			<div class="col-span-12">
				<p class="text-gray-700 pb-3">
					I worked as a jeweler, first for Alex Sepkus (I’d sometimes find myself on the subway,
					bound for Bergdorf's with tens of thousands of dollars’ worth of jewels in my handbag),
					and later at DVBNY, where I handmade the designs of Elsa Peretti for Tiffany and Co. I've
					also worked in hospitality, from chain restaurants to quaint neighborhood stalwarts to
					celebrity chef-owned behemoths.
				</p>
				<p class="text-gray-700 pb-3">
					When I decided to return to school, my intent was to pursue a degree in film studies, as I
					had written the first draft of a feature-length romcom, as well as the first draft of a
					series pilot. While my school of choice, SUNY Albany, did not offer a film studies major,
					it did include a degree in documentary studies in its curriculum.
				</p>
			</div>
		</div>
	</div>
</div>
<div id="projects" />

<div class="mb-6 bg-gray-100">
	<div class="max-w-6xl mx-auto px-3">
		<div class="bg-movie-poster bg-cover bg-center h-60 md:h-160 flex" />
		<div class="grid grid-cols-12">
			<div class="col-span-12">
				<h3 class="text-center pt-5">Projects</h3>
				<hr class="col-span-12" />
				<p class="text-gray-700 pb-3">
					Dear Lily, Love Patrick, is an intimate portrait of my mother's friendship with Patrick
					Cowley, disco producer, electronic music pioneer, and Hi-NRG music innovator. I originally
					envisioned a broader overview of Patrick's career up until his death from AIDS in 1982,
					but another pandemic hit just as I was beginning to arrange travel and interviews, and the
					country went into lockdown as COVID-19 struck.
				</p>
			</div>
			<div class="col-span-12 pb-5">
				<video
					width="100%"
					height="auto"
					poster="https://res.cloudinary.com/maljuburi/image/upload/v1625435329/PictureDayProductions/movie-thumbnail.png"
					controls
				>
					<source
						src="https://res.cloudinary.com/maljuburi/video/upload/v1625292026/PictureDayProductions/Dear_Lily_Love_Patrick_Trailer.mp4"
						type="video/mp4"
					/>

					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	</div>
</div>
<div class="mb-6">
	<div class="max-w-6xl mx-auto px-3 py-5">
		<div class="grid grid-cols-12">
			<div class="col-span-12">
				<p class="text-gray-700 pb-3">
					Consequently, I had to let go of my original and, admittedly, loftier goal and focus on
					the primary resources I had at hand, a manila envelope of keepsakes my mother had held
					onto, which included some cherished letters to her from Patrick. I recognized them for the
					treasures that they are and made them the backbone of the film.
				</p>
				<p class="text-gray-700 pb-3">
					I continue to focus on my romcom screenplay, and on a possible web series in which I
					explore my inner demons - with the help of a one-and-a-half-inch tall ceramic cat
					figurine. I currently work full time as a community habilitation and respite care provider
					for an amazing, neurodiverse nine-year-old who is autistic and has epilepsy, who every day
					expands my horizons in ways I never thought possible.
				</p>
			</div>
		</div>
	</div>

	<div class="max-w-6xl mx-auto px-3 py-5">
		<div class="grid grid-cols-12">
			<div id="contact" />
			<div class="col-span-12">
				<h3 class="text-center md:text-left">Contact</h3>
				<hr />
			</div>
			<div class="col-span-12 md:col-span-8 md:col-start-3 md:col-end-11">
				<form on:submit|preventDefault={handleSubmit}>
					<div class="form-section">
						<label for="username">Name:</label>
						<input id="username" type="text" bind:value={formData.name} required />
					</div>
					<div class="form-section">
						<label for="email">Email</label>
						<input id="email" type="text" bind:value={formData.email} required />
					</div>
					<div class="form-section">
						<label for="message">Message:</label>
						<textarea id="message" rows="6" bind:value={formData.message} required />
					</div>
					<div class="flex justify-between align-middle">
						<button type="submit">Send</button>
						{#if success}
							<p transition:fade class="text-green-700 self-center">
								Thank you! Your message has been received.
							</p>
						{/if}
						{#if error}
							<p transition:fade class="text-red-500 self-center">
								Something went wrong, please try again!
							</p>
						{/if}
					</div>
				</form>
			</div>
		</div>
		<hr />
		<div class="md:bg-report-card bg-none bg-cover bg-center md:h-80 h-20 relative">
			<div class="flex absolute bottom-2 right-28 md:bg-card bg-none px-0 md:px-6">
				<p class="text-lg self-center">Follow me on :</p>
				<a href="#" class="mx-1">
					<Facebook />
				</a>
				<a href="#" class="mx-1">
					<Instagram />
				</a>
			</div>
		</div>
	</div>
</div>
