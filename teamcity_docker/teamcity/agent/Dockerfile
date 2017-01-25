FROM jetbrains/teamcity-agent:latest
MAINTAINER Perry Valdez <perry.valdez@ugroop.com.au>
ARG DEBIAN_FRONTEND=noninteractive
ARG TEAMCITY_SERVER_URL

COPY startup.sh /opt/bin/
COPY buildAgent.properties.patch /opt/buildagent/conf_dist/buildAgent.properties.patch.tmp
RUN chmod 755 /opt/bin/startup.sh && chmod 755 /opt/buildagent/bin/*.sh
RUN cat /opt/buildagent/conf_dist/buildAgent.properties.patch.tmp | \
    sed "s|\${TEAMCITY_SERVER_URL}|$TEAMCITY_SERVER_URL|" > /opt/buildagent/conf_dist/buildAgent.properties.patch

RUN curl -sL https://deb.nodesource.com/setup_6.x -o /opt/bin/nodesource_setup.sh  && \
    chmod 755 /opt/bin/nodesource_setup.sh && \
    /opt/bin/nodesource_setup.sh && \
    apt-get install -y nodejs

EXPOSE 9090

VOLUME ["/data/teamcity_agent/conf", "/opt/buildagent/logs", "/opt/buildagent/temp", "/opt/buildagent/work", "/opt/buildagent/system", "/opt/buildagent/update"]

ENTRYPOINT ["/opt/bin/startup.sh"]

