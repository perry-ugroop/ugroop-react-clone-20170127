#!/bin/bash

#--- User configurable settings ---
MYSQL_ROOT_PASS=1day@Th3Bar...
TEAMCITY_PASS=ciTy.t3@m

#--- DO NOT TOUCH ANYTHING BELOW ---
#-----------------------------------

TEAMCITY_DATADIR=/data/teamcity_server/datadir
TEAMCITY_DB=teamcity_db
TEAMCITY_USER=teamcity_user

JDBC_DIR=$TEAMCITY_DATADIR/lib/jdbc
CONFIG_DIR=$TEAMCITY_DATADIR/config
JAR_FILE=/usr/share/java/mysql-connector-java-5.1.32.jar
DB_DIR=/var/lib/mysql

if [[ ! -d "$JDBC_DIR" ]] ; then 
    mkdir -p "$JDBC_DIR"
    cp "$JAR_FILE" "$JDBC_DIR"
fi

if [[ ! -d "$CONFIG_DIR" ]] ; then 
    mkdir -p "$CONFIG_DIR"
    echo "connectionProperties.user=$TEAMCITY_USER" > "$CONFIG_DIR/database.properties"
    echo "connectionProperties.password=$TEAMCITY_PASS" >> "$CONFIG_DIR/database.properties"
    echo "connectionUrl=jdbc\:mysql\://localhost/$TEAMCITY_DB" >> "$CONFIG_DIR/database.properties"
fi


MYSQL_INIT=0
if [[ ! -f "$DB_DIR/mysql/user.MYD" ]] ; then 
    /usr/bin/mysql_install_db &> /dev/null
    MYSQL_INIT=1
fi

/usr/bin/mysqld_safe &
sleep 20

if [[ -f /opt/bin/startup_firsttime.dat || $MYSQL_INIT ]] ; then
    mysql -u root -e "create database $TEAMCITY_DB collate utf8_bin;" mysql
    mysql -u root -e "create user '$TEAMCITY_USER'@'localhost' identified by '$TEAMCITY_PASS';" mysql
    mysql -u root -e "grant all on $TEAMCITY_DB.* to '$TEAMCITY_USER'@'localhost';" mysql
    mysql -u root -e "grant process on *.* to '$TEAMCITY_USER'@'localhost';" mysql
    mysql -u root -e "update user set password=PASSWORD('$MYSQL_ROOT_PASS') where User='root'; flush privileges;" mysql
fi

rm -f /opt/bin/startup_firsttime.dat

/opt/teamcity/bin/teamcity-server.sh start
sleep 20

tail -f /dev/null

