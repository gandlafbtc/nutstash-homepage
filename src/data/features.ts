import { Icon } from "../model/Icon"
import type { Feature } from "../model/Feature"

const features: Array<Feature> = [
    {
        title: "Mint tokens at any Cashu Mint",
        text: "Nutstash supports multiple mints at the same time. You can add as many Mints to your Wallet as you want!",
        imageUrl: '/multimint.png',
        icon: Icon.MINT
    },
    {
        title: "Send and receive Tokens from any Cashu Mint",
        text: "Use the wallet to receive and send Tokens from any Mint.",
        imageUrl: '/wallet.png',
        icon: Icon.WALLET
    },
    {
        title: "Pay Lightning Invoices anonymously",
        text: "Hide in the crowd. In Cashu, you don't have a balance. You don't have an account. All you have is Cashu Tokens, which you can spend on the Lightning Network.",
        imageUrl: '/melt.png',
        icon: Icon.LIGHTNING
    }
]

export {features}