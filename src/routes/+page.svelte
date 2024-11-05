<script lang="ts">
	import VisibilityMount from '$lib/components/VisibilityMount.svelte';
	import { fly } from 'svelte/transition';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import Testimonial from '$lib/components/Testimonial.svelte';
	import type { EmblaCarouselType } from 'embla-carousel';

	let emblaInstance: EmblaCarouselType;
	const onCarouselInit = (event: { detail: EmblaCarouselType }) => {
		emblaInstance = event.detail;
	};
</script>

<div
	class="mx-auto flex h-full w-full items-center justify-center border-t-[9px] border-tertiary-500"
>
	<div class="grid w-full grid-cols-1 md:grid-cols-2">
		<div class="mx-auto md:py-20">
			<img src="/summer.webp" alt="Summer Kiesel" width="487" height="626" />
		</div>
		<div class="bg-secondary-500 px-14 py-24">
			<div class="mx-auto max-w-xl">
				<VisibilityMount>
					<h2
						in:fly|global={{ x: -100, duration: 1500 }}
						class="h1 font-serif text-7xl md:text-8xl"
					>
						Summer Kiesel
					</h2>
					<p in:fly|global={{ x: 100, duration: 1500 }} class="h3 mt-6">
						—— Certified Dyslexia Interventionist
					</p>
					<p in:fly|global={{ y: 100, duration: 1500 }} class="mt-6 leading-7">
						Every child should learn to read in an environment that is fun, encouraging and tailored
						to their strengths and needs. As a special education teacher of 5 years with specialized
						training in Lindamood-Bell Learning Processes and the Orton-Gillingham method, I am
						passionate about helping every student blossom into a confident reader. Whether your
						child is just starting school or has been struggling to keep up with reading for a few
						years now, I would be honored to work with your family to develop a pathway to literacy
						that is personalized just for them.
					</p>
				</VisibilityMount>
			</div>
		</div>
		<div class="min-h-96 bg-primary-500 p-6 text-center md:col-span-2">
			<VisibilityMount>
				<div class="flex justify-between">
					<button
						on:click={() => emblaInstance.scrollPrev()}
						class="my-auto mr-6 min-w-5 text-white"
					>
						<svg class="stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"
							><path class="fill-current" d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"
							></path></svg
						>
					</button>
					<div
						class="embla"
						use:emblaCarouselSvelte={{
							options: { loop: true },
							plugins: [
								Autoplay({ delay: 10000, stopOnMouseEnter: true, stopOnInteraction: false })
							]
						}}
						on:emblaInit={onCarouselInit}
						in:fly|global={{ y: 100, duration: 1500 }}
					>
						<div class="embla__container">
							<div class="embla__slide">
								<Testimonial>
									Two of my children (ages 10 and 13) have dyslexia and have been homeschooled from
									the beginning. Despite my efforts to meet their needs at home, using curricula
									designed for dyslexics, they were having significant struggles with reading and
									spelling. I found Summer online and boy has she been an answer to our prayers!
									Both of my kids really liked her and made HUGE improvements thanks to her
									tutoring. I wholeheartedly recommend her to other families!
									<div slot="author">Amy S.</div>
								</Testimonial>
							</div>
							<div class="embla__slide">
								<Testimonial>
									My son received reading tutoring with Summer for 2 years. I cannot say enough good
									things about her! He made tremendous and consistent progress with her during that
									time and enjoyed seeing her each week. If you can snag a spot with her, take it!
									<div slot="author">Ashley H.</div>
								</Testimonial>
							</div>
							<div class="embla__slide">
								<Testimonial>
									Summer truly has a gift to connect with and reach students that are struggling
									with reading. My son started working with Summer in the beginning of November 22
									and has shown tremendous growth with her in just a few months. My son took a MAPS
									reading assessment at school in the fall of 2022 and he just tested again end of
									January 2023. His scores improved dramatically. He went from 59 percentile to the
									78th, which put his growth rate in the 90th percentile from his fall to winter
									test. I have gone from feeling helpless with being able to help my son to
									encouraged and at peace with how he is progressing with Summer’s help. Not only is
									my son showing progress, he genuinely enjoys going to her and gets upset if he has
									to miss a session.
									<div slot="author">Melissa I.</div>
								</Testimonial>
							</div>
						</div>
					</div>
					<button
						on:click={() => emblaInstance.scrollNext()}
						class="my-auto ml-6 min-w-5 text-white"
					>
						<svg
							style="transform: scaleX(-1);"
							class="stroke-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 21 41"
							><path class="fill-current" d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"
							></path></svg
						>
					</button>
				</div>
			</VisibilityMount>
		</div>
		<div class="bg-secondary-500 px-14 py-24">
			<div class="mx-auto max-w-xl">
				<VisibilityMount>
					<h2 in:fly|global={{ x: -100, duration: 1500 }} class="h1 font-serif">
						Qualifications and Trainings
					</h2>
					<p in:fly|global={{ x: 100, duration: 1500 }} class="my-6 text-3xl tracking-tighter">
						————
					</p>
					<ul in:fly|global={{ y: 100, duration: 1500 }} class="list-disc">
						<li class="mb-8 list-item text-lg leading-8">
							M.Ed. in Special Education from the University of Florida
						</li>
						<li class="mb-8 list-item text-lg leading-8">
							Graduate of the University of Florida Dyslexia Certificate program and CERI certified
							as a Structured Literacy Dyslexia Interventionist
						</li>
						<li class="mb-8 list-item text-lg leading-8">
							Trained in the Orton-Gillingham approach to reading, using multi-sensory structured
							literacy techniques
						</li>
						<li class="mb-8 list-item text-lg leading-8">
							5 years of experience as a Special Education teacher in Florida public schools,
							serving students in Kindergarten through High School
						</li>
						<li class="mb-8 list-item text-lg leading-8">
							Certified in Elementary Education, Exceptional Student Education, English for Speakers
							of Other Languages and endorsed in Reading (K-12)
						</li>
					</ul>
				</VisibilityMount>
			</div>
		</div>
		<div class="px-14 py-24">
			<div class="max-w-xl">
				<VisibilityMount>
					<h2 in:fly|global={{ x: -100, duration: 1500 }} class="h1 font-serif">Services</h2>
					<p in:fly|global={{ x: 100, duration: 1500 }} class="my-6 text-3xl tracking-tighter">
						————
					</p>
					<div
						in:fly|global={{ y: 100, duration: 1500 }}
						class="grid w-full grid-cols-1 gap-x-2 gap-y-8"
					>
						<div class="mx-auto flex items-center gap-8">
							<div
								class="box-content h-[110px] w-[110px] rounded-full border-black bg-secondary-500 p-3 shadow-[0_0_5px_black]"
							>
								<img src="/tutoring.webp" width="110" alt="" />
							</div>
							<p class="w-[10rem] text-xl">Individual Tutoring</p>
						</div>
						<div class="mx-auto flex items-center gap-8">
							<div
								class="box-content h-[110px] w-[110px] rounded-full border-black bg-secondary-500 p-3 shadow-[0_0_5px_black]"
							>
								<img src="/evaluation.png" class="max-h-[100px]" alt="" />
							</div>
							<p class="w-[10rem] text-xl">Reading Evaluation</p>
						</div>
						<div class="mx-auto flex items-center gap-8">
							<div
								class="box-content h-[110px] w-[110px] rounded-full border-black bg-secondary-500 p-3 shadow-[0_0_5px_black]"
							>
								<img src="/training.png" alt="" />
							</div>
							<p class="w-[10rem] text-xl">Parent and Educator Training</p>
						</div>
						<div class="flex w-full flex-row justify-center">
							<a href="/services" class="variant-filled-primary btn mx-auto mt-10 w-48 rounded-none"
								>Read More</a
							>
						</div>
					</div></VisibilityMount
				>
			</div>
		</div>
		<div class="px-14 py-24">
			<div class="mx-auto grid max-w-xl grid-cols-2 gap-y-8">
				<img class="mx-auto" width="202" src="/UF_dyslexia_cert.webp" alt="" />
				<img class="mx-auto" width="202" src="/CERI_cert.jpg" alt="" />
				<img class="col-span-2 mx-auto" src="/scholarships_accepted.webp" alt="" />
			</div>
		</div>
		<div class="bg-secondary-500 px-14 py-24">
			<div class="mx-auto max-w-xl" id="waitlist">
				<VisibilityMount>
					<h2 in:fly|global={{ x: -100, duration: 1500 }} class="h3 font-serif">
						Tutoring Waitlist
					</h2>
					<p in:fly|global={{ x: 100, duration: 1500 }} class="mb-8 text-3xl tracking-tighter">
						———
					</p>
					<p in:fly|global={{ y: 100, duration: 1500 }} class="leading-7">
						<strong>My tutoring schedule is currently full</strong>. I am accepting students for
						evaluations and to join the waitlist for tutoring. Please feel free to contact me below
						with questions or to join the waitlist!
					</p>
					<form
						data-netlify="true"
						name="tutoring-waitlist"
						method="POST"
						action="/contact/thank-you"
						in:fly|global={{ y: 100, duration: 1500 }}
						class="mt-6 bg-slate-100 p-4"
					>
						<input type="hidden" name="form-name" value="tutoring-waitlist" />
						<input
							type="hidden"
							name="subject"
							data-remove-prefix
							value="Tutoring Waitlist submission from sageliteracy.org"
						/>
						<div class="flex flex-row gap-4">
							<input
								aria-label="name"
								class="input rounded-none"
								name="name"
								type="text"
								placeholder="Name"
							/>
							<input
								aria-label="name"
								class="input rounded-none"
								name="phone"
								type="text"
								placeholder="Phone"
							/>
						</div>
						<input
							aria-label="email"
							class="input mt-4 rounded-none"
							name="email"
							type="text"
							placeholder="Email"
						/>
						<button class="variant-filled-primary btn mt-4 w-full rounded-none" type="submit"
							>Join the Waitlist</button
						>
					</form>
					<h2 in:fly|global={{ x: -100, duration: 1500 }} class="h3 mt-14 font-serif">
						Contact Me
					</h2>
					<p in:fly|global={{ x: 100, duration: 1500 }} class="mb-8 text-3xl tracking-tighter">
						———
					</p>
					<div in:fly|global={{ y: 100, duration: 1500 }} class="flex flex-col">
						<p>
							Please reach out if you have any other questions or would like to schedule another
							service. You may reach me at <a href="mailto:summerkiesel@sageliteracy.org"
								><strong>summerkiesel@sageliteracy.org</strong></a
							> or by heading to my contact page below.
						</p>
						<a href="/contact" class="variant-filled-primary btn mx-auto mt-10 w-48 rounded-none"
							>Contact Summer</a
						>
					</div>
				</VisibilityMount>
			</div>
		</div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		align-items: flex-start;
		height: 100%;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		height: 100%;
	}
</style>
