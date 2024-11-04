<div class="bg-secondary-500 py-10">
	<div class="mx-auto max-w-2xl text-center">
		<h1 class="h1 font-serif">Contact</h1>
		<p class="mt-4 text-lg leading-8">
			Let's get started on your child's journey to success and confidence in reading. <strong
				>I am currently only scheduling formal reading evaluations</strong
			>
			and am not able to take on new tutoring clients.
			<a class="underline" href="/#waitlist">Join the waitlist</a> to be notified when I have an opening.
		</p>
		<p class="text-lg">
			If you would like to schedule an evaluation or have an inquiry about my services, please reach
			out via the form below.
		</p>
	</div>
</div>
<div class="grid grid-cols-2">
	<div class="border border-black p-16">
		<div class="grid grid-cols-2 gap-12">
			<div>
				<img src="/pin-icon.png" alt="" class="h-6" />
				<h3 class="h4 my-2">Location</h3>
				<p>Tampa, FL</p>
				<p>Lake Magdalene</p>
			</div>
			<div>
				<img src="/phone-icon.png" alt="" class="h-6" />
				<h3 class="h4 my-2">Phone</h3>
				<p>813-773-5578</p>
			</div>
			<div>
				<img src="/email-icon.png" alt="" class="h-6" />
				<h3 class="h4 my-2">Email</h3>
				<p>summerkiesel@sageliteracy.org</p>
			</div>
			<div>
				<img src="/thumbs-up-icon.png" alt="" class="h-6" />
				<h3 class="h4 my-2">Social Media</h3>
				<div class="-ml-2 flex flex-row">
					<a href="https://www.facebook.com/sageliteracytutoring" target="_blank" rel="noopener">
						<img src="/fb-logo.webp" alt="" width="25" />
					</a>
					<a href="https://www.instagram.com/SAGELITERACY	" target="_blank" rel="noopener">
						<img src="/ig-logo.webp" alt="" width="25" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="border border-l-0 border-black p-16">
		<form data-netlify="true" name="contact-form" method="POST" action="/contact/thank-you">
			<input type="hidden" name="form-name" value="contact-form" />
			<div class="flex flex-row gap-4">
				<label class="label text-sm">
					First Name *
					<input
						required
						class="input !variant-outline-primary mt-1 rounded-none"
						name="first-name"
						type="text"
					/>
				</label>
				<label class="label text-sm">
					Last Name *
					<input
						required
						class="input !variant-outline-primary mt-1 rounded-none"
						name="last-name"
						type="text"
					/>
				</label>
			</div>
			<label class="label mt-6 text-sm">
				Email *
				<input
					required
					class="input !variant-outline-primary mt-1 rounded-none"
					name="email"
					type="email"
				/>
			</label>
			<label class="label mt-6 text-sm">
				Phone *
				<input
					required
					class="input !variant-outline-primary mt-1 rounded-none"
					name="phone"
					type="tel"
				/>
			</label>
			<label class="label mt-6 text-sm">
				Message
				<textarea class="input !variant-outline-primary mt-1 rounded-none" rows="3"></textarea>
			</label>
			<fieldset class="mt-6">
				<legend class="legend text-sm">Which services are you looking for? *</legend>
				<div class="mt-2 flex flex-col gap-1 text-sm">
					<label class="label">
						<input class="checkbox mb-0.5 border-primary-500" type="checkbox" />
						<span class="ml-2">Reading Tutoring</span>
					</label>
					<label class="label">
						<input class="checkbox mb-0.5 border-primary-500" type="checkbox" />
						<span class="ml-2">Reading Assessment</span>
					</label>
					<label class="label">
						<input class="checkbox mb-0.5 border-primary-500" type="checkbox" />
						<span class="ml-2">Parent and Educator Training</span>
					</label>
				</div>
			</fieldset>
			<button class="variant-filled-primary btn mt-6 w-full rounded-none" type="submit">Send</button
			>
		</form>
	</div>
</div>
