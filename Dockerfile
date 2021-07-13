# specify a suitable source image

WORKDIR /app

COPY package*.json ./

RUN npm ci

# copy the application source code files

EXPOSE 3000

# specify the command which runs the application