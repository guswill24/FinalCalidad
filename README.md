# 🎮 game-project - Revisión Final

> Proyecto base para el desarrollo de entornos 3D interactivos usando **React + Three.js**, con un enfoque estructurado en **Programación Orientada a Objetos (OOP)**.

---

## 🚀 Descripción

Este repositorio proporciona la base de trabajo para crear un proyecto 3D inmersivo y escalable, utilizando **React** para la integración y estado, junto a **Three.js** para la representación gráfica.

El proyecto está diseñado para que los estudiantes y desarrolladores puedan enfocarse en la construcción progresiva de su entorno interactivo, aplicando principios sólidos de arquitectura y OOP.

---

## 🎯 Objetivos del Proyecto

✅ Aplicar buenas prácticas de **Programación Orientada a Objetos** en el desarrollo de entornos 3D.  
✅ Integrar **Three.js** dentro de un ecosistema moderno basado en React.  
✅ Facilitar la escalabilidad y mantenibilidad mediante una estructura modular y clara.  
✅ Centralizar la gestión del entorno a través de la clase principal `Experience`.  

---

## 📂 Estructura del Proyecto

```
game-project/
├── public/
├── src/
│   ├── components/        # Componentes React
│   ├── styles/            # Estilos y assets
│   ├── Experience/        # Núcleo del entorno 3D
│   │   ├── Experience.js  # Clase principal (Entry Point)
│   │   ├── World/         # Manejo del mundo 3D
│   │   ├── Environment/   # Configuración de luces, cámaras y ambiente
│   │   ├── Resources/     # Carga y gestión de assets
│   │   ├── Sources.js     # Definición de recursos
│   │   ├── Sizes.js      # Gestión de dimensiones responsivas
│   │   ├── Time.js       # Control de tiempo y animaciones
│   │   └── Debug.js      # Herramientas de depuración (opcional)
│   ├── App.jsx           # Integración con React
│   └── main.jsx          # Entry point React
├── package.json
└── README.md
```

---

## 🧩 ¿Qué hace la clase `Experience`?

La clase `Experience` es el **corazón del proyecto**. Su función principal es **gestionar y centralizar** todos los elementos y subclases del entorno 3D, incluyendo:

| Subclase / Módulo | Función                                                  |
|-------------------|----------------------------------------------------------|
| **Sizes**        | Controla el tamaño dinámico de la escena (responsive).    |
| **Time**         | Controla el tiempo y la animación del render.             |
| **World**        | Maneja los elementos y lógica del mundo 3D.               |
| **Environment**  | Configura luces, cámara y ambiente.                      |
| **Resources**    | Carga y gestiona los modelos y texturas.                  |
| **Sources**      | Define la lista de recursos a cargar.                     |

Esto permite mantener un flujo ordenado y facilitar la comunicación entre componentes, evitando dependencias innecesarias.

---

## 🎮 ¿Qué aprenderás trabajando aquí?

✅ Integrar y manipular entornos 3D con Three.js y React  
✅ Implementar conceptos de OOP en un proyecto real  
✅ Gestionar estados, recursos y animaciones de forma eficiente  
✅ Comprender la importancia de la arquitectura modular en proyectos 3D

---

## ⚙️ Instalación y ejecución

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/game-project.git
cd game-project
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto:
```bash
npm run dev
```

---

Aquí te dejo el texto mejor redactado, listo para incluir en el README de tu repositorio, manteniendo la estructura original y mejorando su claridad:

---

## Enlaces de referencia para el desarrollo del proyecto

A continuación, se proporcionan dos enlaces fundamentales que servirán como guía para la correcta ejecución de las actividades del proyecto:

1. **Pruebas unitarias**
   El siguiente enlace explica cómo trabajar las pruebas unitarias en el proyecto a entregar. Cada grupo tiene asignado su propio archivo de trabajo, por lo que pueden seguir las instrucciones detalladas para cumplir con esta parte correctamente:

👉 [Guía de Pruebas Unitarias con Vitest](https://asigcalidadsoftware.vercel.app/modules/unitarias_vite.html)

2. **Configuración de Jenkins y despliegue automático**
   En este segundo enlace se detalla el proceso completo para trabajar con el archivo `Jenkinsfile`:

* Configuración del Jenkinsfile
* Publicación del repositorio en Vercel
* Instalación de plugins en Jenkins
* Creación del pipeline
* Activación del sitio mediante ngrok
* Validación automática de cada commit realizado en el repositorio.

👉 [Guía de Integración Continua con Jenkins](https://asigcalidadsoftware.vercel.app/modules/unitarias_vite_2.html)

---

## Consideraciones importantes

* El archivo `Jenkinsfile` está configurado para ejecutarse en equipos con **sistema operativo Windows**.
  Si algún integrante del grupo trabaja en **Linux**, es recomendable que este proceso se realice desde un equipo Windows para evitar incompatibilidades y avanzar sin contratiempos.

* **Importante**: No deben desarrollar funcionalidades adicionales en el aplicativo entregado. Este proyecto únicamente servirá como base para aplicar los distintos tipos de pruebas de software requeridas:

  * ✅ Pruebas Unitarias (**Vitest**)
  * ✅ Pruebas de Integración (**Postman**)
  * ✅ Pruebas de Sistema (**JMeter**)
  * ✅ Pruebas de Implantación (**Jenkins**)
  * ✅ Pruebas de Aceptación (incluidas en el documento del proyecto)


---

## 🌐 Tecnologías utilizadas

- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [Vite](https://vitejs.dev/) (para empaquetado)
- Programación Orientada a Objetos (POO)
- Estructura modular y escalable

---

## 📄 Licencia

Este proyecto es de uso académico y formativo para estudiantes y desarrolladores que deseen aprender sobre entornos 3D aplicados a React y OOP.

---
## 🧑 Autor
- Gustavo Willyn Sánchez Rodríguez
- email: guswillsan@gmail.com
- Actualizado el 15/05/2025
- Ajustado con **ngrok**