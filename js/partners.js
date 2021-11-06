import { fillDB } from './data.js';
import { renderItems } from './menu.js';

const partners = [];
fillDB(partners, `partners`, renderItems);