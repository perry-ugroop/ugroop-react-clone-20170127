#!/bin/bash

if [[ ! -e /data/teamcity_agent/conf/buildAgent.properties ]] ; then
    cp -v /opt/buildagent/conf_dist/* /data/teamcity_agent/conf/
    mv /data/teamcity_agent/conf/buildAgent.dist.properties /data/teamcity_agent/conf/buildAgent.properties
    cd /data/teamcity_agent/conf/
    patch -p0 buildAgent.properties < buildAgent.properties.patch

fi

/opt/buildagent/bin/agent.sh start
sleep 20

tail -f /dev/null


