# Resume Portfolio📜
- ## Goal🥅
  - To create a dynamic Resume Portfolio utilizing ReactJS and NodeJS
- ### File Directory Setup
  - Create a folder `public`
  - Create a folder `src`
    - Within the folder `src\`, create a folder `components`
      - This will contain folders for each individual component (.jsx) and their associated css file
- ### Initiate a NodeJS Project
  - #### Navigate to your project's root directory:
    - Using the terminal, navigate to your project's root directory
      - *Hint*: Utilize the terminal command `cd`
  - #### Initiate a npm project
    - Terminal Command:
        ```bash
        npm init
        ```
    - Enter the required information requested by the terminal
    - After completion, a `package.json` should appear within your project's root directory

- ### Install Libraries:
  - In terminal, navigate to your Project's root directory
  - #### Install React
    - Terminal Command:
        ```bash
        npm install react
        ```
      - If this was your project's first package installation, a new folder would appear named in the root directory **`node_modules`**
  - #### Install React-DOM
    - Terminal Command:
        ```bash
        npm install react-dom
        ```
    - Notice that **`package.json`** has also updated to account for that dependency

- ### The index.html file
  - Created an HTML document `index.hmtl` within the folder `\public`




- ### Create main.jsx file
  - File purpose: 
  - Within the folder **`src\`**, create a *JSX* file named as **`main.jsx`**
    - Resulting file directory:
        ```
        src\main.jsx
        ```
  
- ### Create App.jsx file
  - File purpose: 
  - Within the folder **`src\`**, create a *JSX* file named as **`App.jsx`**
    - Resulting file directory:
        ```
        src\App.jsx
        ```

- ### HTML Document (index.html)
  - #### File Creation
    - Within the folder **`public\`**, create a HTML document **`index.html`**
      - Resultant file path
        ```
        public\index.html
        ```
  - #### Add content
    - Create a typical empty HTML Webpage:
    - Sample:
        ```HTML
        <!DOCTYPE HTML>
        <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Resume</title>
        </head>
        <body>
            
        </body>
        </html>
        ```
  - #### Add a React Root Component to the HTML Document
    - Create an empty generic **`div`** element with the id **`root`**
        ```HTML
        <div id="root"></div>
        ```
        - **From now on, this element will act as the root component**
  - #### Attach the **`main.jsx`** file
    - Create a **`script`** element
      - Set its attribute **`type`** to **`module`**
      - Set its attribute **`src`** to **`main.jsx`**
      - Sample Code:
        ```HTML
        <script type="module" src="../src/main.jsx"></script>
        ```
  - *Progress Reference*
    ```HTML
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset = "UTF-8"/>
        <title>Resume</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="../src/main.jsx"></script>
    </body>
    </html>
    ```
- ### The main.jsx file
  
  - Open the **`src/main.jsx`** file
  
  - #### Import packages
    - From the run-time environment, import **`React`** and **`ReactDOM`**
        ```JSX
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        ```
    
    - From the local directory, import **`App`** from the **`App.jsx`** file
        ```JSX
        import App from './App.jsx'
        ```
      - This **`App`** is a function (*that we will define later*) within the **`App.jsx`** file that returns the React Components defined within it
  
  - #### Create a root component
    - Utilizing an element's Id, assign to a *const* variable **`componentRoot`** the desired element that will act as the root component for every HTML document that this script (`main.jsx`) is linked to
      - Code:
        ```JSX
        const componentRoot = ReactDOM.createRoot(document.getElementById('root'));
        ```
      - Recall that the **`index.html`** file has a line **`<div id="root"></div>`** with the Id **`root`**
  
  - #### Render the components
    - We will now render the components defined in the *App* function (*from the *App.jsx* file*) into the element `componentRoot` in strict mode
        ```JSX
        componentRoot.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        );
        ```
        - **Strict Mode**: It is a mode that is used for identifying, highlighting and provide us warnings about potential problems in the application
    &nbsp;  
  - *Progress Reference*
    ```JSX
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'

    const componentRoot = ReactDOM.createRoot(document.getElementById('root'));
    componentRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    );
    ```

- ### The App.jsx file
#### ==To be Updated==





---





---
- ## Links:
  - [Repository](https://github.com/Mebanseibor/MERN-Training):
    - [Project]() Directory
    - File an [issue]()
  - JavaScripts provided by UNPKG:
    - [React v18.3.1 umd production min](https://unpkg.com/react@18.3.1/umd/react.production.min.js)
    - [React-DOM v18.3.1 umd production min](https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js)
    - [Babel Standalone v6.26.0 min](https://unpkg.com/babel-standalone@6.26.0/babel.min.js)