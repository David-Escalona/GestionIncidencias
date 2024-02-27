(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const o={template:`
    <div class="container mt-5 ">
        <h1>Administración de incidencias</h1>
        <h2 class="mt-5">Tickets pendientes</h2>
        <table class="table mt-4">
        <thead>
            <tr>
            <th>Código</th>
            <th>Fecha</th>
            
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>123459</td>
            <td>18/04/2023</td>
            <td>T6</td>
            <td>DAW1</td>
            <td>PC3</td>
            <td>Error de impresora</td>
            <td>Ana Martínez</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
            </td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>

            </tr>
            <tr>
            <td>123460</td>
            <td>19/04/2023</td>
            <td>T8</td>
            <td>DAW2</td>
            <td>PC4</td>
            <td>Problema de acceso a archivos</td>
            <td>Pedro Gómez</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
            </td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>

            </tr>
            <tr>
            <td>123461</td>
            <td>20/04/2023</td>
            <td>T6</td>
            <td>DAW1</td>
            <td>PC1</td>
            <td>Aplicación se cierra inesperadamente</td>
            <td>Sofía Fernández</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
            </td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>

            </tr>
            <tr>
            <td>123462</td>
            <td>21/04/2023</td>
            <td>T7</td>
            <td>DAW2</td>
            <td>PC2</td>
            <td>Problema de conexión a la red</td>
            <td>Luis Torres</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
            </td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>

            </tr>
            <tr>
            <td>123463</td>
            <td>22/04/2023</td>
            <td>T8</td>
            <td>DAW1</td>
            <td>PC3</td>
            <td>Archivos corruptos</td>
            <td>Carolina Ramírez</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
            </td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>

            </tr>
        </tbody>
        </table>
        <h2 class="mt-5">Tickets resueltos</h2>
        <table class="table mt-4">
        <thead>
            <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Fecha resuelto</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
            <td>123457</td>
            <td>16/04/2023</td>
            <td>15/05/2023</td>
            <td>T7</td>
            <td>DAW2</td>
            <td>PC1</td>
            <td>Problema de conexión a Internet</td>
            <td>Maria López</td>
            
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>
            </tr>
            <tr>
            <td>123458</td>
            <td>17/04/2023</td>
            <td>15/05/2023</td>
            <td>T8</td>
            <td>DAW1</td>
            <td>PC2</td>
            <td>Pantalla en blanco</td>
            <td>Juan Rodríguez</td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>
            </tr>
            <tr>
            <td>123459</td>
            <td>18/04/2023</td>
            <td>15/05/2023</td>
            <td>T8</td>
            <td>DAW1</td>
            <td>PC3</td>
            <td>Error de impresora</td>
            <td>Ana Martínez</td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>
            </tr>

        </tbody>
        </table>
    </div>
    `,script:()=>{}},d={template:`
    <div class="container">
                <h1 class="mt-5 text-center">Registro</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input id="nombre" type="text" class="form-control" />
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" type="text" class="form-control" />
                        <label for="email" class="form-label">Email:</label>
                        <input id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <a class="btn btn-primary w-100 mt-3" href="#">Enviar</a>
                    </form>
                </div>
            </div>
    `,script:()=>{}},l={template:`
    <div class="container">
                <h1 class="mt-5 text-center">Inicia sesión</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <div class="form-check mt-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label class="form-check-label" for="flexCheckChecked">
                                Recordar sesión
                            </label>
                        </div>
                        <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                        <a class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
                    </form>
                    <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
                        >¿Eres nuevo? Regístrate</a
                    >
                </div>
            </div>
    `,script:()=>{}},r={template:`
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <button id="botonPanel" class="btn btn-secondary ms-2">PANEL</button>
          <button id="botonLogin" class="btn btn-secondary ms-2">LOGIN</button>
          <button id="botonRegistro" class="btn btn-secondary ms-2">REGISTRO</button>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
        </div>
      </div>
    </nav>`,script:()=>{}};document.querySelector("header").innerHTML=r.template;document.querySelector("main").innerHTML=o.template;const c=document.querySelector("#botonRegistro");c.addEventListener("click",b);function b(){event.preventDefault(),document.querySelector("main").innerHTML=d.template,document.getElementById("botonLogin").className=" btn btn-secondary ms-2",document.getElementById("botonRegistro").className="d-none",document.getElementById("botonPanel").className="btn btn-secondary ms-2"}const m=document.querySelector("#botonLogin");m.addEventListener("click",u);function u(){event.preventDefault(),document.querySelector("main").innerHTML=l.template,document.getElementById("botonLogin").className="d-none",document.getElementById("botonRegistro").className="btn btn-secondary ms-2",document.getElementById("botonPanel").className="btn btn-secondary ms-2"}const h=document.querySelector("#botonPanel");h.addEventListener("click",p);document.getElementById("botonPanel").className="d-none";function p(){event.preventDefault(),document.querySelector("main").innerHTML=o.template,document.getElementById("botonLogin").className=" btn btn-secondary ms-2",document.getElementById("botonRegistro").className="btn btn-secondary ms-2",document.getElementById("botonPanel").className="d-none"}
