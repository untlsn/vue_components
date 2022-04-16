# Vitesse template with my overrides

- My eslint config
- Clear index.vue
- WindiCSS (Tailwind config for WebStorm hints)
- Remove auto open
- Sass
- Remove comments and READMES [thay stay in vitesse](https://github.com/antfu/vitesse/tree/feat/global-components)
- GH Pages main
- Eslint ignore components.d.ts
- Lite like (no md, i18n)
- Global css bundle via $css
- Cypress for Vue components testing

## Checklist

Think about

- [ ] PWA
- [ ] Pinia Store

Change this before use

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes
- [ ] Extend tailwind config

Change this after use

- [ ] Change base in vite to you repository name
- [ ] Build page
- [ ] Create gh-pages

```bash
git add dist -f
git commit -m "add dist"
git subtree pull --prefix=dist origin gh-pages   
git push -u origin gh-pages
```

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
