FROM node:8.9.4-alpine

WORKDIR /sails
# some bash niceties
ADD .docker/root/.bashrc /root/

EXPOSE 1337
CMD ["npm", "start"]
