<script>
	import VisibilityMount from '$lib/components/VisibilityMount.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="mx-auto flex h-full w-full items-center justify-center border-t-[9px] border-tertiary-500"
>
	<div class="grid w-full grid-cols-1 md:grid-cols-2">
		<div class="mx-auto py-20">
			<img src="/summer.webp" alt="Summer Kiesel" width="487" height="626" />
		</div>
		<div class="bg-secondary-500 px-14 py-24">
			<div class="mx-auto max-w-xl">
				<VisibilityMount>
					<h2 in:fly|global={{ x: -100, duration: 1500 }} class="h1 font-serif text-8xl">
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
