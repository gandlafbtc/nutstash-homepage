import { Icon } from "../model/Icon"
import type { Feature } from "../model/Feature"

const features: Array<Feature> = [
    {
        title: "Mint tokens at any Cashu Mint",
        text: "Nutstash has multiple Mint support. You can as many to your Wallet as you want!",
        imageUrl: '/multimint.png',
        icon: Icon.MINT
    },
    {
        title: "Send and recieve Tokens from any Cashu Mint",
        text: "Use the Wallet to receive and send tokens from any Mint.",
        imageUrl: '/wallet.png',
        icon: Icon.WALLET
    },
    {
        title: "Pay Lightning Invoices anonymously",
        text: "Hide in the crowd. In Cashu, you don't have a balance. You don't have an account. All you have is Tokens which you can spend on the Lightning network",
        imageUrl: '/melt.png',
        icon: Icon.LIGHTNING
    }
]

export {features}