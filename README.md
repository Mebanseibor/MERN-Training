# MERN-Training

*ReadMe Last updated on: 2024/06/11 [yyyy/mm/dd]*

## Table of Contents

| Content                                           |
| ------------------------------------------------- |
| [Description](#description)                       |
| [Repository Structure](#repository-structure)     |
| [Prerequisites](#prerequisites)                   |
| [Introduction](#introduction)                     |
| [Coding Adventure](#coding-adventure)             |
| [Links](#links)                                   |

## Description

This is a project aimed at providing training resources for MERN stack development.

## Repository Structure
- ### [Projects](./Projects)
    Contains all end-product projects related to this repository

- ### [JavaScript](./JavaScript/)
    Contains all the useful JavaScript files that are used in this repository

- - -
## Prerequisites
- ### Software
  - #### An IDE, ideally [VS Code](https://code.visualstudio.com/ "VS Code Official Website")

- ### Field of Knowledge
  - #### HTML and CSS
  - #### JavaScript
  - #### CommandTerminal Commands (navigation, etc)

- - -
## Introduction
### What is MERN?
&emsp;**MERN** is an acronym that stands for *MongoDB*, *Express.js*, *React*, and *Node.js*.
&emsp;It represents a stack of technologies used to develop modern web applications.
&emsp;Each component of the MERN stack has a specific role:
| Component     | Role |
| ------------- |  --- |
| MongoDB       |  A NoSQL database that stores data in flexible, JSON-like documents                                                                   |
| Express.js    |  A web application framework for Node.js, designed for building web applications and APIs                                             |
| React.js      |  A JavaScript library for building user interfaces, where we can create components that maintain state and manage updates efficiently |
| Node.js       |  A runtime environment that allows us to execute JavaScript on the server side, enabling the building of scalable network applications|
### Why choose MERN?
- Utilizes only a single language, JavaScript
- It is ideally suited for web applications that have a large amount of interactivity built into the front-end
- JSON (JavaScript Object Notation) representation is used everywhere: 
  - It is used in the Database, the Server, the client and on the wire
  - No ORM (Object Relational Mapping) required which:
    - Saves time in transformation 
    - Requires no special serialization and de-serialization code 

- - -
## Coding Adventure
### Good Practices
&emsp;As a developer, it is expected to maintain some common good practices that are accepted by the majority of the developer's community. These include:
- #### Adhering to a selected naming convention
    - Regularities in variable and functions notations
    - Regularities in file naming
- #### Directory Structures
    - Easy-to-navigate file structure
    - Include only necessary files and folders
### Personal Tutorials
| Tutorial Name                                                                     |
| --------------------------------------------------------------------------------- |
| [Development Environment Configuration](#development-environment-configuration)   |
| [Hello World](./Projects/00%20Hello%20World/)                                     |

#### Development Environment Configuration
- ##### NVM
  - Abbreviation for *Node Version Manager*, it is version manager for Node.js (Node)
  - Download and install nvm from [github](https://github.com/coreybutler/nvm-windows)
  - Restart VS Code for the installation to take immediate effect in VS Code
  - Verify the proper installation of nvm by entering the following terminal command:
  ```bash
  npm --version
  ```
- #### Node
    - For the latest node version enter the following terminal command:
    ```bash
    nvm install node
    ```
    - or, for a specific node version, enter the following terminal command:
    ```bash
    nvm install <version_number>
    ```
    - Get the node version:
    ```bash
    node --version
    ``` 
    - Configure nvm to use the defined version by entering the terminal command:
    ```bash
    nvm use <version_number>
    ```
    - Verify the proper installation of ndoe by entering the following command in the terminal:
    
    ```bash
    node --version
    ```

- - - 
## Links
- [HTML Projects Examples](https://www.knowledgehut.com/blog/web-development/html-projects)
- [JavaScript Tutorial](https://www.w3schools.com/js/)