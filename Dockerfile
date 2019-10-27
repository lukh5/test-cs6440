# FROM openjdk:13-jdk
# COPY ./rapilyticsservice /src/com/example/rapilyticsservice
# WORKDIR /src/com/example/rapilyticsservice
# RUN javac RapilyticsService.java
# CMD ["java", "RapilyticsService"]

FROM nginx:latest
# COPY ./rapilyticsservice /usr/share/nginx/html
COPY ./asclepius_frontend /asclepius_frontend
# WORKDIR /asclepius_frontend
# RUN npm run build
COPY /asclepius_frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
