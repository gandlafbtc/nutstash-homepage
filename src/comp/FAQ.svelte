<div id='faq' class="flex flex-col items-center pt-20 pb-10 gap-5 w-full p-3" >
	<div class=" flex flex-col gap-4 pb-16">
		<h2 class="font-bold text-3xl">FAQ</h2>
	</div>
	<div class="flex flex-col text-left">
        <p class="p-3 font-bold text-xl">safety and privacy</p>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">Are there any risks when using nutstash?</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
						Yes. In fact, there are many risks. Make sure to understand them before putting any sats
						into nutstash.
					</p>
					<ul class="list-disc">
						<li>
							Nutstash and the underlying Cashu protocol are still in early development. Funds might
							be lost forever due to bugs in the software or the protocol.
						</li>
						<li>
							Nutstash is a ecash wallet interface. It is not a lightning wallet, and it does not
							run a lightning node. Nutstash leverages the Cashu protocol to communicate with Cashu
							mints to integrate with lightning. Therefore, the mint is running the lightning
							infrastructure and custodies the satoshis for the mints ecash users. Users have to
							trust the mint to redeem their ecash once they want to swap out to lightning.
						</li>
						<li>
							Ecash tokens are bearer asset tokens. This means the data that gets stored in the
							wallet (browser local storage) represents the actual money itself. Should the storage
							be wiped, funds will be lost.
						</li>
                        <li>
							Nutstash is a PWA, a progressive web app. This has the benefit of accessability, since it doesn't rely on appstores listing and not banning the app, but it opens up a whole plethora of security risks. For example, the updates can be pushed from the server to devices without notice. So if the server that ships nutstash gets compromised, so will every wallet. Of course we will try our best to keep the wallet as safe as possible, but please be aware that there are inherent limitations to this model.
						</li>
					</ul>
					<p>
						Please take these risks seriously. Don't put any money into nutstash that you're not
						willing to lose.
					</p>
				</div>
			</div>
		</div>
        
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				How much privacy does nutstash/Cashu provide?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
						The Cashu protocol offers a blinding mechanism to unlink the creation of an ecash token
						from its redemption. This gives the mint or anyone else no direct link for parties
						involved in a transaction. The cashu protocol also works entirely without accounts. So
						theoretically it is impossible for a mint operator to determine how many users it has
						and who they are.
					</p>
					<p>There are a few things to consider though.</p>
					<div>
						<p class="font-bold">Privacy chokepoints</p>
						<ul class="list-disc">
							<li>
								Swapping in and out of the mint requires lightning transactions. While sender
								privacy is pretty good on lightning, the mint will almost certaily be able to
								identify a receiver that is getting paid through the mint. This still doesn't
								deanonymize the sender, but it does give the mint the power to censor certain
								payments.
							</li>
							<li>
								Larger amounts most likely have less good privacy properties, due to their token
								denominations being rare. Cashu uses fixed (power-of-2) token denominations to
								create a hide-in-the-crowd effect. But the larger a token gets, the more likely it
								is that fewer and fewer of them exists, and at some point there is no crowd to hide
								anymore. If there is only one token of a specific denomination, it can always be
								linked back to its creation.
							</li>
						</ul>
					</div>
                    <div>
                        <p class="font-bold">
                            Inter-protocol privacy
                        </p>
                        <ul class="list-disc">
                            <li>
                                Cashu does offer decent privacy at the protocol level, but it does not take into consideration network level privacy. Mints may try to collect network data such as access time, IP addresses and or other metadata. To achieve better network level privacy users should rely on tools that specialize in that, such as tor, mixnets, VPNs etc..
                            </li>
                            <li>
                                Cashu transactions happen 'out-of-band', which shifts the responsibility to use secure channels for sending tokens. The most secure channel is to send tokens air-gapped (via QR codes), since it doesn't leave any trace of out-of-band data. If tokens need to be sent over a network, it should always be done over an end-to-end encrypted channel, preferably with self destructing messages.     
                            </li>
                        </ul>
                    </div>
				</div>
			</div>
		</div>
        <p class="p-3 font-bold text-xl">Cashu Basics</p>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				How does the Cashu ecash protocol work?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
						See <a class="link link-secondary" href="http://lconf.gandlaf.com">http://lconf.gandlaf.com</a> or <a class="link link-secondary" href="https://www.youtube.com/watch?v=UNjVc-WYdgE&t=105s">https://www.youtube.com/watch?v=UNjVc-WYdgE&t=105s</a> for an introduction to the Cashu protocol. Or read the Cashu NUTs (Notation, Usage, Terminology) in Github here: <a href="https://github.com/cashubtc/nuts" class="link link-secondary">https://github.com/cashubtc/nuts</a>
					</p>
					
				</div>
			</div>
		</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				Can I create a Cashu account?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        Cashu doesn't have accounts. In fact, you don't need one. All the tokens are stored client-side, on your device.
                    </p>
				</div>
			</div>
		</div>
        <p class="p-3 font-bold text-xl">Cashu Mints</p>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				What is a mint?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        Mints are Lightning node runners, that have decided to let you use their Lightning infrastructure to offer you a service. They will act as a custodian for your satoshis on the Lightning network, while they issue ecash to you, the user. You can think of it as in free banking, where the bank issues their own bank notes that is backed by gold. 
                    </p>
				</div>
			</div>
		</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				Can mints see my IP address?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        Yes. Cashu doesn't protect against network level heuristics per default. Users should take precautions to protect themselves against leaking network meta data by using privacy tools such as tor.
                    </p>
				</div>
			</div>
		</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				Which mint should I choose?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        Right now, Cashu is in its early development. There are not yet any professionally run mints. Find mints for playing around here: <a class="link link-secondary" href="https://mintindex.gandlaf.com">https://mintindex.gandlaf.com</a> 
                    </p>
				</div>
			</div>
		</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				Can I run my own mint?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        Yes you can, and you should! At least for now, as we are still in the early testing phase. You can easily set up a mint by installing the Cashu extension on LNBits. (It's literally 2 clicks) 
                    </p>
				</div>
			</div>
		</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				Can I use tokens from one mint at another mint?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        No. Each mint has their own tokens. You can however use the tokens from one mint and swap them over lightning for tokens from another mint. 
                    </p>
				</div>
			</div>
		</div>
        <p class="p-3 font-bold text-xl">Tokens and Wallets</p>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				What is a Token?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        A "token" (also known as "ecash" or in slang "a nut") is a piece of data that consists of a blindly signed secret. It was signed by the mint with the private key for a specific amount. Therefore a token is an IOU representation of satoshis that are custodied at the mint.
                    </p>
				</div>
			</div>
		</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">
				What is an ecash wallet?
			</div>
			<div class="collapse-content">
				<div class="p-2 flex flex-col gap-3">
					<p>
                        An ecash wallet is a special type of wallet. Ecash wallets are always custodial, since the ecash itself has no value. Cashu ecash represents satoshis, but the keys that control the actual satoshis on-chain are at the mint. So the easiest way to compare an ecash wallet is with another custodial lightning wallet, like wallet of satoshi. 
                    </p>
                    <p>
                        Ecash wallets come with some additional features over traditional custodial wallets, such as:
                    </p>
                    <ul class="list-disc">
                        <li>
                            <b>
                                No accounts: 
                            </b>
                            Since ecash is bearer asset tokens, Cashu doesn't require accounts and balances to keep track of users funds
                        </li>
                        <li>
                            <b>
                                Enhanced privacy: 
                            </b>
                            Due to the fact that there are no accounts, plus the blinding mechanism for creating ecash, users inside a mint cannot be distinguished from one another. 
                        </li>
                        <li>
                            <b>
                                Send/receive at ecash layer: 
                            </b>
                            We can send funds at the ecash layer, without touching the lightning network. This allows for out-of-band or air-gapped value transfers.
                        </li>
                        <li>
                            <b>
                                Store all data locally: 
                            </b>
                            No data has to be stored at any servers.
                        </li>
                    </ul>
				</div>
			</div>
		</div>
	</div>
</div>
