# Task-CLI

Task-CLI es una aplicación de línea de comandos para gestionar tus tareas de manera sencilla y eficiente.

## Características

- **Agregar tareas:** Añade nuevas tareas con una descripción.
- **Actualizar y eliminar tareas:** Actualiza la descripción de las tareas o elimínalas cuando ya no sean necesarias.
- **Gestionar el estado de las tareas:** Marca las tareas como "en progreso" o "completadas".
- **Listar tareas:** Visualiza todas las tareas o filtra por estado.

## Requisitos

Este proyecto ha sido creado siguiendo los requisitos y lineamientos obtenidos de la [guía de proyecto Task Tracker](https://roadmap.sh/projects/task-tracker).

## Instalación

Para instalar y ejecutar `task-cli`, sigue los siguientes pasos:

1.  Instala las dependencias:
    ```bash
    npm install
    ```
2.  Linkear AppCLI:
    ```bash
    npm link
    ```
3.  Configura los permisos de ejecución para el script CLI:
    ```bash
    chmod +x bin/cli.js
    ```

## Uso

### Agregar una nueva tarea

```bash
task-cli add "Buy groceries"
```

**Output:** Task added successfully (ID: 1)

### Actualizar una tarea existente

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

### Eliminar una tarea

```bash
task-cli delete 1
```

### Marcar una tarea como "en progreso"

```bash
task-cli mark-in-progress 1
```

### Marcar una tarea como "completada"

```bash
task-cli mark-done 1
```

### Listar todas las tareas

```bash
task-cli list
```

### Listar tareas por estado

```bash
task-cli list done
```

```bash
task-cli list todo
```

```bash
task-cli list in-progress
```
