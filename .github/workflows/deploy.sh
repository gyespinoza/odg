name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'  # Usar Node.js 16 para evitar problemas de OpenSSL

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run build
        env:
          NODE_OPTIONS: --openssl-legacy-provider

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist  # La carpeta que quieres publicar
          branch: gh-pages  # La rama donde se desplegará