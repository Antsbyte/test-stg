const config = {
    // Indica que estás utilizando un entorno Node.js para las pruebas
    testEnvironment: 'node',
    // Directorio donde Jest buscará los archivos de prueba
    roots: ['<rootDir>/src'],
    // Extensiones de archivo que Jest reconocerá para las pruebas
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    // Patrón para identificar los archivos de prueba
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    // Transpila archivos TypeScript antes de ejecutarlos
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest",
    },
    // Establece una carpeta para guardar los resultados de las pruebas
    coverageDirectory: 'coverage',
    // Opcional: Si usas módulos ES en Node.js (requiere Node 12+)
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };

export default config;