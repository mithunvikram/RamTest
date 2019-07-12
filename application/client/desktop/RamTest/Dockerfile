FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY /dist/RamTest /usr/share/nginx/html
COPY /nginx /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
