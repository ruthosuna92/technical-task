import { writable } from 'svelte/store';

export const menuFilter = writable(false);

export const minPrice = writable(0);

export const maxPrice = writable(200)