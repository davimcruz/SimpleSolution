# Usar a imagem oficial do Node.js como base
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código do projeto
COPY . .

# Construir o projeto
RUN npm run build

# Expor a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar o servidor usando o caminho completo do next
CMD ["./node_modules/.bin/next", "start"]