FROM nginx
ARG TEAMCITY_SERVER_IP

COPY startup.sh /opt/bin/

RUN cp -R /etc/nginx/ /etc/nginx.default/
RUN cp -R /usr/share/nginx/ /usr/share/nginx.default/

COPY default.conf.patch /etc/nginx.default/conf.d/

RUN apt-get update && apt-get install -y patch

RUN cd /etc/nginx.default/conf.d/ \
    && patch -p1 default.conf < default.conf.patch \
    && mv default.conf default.conf.tmp \
    && cat default.conf.tmp | sed "s/\${TEAMCITY_SERVER_IP}/$TEAMCITY_SERVER_IP/" > default.conf \
    && rm -f default.conf.tmp default.conf.patch

EXPOSE 80 443

VOLUME ["/etc/nginx", "/usr/share/nginx", "/var/log/nginx"]

ENTRYPOINT ["/opt/bin/startup.sh"]

