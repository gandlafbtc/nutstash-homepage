import type { QnA } from "../model/QnA"

const risks: Array<QnA> = [
    {
        title: 'Nutstash is an unfinished product.',
        text: "Nutstash is in early development. The tools and protocols in use are cutting edge, which means they probably haven't been tested enough to be deemed secure. Also, errors might occur that make the app unusable. Backup your tokens, and if all else fails, recover them from the browsers local storage.",
        tags: ["WIP","unfinished"]
    },
    {
        title: 'Custodial risk, mints hold the keys.',
        text: "In nutstash, the user of the wallet does not hold the keys to the Bitcoin. The Bitcoin custodian is the mint. This means, that if you don't trust a mint, you should probably not interact with it.",
        tags: ['custody', 'rug pull', 'malicious mint']
    },
    {
        title: 'Loss of tokens.',
        text: "The tokens in Cashu are bearer tokens. This means, if you loose access to your tokens, there is no way to recover them. Nutstash stores your tokens in the local storage of the browser. This means, you shouldn't use a private window, or the cache might get cleared. Also, before deleting your browser history, you should backup your tokens.",
        tags: ['loss of tokens', 'bearer']
    },
    {
        title: 'Risk of theft.',
        text: "The tokens in nutstash are stored in the browsers local storage. Unencrypted. If someone has access to that browser, they can steal the tokens.",
        tags: ['theft', 'loss of tokens']
    },
    {
        title: 'Risk of data leakage.',
        text: "Yes, Cashu has great privacy features. But if you're connecting to the mint, they have access to the IP you're connecting with. This can be mitigated by using a proxy, VPN or TOR browser",
        tags: ['data', 'privacy']
    },
    
]

export { risks }