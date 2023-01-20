<script lang="ts">
	import { browser } from "$app/environment";



const copyGitClone = () => {
		if (browser) {
            let input = document.getElementById('git-url-input');
			// @ts-expect-error
			input.select();
			document.execCommand('copy');
		}
	};

</script>

<div class="hero bg-base-200 items-start col-span-3 lg:col-span-1" id="run-yourself">
    <div class="hero-content flex">
      <div class="flex flex-col gap-6 h-full items-center text-center">
        <h2 class="text-3xl font-bold">
            Run it yourself!
        </h2>
        <div class="w-20">
            <button class="btn rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                  
            </button>
        </div>
        <p class="text-lg">
            You don't need to trust nutstash's code. You can verify and run the program locally in 3 simple steps:
        </p>
        <div>
            <div class="mockup-code flex flex-col gap-2 text-left">
                <pre data-prefix="#" class="text-base-100"><code>1. Clone it</code></pre> 
                <pre data-prefix="$" class="flex items-center">  <input type="text" class="input" id="git-url-input" value="git clone https://bitbucket.org/gandlaf21/cashu-wallet.git"/>
                    <button class="btn btn-square" on:click={copyGitClone}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>                      
                </button></pre> 
                <pre data-prefix="#" class="text-base-100"><code>2. Install it</code></pre> 
                <pre data-prefix="$"><code>cd cashu-wallet</code></pre> 
                <pre data-prefix="$"><code>npm i</code></pre> 
                <pre data-prefix="#" class="text-base-100"><code>3. Run it</code></pre> 
                <pre data-prefix="$"><code>npm run dev</code></pre> 
              </div>
        </div>
    </div>
    </div>
  </div>
