import { allTherapists } from '../../../stores';

/** @type {import('./$types').PageLoad} */


export function load({ params }) {
    
    console.log(params)
    return {
        title: 'Hello world!',
        content: params.therapistId
    };
}
