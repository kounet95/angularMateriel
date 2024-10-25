# Étape 1 : Construction
FROM node:latest AS build

WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Étape 2 : Serveur
FROM nginx:latest

# Copier les fichiers construits depuis l'étape 1
COPY --from=build /usr/local/app/dist/frontangular/browser /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
