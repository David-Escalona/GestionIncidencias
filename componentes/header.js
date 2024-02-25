// Creamos un objeto y lo exportamos
export const header = {
    // Creamos la plantilla que es el manú de arriba de la página
    template: `<nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <button class="btn btn-secondary ms-2">PANEL</button>
          <button class="btn btn-secondary ms-2">LOGIN</button>
          <button class="btn btn-secondary ms-2">REGISTRO</button>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
        </div>
      </div>
    </nav>`,
    
    // Creamos el script de la plantilla, es un consolelog
    script: () => {
      console.log('header inyectado')
    }
  
  }
  