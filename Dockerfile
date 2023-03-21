FROM ubuntu:latest

RUN apt update
RUN apt install nginx -y

COPY dist /var/www/html

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]