// Definición de una clase básica
class Persona {
    // El constructor se ejecuta cuando se crea una nueva instancia
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método que describe la persona
    describir() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

    // Método que aumenta la edad de la persona
    cumpleaños() {
        this.edad += 1;
        console.log(`¡Feliz cumpleaños! Ahora tienes ${this.edad} años`);
    }
}

// Crear una instancia de la clase Persona
let persona1 = new Persona("Victor", 30);

// Se llama a los métodos de la clase
persona1.describir();
persona1.cumpleaños();

// Herencia: Clase Estudiante que extiende de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // Llamamos al constructor de la clase base (Persona)
        this.curso = curso;
    }

    // Método adicional en la clase Estudiante
    estudiar() {
        console.log(`${this.nombre} está estudiando el curso ${this.curso}.`);
    }
}

// Crear una instancia de la clase Estudiante
let estudiante1 = new Estudiante("Juan", 20, "Matemáticas");

// Llamar a los métodos de la clase Estudiante
estudiante1.describir(); // Método heredado de Persona
estudiante1.estudiar(); // Método específico de Estudiante
