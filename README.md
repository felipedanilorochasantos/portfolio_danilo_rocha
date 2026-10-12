# Danilo Rocha — Portfólio Angular 17

Portfólio responsivo para apresentar serviços, projetos, experiência, habilidades e contato. Tema claro/escuro com preferência salva e download do currículo original.

## Executar

Use Node.js 20, compatível com Angular 17.

```sh
npm install
npm start
```

Abra http://localhost:4200. Se o servidor anterior estava aberto durante a migração, encerre-o com Ctrl+C e execute npm start novamente.

```sh
npm run build
npm test -- --browsers=ChromeHeadless
```

Produção: dist/portfolio/browser. Build e 10 testes Jasmine/Karma passaram. Os testes verificam a renderização, o conteúdo, o link de download e a persistência do tema.

## Estrutura

- src/main.ts: bootstrap.
- src/app/app.config.ts: configuração standalone.
- src/app/components/: header, hero, about, projects, experience, skills, contact e footer, cada um com TS, HTML, SCSS e SPEC.
- src/app/data/portfolio.data.ts: informações profissionais.
- src/app/core/services/theme.service.ts: preferência de tema.
- src/styles.scss: estilos compartilhados.
- public/Profile.pdf: currículo original.

O polyfill zone.js está configurado no Angular CLI, corrigindo a falha NG0908.

## Conteúdo e referências

Informações profissionais baseadas no currículo. São Paulo, casamento e três filhos foram informados pelo usuário. As experiências não exibem datas. Não há métricas inventadas, depoimentos ou links fictícios. Ilustrações em CSS estão identificadas e não representam telas internas das empresas.

Referências de composição: https://brittanychiang.com/ e https://bruno-simon.com/. Design próprio, sem copiar conteúdo ou imagens.

Angular 17 foi mantido conforme solicitado. A instalação reportou 62 vulnerabilidades nas dependências. Não foi aplicada atualização forçada que alteraria a versão do framework. A validação passou no Node 22 instalado nesta máquina, mas a versão compatível recomendada para desenvolvimento é Node 20.
