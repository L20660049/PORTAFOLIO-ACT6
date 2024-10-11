// Definir las tasas de conversión
const conversiones = {
    metros: {
      kilometros: 0.001,
      millas: 0.000621371,
      metros: 1
    },
    kilometros: {
      metros: 1000,
      millas: 0.621371,
      kilometros: 1
    },
    millas: {
      metros: 1609.34,
      kilometros: 1.60934,
      millas: 1
    }
  };
  
  // Función para realizar la conversión
  function convertir() {
    // Obtener los valores ingresados por el usuario
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadEntrada = document.getElementById('unidad-entrada').value;
    const unidadSalida = document.getElementById('unidad-salida').value;
  
    // Verificar si el valor es un número válido
    if (isNaN(valor)) {
      document.getElementById('resultado').textContent = "Por favor, ingresa un valor válido.";
      return;
    }
  
    // Realizar la conversión
    const tasaConversion = conversiones[unidadEntrada][unidadSalida];
    const resultado = valor * tasaConversion;
  
    // Mostrar el resultado
    document.getElementById('resultado').textContent = `Resultado: ${resultado} ${unidadSalida}`;
  }
  
  // Escuchar cambios en los campos de entrada y salida para hacer la conversión en tiempo real
  document.getElementById('valor').addEventListener('input', convertir);
  document.getElementById('unidad-entrada').addEventListener('change', convertir);
  document.getElementById('unidad-salida').addEventListener('change', convertir);
  