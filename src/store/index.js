import {myData} from '../store';
import data from '../data';

export let information = myData (data);
// console.log($information, 'information here');
export const {about} = information;
