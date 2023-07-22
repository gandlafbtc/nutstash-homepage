<script>
	import OpenWalletButton from './OpenWalletButton.svelte';
	import Logo from './main/Logo.svelte';
	import Nutstash from './main/Nutstash.svelte';
</script>

<div
	style="background-image: url(/bg.png); background-size: cover;"
	class=" flex flex-col justify-start items-start pt-10"
>
<div class="from-transparent to-[#5616f7] bg-gradient-to-b">

	<div class=" flex justify-between w-full p-2">
		<Logo />
		<div class="flex gap-2 items-center">
			<div class="hidden lg:flex gap-2 text-white font-bold ">
				<a href="#features" class="link hover:link-secondary no-underline">features</a>
				<a href="#install"  class="link hover:link-secondary no-underline" >install</a>
				<a href="#community" class="link hover:link-secondary no-underline" >community</a>
				<a href="#faq" class="link hover:link-secondary no-underline" >faq</a>
			</div>
			<OpenWalletButton />
			<div data-theme="light" class="bg-transparent flex gap-2">
				<a
				href="https://github.com/gandlafbtc/nutstash-wallet"
					class="btn bg-white btn-circle flex items-center justify-center btn-sm"
				>
				<img src="/gh.svg" alt="" />
			</a>
			<a
			href="https://t.me/+DRy-rSe5wQtlYTk1"
			class="btn bg-white btn-circle flex items-center justify-center btn-sm"
			>
			<img src="/telegram.svg" alt="" />
		</a>
		<a
		href="https://twitter.com/gandlaf21"
		class="btn bg-white btn-circle flex items-center justify-center btn-sm"
		>
		<img src="/twitter.svg" alt="" />
	</a>
</div>
</div>
</div>
<div class="w-full justify-center flex">
	<Nutstash />
</div>
</div>

</div>