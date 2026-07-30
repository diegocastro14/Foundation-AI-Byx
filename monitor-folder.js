#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ENTRADA_DIR = path.join(__dirname, 'entrada');
const SAIDA_DIR = path.join(__dirname, 'saida');

// Garantir que as pastas existem
[ENTRADA_DIR, SAIDA_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Manter registro de arquivos já processados
const processedFiles = new Set();

function processFile(filename) {
  if (!filename.endsWith('.txt')) return;
  if (processedFiles.has(filename)) return;

  const inputPath = path.join(ENTRADA_DIR, filename);
  const outputPath = path.join(SAIDA_DIR, filename);

  // Aguardar um pouco para garantir que o arquivo foi completamente escrito
  setTimeout(() => {
    try {
      if (!fs.existsSync(inputPath)) return;

      const content = fs.readFileSync(inputPath, 'utf-8');
      const uppercase = content.toUpperCase();

      fs.writeFileSync(outputPath, uppercase, 'utf-8');
      processedFiles.add(filename);

      console.log(`✓ Processado: ${filename}`);
      console.log(`  Entrada: ${inputPath}`);
      console.log(`  Saída: ${outputPath}`);
    } catch (error) {
      console.error(`✗ Erro ao processar ${filename}:`, error.message);
    }
  }, 100);
}

// Monitorar mudanças na pasta entrada/
console.log(`📁 Monitorando pasta: ${ENTRADA_DIR}`);
console.log(`📁 Saída será em: ${SAIDA_DIR}`);
console.log('Aguardando novos arquivos .txt...\n');

fs.watch(ENTRADA_DIR, (eventType, filename) => {
  if (eventType === 'rename' || eventType === 'change') {
    processFile(filename);
  }
});

// Processar arquivos já existentes ao iniciar
fs.readdirSync(ENTRADA_DIR).forEach(filename => {
  processFile(filename);
});
