# Image Processing API

## Table of Contents

- [Image Processing API](#image-processing-api)
  - [Table of Contents](#table-of-contents)
  - [project description](#project-description)
  - [Usage](#usage)
  - [dependencies](#dependencies)
  - [entrypoint](#entrypoint)
  - [Endpoint](#endpoint)
  - [comment](#comment)

## project description
it is starting project to learn how to setup Project Environment using express , typescript and jasmine for unit testing , and prettier , eslint for making the code prette and free error , and sharp fileSystem for Image Processing
## Usage
it  use for resize the image and can be scalability 
## dependencies
the dependencies is the express , node-cache , prettier , jasmine , eslint and typescript for Node as Project Environment Setup and sharp fileSystem for Image Processing
## entrypoint
the entry point is index.js and we read in the terminal is node ./dist/.
## Endpoint 
the endpoint to main page is ('/')
the endpoint to Image Processing API is ('/images?filename=imageName &width=imageWidth &height=imageHeight ') 
## comment
To integrate Prettier with ESLint,in .eslintrc.json 
env:  
  node: true  
extends:  
  - plugin:@typescript-eslint/recommended  
  - prettier/@typescript-eslint  
  - plugin:prettier/recommended  
parser: '@typescript-eslint/parser'  
parserOptions:  
  ecmaVersion: 9  
  project: ./tsconfig.json  
plugins:  
 - '@typescript-eslint'
