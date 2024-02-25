import { header } from './componentes/header.js'
import { vistaComentarios } from './componentes/vistaComentarios.js'

document.querySelector('header').innerHTML = header.template
header.script();

document.querySelector('main').innerHTML = vistaComentarios.template
vistaComentarios.script();