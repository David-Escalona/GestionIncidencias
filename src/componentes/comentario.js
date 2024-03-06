import { comentarioBD } from "../bd/bd.js";

// Definición del componente comentario
export const comentario = (nombre, fecha, comentario) => {
    // Atributo `template` con la estructura HTML del prototipo
    const template = `
      <div class="mt-3 card p-3">
        <h5 class="text-end">Autor: <span>${nombre}</span><span class="ms-4">${fecha}</span></h5>
        <p>${comentario}</p>
      </div>`;
    
    // Método `script()` que inyectará el nombre, fecha y comentario en su template correspondiente
    const script = (nombre, fecha, comentario) => {
      // Reemplazamos los valores en el template
      const templateConValores = template
        .replace('${nombre}', nombre)
        .replace('${fecha}', fecha)
        .replace('${comentario}', comentario);
      
      // Retornamos el template con los valores inyectados
      return templateConValores;
    };
  
    // Retornamos el método script()
    return script(nombre, fecha, comentario);
  };