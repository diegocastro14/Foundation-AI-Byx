# Monitor de Pasta com Conversão de Texto

Script Node.js que monitora uma pasta `entrada/` e converte automaticamente arquivos `.txt` para maiúsculas, salvando em `saida/`.

## Funcionalidades

- ✅ Monitora a pasta `entrada/` em tempo real
- ✅ Converte conteúdo de arquivos `.txt` para maiúsculas
- ✅ Salva resultado em `saida/` com mesmo nome
- ✅ Processa arquivos já existentes ao iniciar
- ✅ Evita reprocessamento de arquivos duplicados

## Uso

### Iniciar o monitor

```bash
node monitor-folder.js
```

### Criar arquivo de teste

```bash
echo "Olá mundo" > entrada/teste.txt
```

O script detectará automaticamente e criará:
```
saida/teste.txt → "OLÁ MUNDO"
```

## Estrutura de Pastas

```
.
├── entrada/           # Pasta de entrada (monitorada)
├── saida/             # Pasta de saída (criada automaticamente)
├── monitor-folder.js  # Script principal
└── MONITOR_README.md  # Este arquivo
```

## Testes Realizados

✓ Conversão de arquivo existente (`exemplo.txt`)
✓ Monitoramento de novo arquivo criado durante execução (`teste2.txt`)
✓ Acentuação preservada corretamente

## Saída de Exemplo

```
📁 Monitorando pasta: /path/to/entrada
📁 Saída será em: /path/to/saida
Aguardando novos arquivos .txt...

✓ Processado: exemplo.txt
  Entrada: /path/to/entrada/exemplo.txt
  Saída: /path/to/saida/exemplo.txt
```

## Requisitos

- Node.js (qualquer versão moderna)
- Sem dependências externas

## Notas

- O script ignora arquivos que não terminam em `.txt`
- Arquivos já processados não são reprocessados
- Pequeno delay (100ms) garante que arquivo seja completamente escrito antes de processar
