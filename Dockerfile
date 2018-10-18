#image to use 
FROM node:8.11.1 

#tells dock cont where we want to work out of 
WORKDIR /usr/src/smart-brain-api

#copy's from our local dir to our container dir
COPY ./ ./

#What kind of command do we want to run inside a container (Image Build Step)
RUN npm install

#bash to use (executes by default when you launch a build image)
#docker file has only one CMD  and is usually at the end of the file
CMD ["/bin/bash"];