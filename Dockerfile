# FROM openjdk:13-jdk
# COPY ./rapilyticsservice /src/com/example/rapilyticsservice
# WORKDIR /src/com/example/rapilyticsservice
# RUN javac RapilyticsService.java
# CMD ["java", "RapilyticsService"]

FROM nginx:latest
COPY ./asclepius_frontend /asclepius_frontend
COPY /asclepius_frontend/build /usr/share/nginx/html
COPY /asclepius_frontend/build /etc/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
# COPY nginx/nginx.conf /usr/share/nginx/html/nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
