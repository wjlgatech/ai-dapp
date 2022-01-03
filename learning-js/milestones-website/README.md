### Learning Objectives: 
To compose my 1st website using html, css, js

### References & Credits
[Intro to JS](https://courses.blockgeeks.com/course/workshop-seriesjavascript-primer/)

```python
# create file structure
mkdir javascript
mkdir javascript/images 
mkdir javascript/styles
mkdir javascript/scripts

# download a image from the internet, e.g. blockgeek logo and move it to this folder: 
mv Download/download.png javascript/images

# creat index.html, a markdown file
touch javascript/index.html

# Now work on index.html using text editor e.g. vscode
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My 1st Website</title>
        <link rel="stylesheet" href="styles/styles.css">
    </html>
    <body>
        <h1>My First Website</h1>
        <img src="images/download.png" alt="blockgeeks logo" class="logo">
        <p>Vision: I will become a blockchain engineer in Q1 2022</p>
        <p>Learn more at <a href="https://www.linkedin.com/in/paul-jialiang-wu-67aa7179/">my linkedin page</a></p>
        <li>Learning Objectives</li>
        <li>Action Plans</li>
        <li>Action Scoreboard</li>
        <script src="scripts/main.js"></script>
    </body>

</html>

```

```python
# create styles/styles.css, a visual style file
touch javascript/styles/styles.css

# to control the content of your webpage, put the code in scripts/main.js
```

```js
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world, here is my 1st blockchain project!';
```

```python
# to have a local server runing in your computer
python -V # to dbck python version, expect to be 3.x 
python -m http.server

# to visit your webpage, type 'localhost:8000' on your webbrowser e.g. Chrome
```