# FROM openjdk:13-jdk
# COPY ./rapilyticsservice /src/com/example/rapilyticsservice
# WORKDIR /src/com/example/rapilyticsservice
# RUN javac RapilyticsService.java
# CMD ["java", "RapilyticsService"]

FROM nginx:latest
COPY ./rapilyticsservice /usr/share/nginx/html