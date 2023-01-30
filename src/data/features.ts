import { Icon } from "../model/Icon"
import type { Feature } from "../model/Feature"

const features: Array<Feature> = [
    {
        title: "Mint tokens at any Cashu mint",
        text: "Nutstash supports multiple mints at the same time. You can add as many mints to your wallet as you want!",
        imageUrl: '/multimint.png',
        icon: Icon.MINT
    },
    {
        title: "Send and receive tokens from any Cashu mint",
        text: "Use the wallet to receive and send tokens from any mint.",
        imageUrl: '/wallet.png',
        icon: Icon.WALLET
    },
    {
        title: "Pay Lightning invoices anonymously",
        text: "Hide in the crowd. In Cashu, you don't have a balance. You don't have an account. All you have is Cashu tokens, which you can spend on the Lightning Network.",
        imageUrl: '/melt.png',
        icon: Icon.LIGHTNING
    },
    {
        title: "Send and receive tokens via Nostr",
        text: "Activate Nostr in the settings in order to send and receive tokens. You can generate throwaway keys or link up your Nostr handle via an extension like nos2x.",
        imageUrl: '/send-nostr.png',
        icon: Icon.SEND
    },
    {
        title: "Swap tokens between mints",
        text: "Exchange tokens from one mint for tokens from another mint, by performing a Lightning swap.",
        imageUrl: '/mint-swap.png',
        icon: Icon.SWAP
    },
    {
        title: "More to come, soonish ™️",
        text: "Stay tuned for updates on nutstash and the broader cashu ecosystem.",
        imageUrl: '/nutstash.svg',
        icon: Icon.LIGHTNING
    }
]

export {features}