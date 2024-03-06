

export const panel = {
    template://html 
    `
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
            <td>123456789</td>
            <td>1/01/2021</td>
            <td>T1</td>
            <td>DAW1</td>
            <td>PC1</td>
            <td>Error</td>
            <td>Paco Mermela</td>
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
            <td>123456789</td>
            <td>2/02/2022</td>
            <td>T2</td>
            <td>DAW2</td>
            <td>PC2</td>
            <td>Erorr</td>
            <td>Ana Bohuelo</td>
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
            <td>12345789</td>
            <td>1/04/2022</td>
            <td>5/05/2022</td>
            <td>T1</td>
            <td>DAW2</td>
            <td>PC1</td>
            <td>Problema de conexión a Internet</td>
            <td>Ana Bohuelo</td>
            
            
        </table>
    </div>
    `,
    script: () =>{
    }
}