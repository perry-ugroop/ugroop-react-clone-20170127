#!/bin/bash

if [[ ! -e "/etc/nginx/nginx.conf" ]] ; then
    cp -a /etc/nginx.default/* /etc/nginx/
fi

if [[ ! -d "/usr/share/nginx/html" ]] ; then
    cp -a /usr/share/nginx.default/* /usr/share/nginx/
fi

nginx -g 'daemon off;'

