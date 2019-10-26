FROM openjdk:13-jdk
COPY ./rapilyticsservice /src/com/example/rapilyticsservice
COPY ./rapilyticsservice .
WORKDIR /src/com/example/rapilyticsservice
RUN javac RapilyticsService.java
CMD ["java", "RapilyticsService"]