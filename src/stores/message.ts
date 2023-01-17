import { browser } from '$app/environment';

import { writable } from 'svelte/store';

const initialValueSting: string = browser ? window.localStorage.getItem('message') ?? 'nutstash is still in early alpha! Please use only small amounts and if possible connect with your own mint!': ''

const initialValue : string = initialValueSting

const message  = writable<string>(initialValue);

message.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('message', value);
  }
});

export {message};