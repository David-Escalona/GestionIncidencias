// Importamos el header
import { header } from './componentes/header.js'

// Inyectamos en el header el la plantilla del menú de arriba
document.querySelector('header').innerHTML = header.template
// Ejecutamos el script del header, en éste caso en un consolelog
header.script()