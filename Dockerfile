FROM node:carbon

## Set log level info
ENV NPM_CONFIG_LOGLEVEL info

## Set environment to "development" by default
ENV NODE_ENV development

# Create app directory
WORKDIR /www/react_calculator

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json /www/react_calculator/

RUN npm install --no-optional
# If you are building your code for production
# RUN npm install --only=production


# Bundle app source
COPY . /www/react_calculator/
	
EXPOSE 8000

CMD ["npm", "start" ]
