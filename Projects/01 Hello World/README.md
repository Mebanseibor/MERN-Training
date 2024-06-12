# Hello World
  - ### Goal
    - To display "`Hello World`" using React.JS
- - -
  - ### Properly configure your file directory
    - Within your root project directory, create a folder directory to hold all the front end files as:
      ```
      public\
      ```
  - ### Create an HTML Document
    - Within the directory `public\`, create an html document webpage named as `index.html`
      - Resulting directory should be like:
    `public\index.html`
  - ### Add content into the HTML Document
    - Enter the HTML code to create a simple HTML-based webpage with a single div element
    - Assign an ID to that div element, say "**`div1`**"
      - Sample Code:
        ```HTML
          <!DOCTYPE HTML>
          <html>
          <head>
              <meta charset = "UTF-8">
              <title>Hello World</title>
          </head>
          <body>
              <div id="div1"></div>
          </body>
          </html>
          ```
  - ### Enable HTML Document to understand ReactJS
    - #### Import any available react, react-DOM and babel script:
      - <u>**Disclaimer**</u>: The scripts used here are not meant to be used for production
      - You can either download the scripts on your local machine or just include them in the **head** of your HTML file
        ```HTML
        <!--React Library-->
        <script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>

        <!--Reacts DOM library-->
        <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
        
        <!--babel library which is a browser based compiler-->
        <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
        ```
      - ##### Verify import:
        - Open the HTML document in a web browser
        - Open the browser's console (**`Shift`**+**`Ctrl`**+**`J`**)
        - Enter the following console command one-by-one:
        `React`
        `ReactDOM`
        `Babel`
        - The console should output:
        ![Console Result](./README%20Assets/ScriptImportVerification_ConsoleResult.png)
        
    - #### Create a script that will Render JSX
      - Within the **`body`** of the HTML document, just after the **`div`** element, create a **`script`** element with the attribute "**`type`**"  as `"text/babel"`
        ```HTML
            <script type="text/babel">
            </script>
        ```
        - The **`type="text/babel"`** ensures that the script will be compiled by **babel**
      - Create a function **`MyApp()`** that will return the "to-be" contents of the **`div`** element
        ```JS
        function MyApp(){
            return <h2>Hello World</h2>;
        }
        ```
        - <u>*Note*</u>: The first character of the function must always be in Uppcase to avoid confusion between JSX code and HTML code
      - Define a *const* variable **`container`** that will hold the element that we would like to change, this is achieved by utilizing the ID of the element, here, its a **div** element with the ID **`div1`**
        ```JS
        const container = document.getElementById('div1');
          ```
      - Define a *const* variable **`root`** that will create a root from the defined element
        ```JS
        const root = ReactDOM.createRoot(container);
        ```
      - Render the root **`root`** using the '*function*' **`MyApp()`**
        ```JS
        root.render(<MyApp />);
        ```
      - ##### Code Reference:
        ```JS
        <script type="text/babel">
          function MyApp(){
              return <h2>Hello World</h2>;
          }
          const container = document.getElementById('div1');
          const root = ReactDOM.createRoot(container);
          root.render(<MyApp />);
        </script>
        ```
  - ### View your webpage
    - Ensure you have internet connectivity
    - Open your HTML document "`index.html`"
    - Now, verbally reply "**`Hello`**" to the webpage too!!
      - If you weren't greeted by a "**`Hello World`**" from the webpage, then please do file a proper issue report in the [issue section](https://github.com/Mebanseibor/MERN-Training/issues) of the repository
  - ### Done⭐
---
- ### Useful Links
  - Source for imported scripts: [UNPKG](https://unpkg.com/)