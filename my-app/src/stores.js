import { writable } from 'svelte/store';
import therapistsData from "../src/data/therapists.json"
let therapists = therapistsData
therapists = therapists.map((therapist) => {
    return {
        ...therapist,
        price: Math.floor(Math.random() * 200)
    }
})

export const allTherapists = writable(therapists);

export const allTherapistsBackUp = writable([...therapists])

export const therapistById = writable({})

export const menuFilter = writable(false);

export const menuSorter = writable(false)

export const appointmentType = writable({
    checked: false,
    checked1: false
})

export const appointmentChecked = writable(false)

export const appointmentChecked1 = writable(false)

export const minPrice = writable(0);

export const maxPrice = writable(200)

export const minExp = writable(0)

export const maxExp = writable(25)