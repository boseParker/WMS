# Simple Dockerfile that uses pre-built WAR
FROM eclipse-temurin:8-jre-jammy

LABEL maintainer="support@openboxes.com"
EXPOSE 8080

# Install curl for healthcheck
RUN apt-get update && apt-get install curl -y

# Default flags for the JVM. These can be replaced at the runtime.
ENV JAVA_TOOL_OPTIONS="-Xms1024m -Xmx1024m -XX:+UseParallelGC -Djava.awt.headless=true"

# Create openboxes user and group
RUN useradd --user-group --shell /bin/false  --home-dir /app openboxes
WORKDIR /app

# Create and chown 'uploads' directory for the OB app
RUN mkdir uploads && chown openboxes:openboxes uploads/

# Copy the pre-built WAR file
COPY ../build/libs/openboxes.war ./openboxes.war

USER openboxes

# Directly execute the WAR file, which runs the application with an embedded Tomcat servlet
CMD java -Dgrails.env=prod -jar /app/openboxes.war
