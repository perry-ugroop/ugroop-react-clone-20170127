FROM jetbrains/teamcity-server:latest
MAINTAINER Perry Valdez <perry.valdez@ugroop.com.au>
ARG DEBIAN_FRONTEND=noninteractive

COPY startup.sh /opt/bin/

RUN chmod 755 /opt/bin/startup.sh && touch /opt/bin/startup_firsttime.dat

RUN apt-get update && \
    apt-get install -y mysql-server mysql-client libmysql-java

RUN mv /opt/teamcity/webapps/ROOT  /opt/teamcity/webapps/teamcity

VOLUME ["/data/teamcity_server/datadir", "/opt/teamcity/logs", "/var/lib/mysql", "/var/log/mysql"]

EXPOSE 8111

ENTRYPOINT ["/opt/bin/startup.sh"]

