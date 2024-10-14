###—————————————————————————————————————#
## DEV                                 ##
#—————————————————————————————————————###
# Base image
FROM node:20-alpine as dev
# Create app directory
WORKDIR /app
# Install dependencies
RUN npm install -g pnpm

# Set environment variables
ENV NODE_ENV=development

###—————————————————————————————————————#
## BUILD                               ##
#—————————————————————————————————————###
# Base image
FROM node:20-alpine as build
# Create app directory
WORKDIR /app
# Install dependencies
RUN npm install -g pnpm

# Set environment variables
ENV NODE_ENV=production

###—————————————————————————————————————#
## PRODUCTION                          ##
#—————————————————————————————————————###
# Base image
FROM node:20-alpine as prod
# Create app directory
WORKDIR /app
# Install dependencies
RUN npm install -g pnpm

# Set environment variables
ENV NODE_ENV=production
