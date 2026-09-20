# Atividade Prática — Modelo ENADE — TypeScript

Cada questão está em um arquivo independente, de Q01.ts a Q30.ts.

## Como executar

Com TypeScript instalado:

```bash
npx tsx Q01.ts
```

Troque Q01.ts pelo arquivo desejado.

Também é possível compilar com:

```bash
npx tsc Q01.ts
node Q01.js
```

## Observações

- Os códigos priorizam funções, tipos/interfaces, condicionais e laços conforme solicitado no enunciado.
- Q04 aceita uma string na função para permitir a simulação de uma entrada inválida, mesmo que o tipo union restrinja os perfis válidos.
- Q14 não guarda nenhuma senha real; o array usa apenas `true`/`false` para simular sucesso ou falha.
- Q29 considera pagamento insuficiente quando o pagamento mensal não supera os juros daquele mês.
