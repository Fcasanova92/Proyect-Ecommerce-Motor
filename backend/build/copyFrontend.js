import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fse from 'fs-extra';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Definir rutas de origen y destino
const sourceDir = join(__dirname,'../../frontend');
const destDir = join(__dirname, '../public');

// Copiar contenido del directorio fuente al destino
fse.copy(sourceDir, destDir, err => {
  if (err) {
    console.error('Error copying files:', err);
  } else {
    console.log('Files copied successfully.');
  }
});