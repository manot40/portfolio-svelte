<script lang="ts" `>
	import { page } from '$app/stores';
</script>

<div class="min-h-screen flex justify-center items-center bg-blue-500 dark:bg-dark-600">
	<div class="max-w-screen-lg w-full flex flex-col p-8 md:p-0 -mt-14 mb-16 text-light-600 dark:text-light-600">
		<h1 class="text-[8rem] mb-2 select-none">:(</h1>
		<div class="space-y-10 text-lg md:text-2xl md:w-[76%]">
			<p>
				Darn! This site run into some problem. Possible causes are: downtime of backend APIs, site decide to broke (cuz
				why not), owner of this site forgot to paid the cloud provider, etc.
			</p>
			<p>But rest assured, this should be just temporary downtime and will be back in some hours...</p>
		</div>
		<p class="text-sm mt-4 mb-12">...perhaps</p>
		<div class="flex">
			<div class="p-2 bg-white-700 max-w-min mr-4">
				<svg
					width="120"
					height="120"
					viewBox="-1 -1 27 27"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					shape-rendering="crispEdges"
					id="qr code"
				>
					<rect id="qr background" fill-opacity="1" fill="rgb(255, 255, 255)" x="-1" y="-1" width="27" height="27" />
					<path
						fill-opacity="1"
						fill="rgb(57, 146, 255)"
						id="qr dark pixels"
						fill-rule="evenodd"
						d="M 8 0 L 10 0 L 10 1 L 8 1 z M 14 0 L 15 0 L 15 2 L 14 2 z M 16 0 L 17 0 L 17 2 L 16 2 z M 8 2 L 9 2 L 9 3 L 10 3 L 10 4 L 11 4 L 11 2 L 14 2 L 14 3 L 12 3 L 12 5 L 10 5 L 10 6 L 9 6 L 9 5 L 8 5 z M 15 3 L 17 3 L 17 7 L 16 7 L 16 4 L 15 4 z M 13 4 L 15 4 L 15 7 L 16 7 L 16 8 L 15 8 L 15 9 L 13 9 L 13 7 L 14 7 L 14 5 L 13 5 z M 12 5 L 13 5 L 13 7 L 12 7 z M 8 6 L 9 6 L 9 7 L 8 7 z M 10 6 L 11 6 L 11 7 L 10 7 z M 9 7 L 10 7 L 10 8 L 9 8 z M 11 7 L 12 7 L 12 8 L 11 8 z M 0 8 L 4 8 L 4 9 L 3 9 L 3 11 L 4 11 L 4 12 L 2 12 L 2 13 L 3 13 L 3 14 L 2 14 L 2 15 L 1 15 L 1 13 L 0 13 L 0 11 L 1 11 L 1 9 L 0 9 z M 6 8 L 7 8 L 7 9 L 6 9 z M 8 8 L 9 8 L 9 9 L 8 9 z M 17 8 L 18 8 L 18 9 L 17 9 z M 20 8 L 23 8 L 23 9 L 20 9 z M 24 8 L 25 8 L 25 9 L 24 9 z M 4 9 L 5 9 L 5 10 L 4 10 z M 9 9 L 10 9 L 10 10 L 9 10 z M 16 9 L 17 9 L 17 11 L 16 11 z M 23 9 L 24 9 L 24 10 L 23 10 z M 5 10 L 7 10 L 7 11 L 6 11 L 6 12 L 7 12 L 7 11 L 9 11 L 9 12 L 10 12 L 10 13 L 6 13 L 6 14 L 8 14 L 8 15 L 5 15 L 5 14 L 4 14 L 4 12 L 5 12 z M 14 10 L 15 10 L 15 12 L 12 12 L 12 14 L 10 14 L 10 13 L 11 13 L 11 11 L 14 11 z M 18 10 L 20 10 L 20 12 L 21 12 L 21 16 L 17 16 L 17 15 L 18 15 L 18 14 L 17 14 L 17 13 L 16 13 L 16 14 L 15 14 L 15 12 L 18 12 zM 19 14 L 20 14 L 20 15 L 19 15 z M 21 11 L 23 11 L 23 12 L 25 12 L 25 14 L 24 14 L 24 13 L 22 13 L 22 12 L 21 12 z M 13 13 L 14 13 L 14 14 L 13 14 z M 3 14 L 4 14 L 4 15 L 5 15 L 5 16 L 4 16 L 4 17 L 2 17 L 2 16 L 3 16 z M 12 14 L 13 14 L 13 15 L 14 15 L 14 16 L 12 16 z M 14 14 L 15 14 L 15 15 L 14 15 z M 22 14 L 24 14 L 24 15 L 22 15 z M 0 15 L 1 15 L 1 16 L 0 16 z M 10 15 L 11 15 L 11 16 L 12 16 L 12 17 L 10 17 L 10 18 L 8 18 L 8 17 L 9 17 L 9 16 L 10 16 z M 15 15 L 16 15 L 16 16 L 15 16 z M 24 15 L 25 15 L 25 20 L 23 20 L 23 19 L 22 19 L 22 17 L 21 17 L 21 16 L 24 16 zM 23 17 L 24 17 L 24 18 L 23 18 z M 5 16 L 8 16 L 8 17 L 5 17 z M 12 17 L 14 17 L 14 18 L 13 18 L 13 20 L 14 20 L 14 21 L 15 21 L 15 22 L 14 22 L 14 23 L 11 23 L 11 22 L 12 22 L 12 21 L 11 21 L 11 20 L 12 20 L 12 19 L 11 19 L 11 18 L 12 18 z M 15 17 L 16 17 L 16 18 L 15 18 z M 9 19 L 10 19 L 10 23 L 9 23 L 9 25 L 8 25 L 8 21 L 9 21 z M 21 20 L 22 20 L 22 21 L 25 21 L 25 22 L 24 22 L 24 23 L 23 23 L 23 24 L 25 24 L 25 25 L 18 25 L 18 24 L 20 24 L 20 21 L 21 21 zM 21 22 L 22 22 L 22 24 L 21 24 z M 16 21 L 19 21 L 19 23 L 18 23 L 18 24 L 17 24 L 17 23 L 15 23 L 15 22 L 16 22 z M 10 23 L 11 23 L 11 24 L 10 24 z M 12 24 L 13 24 L 13 25 L 12 25 z M 14 24 L 16 24 L 16 25 L 14 25 z"
					/>
					<path
						id="qr squares"
						d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M18,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM19,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM20,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,18h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,19h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,20h3h0v0v3v0h0h-3h0v0v-3v0h0zM16,16h5h0v0v5v0h0h-5h0v0v-5v0h0zM17,17h3h0v0v3v0h0h-3h0v0v-3v0h0zM18,18h1h0v0v1v0h0h-1h0v0v-1v0h0z"
						fill-rule="evenodd"
						fill-opacity="1"
						fill="rgb(57, 146, 255)"
					/>
				</svg>
			</div>
			<div class="space-y-1 self-end text-sm md:text-lg">
				<h2>If you are curious enough, try check it by scanning this QR</h2>
				<p>Stop Code: {$page.status || 'ERR'}_{$page.error?.message || 'SITE_BROKE'}</p>
			</div>
		</div>
	</div>
</div>
