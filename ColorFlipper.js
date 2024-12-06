<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Flipper</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        .button {
            padding: 10px 20px;
            margin: 5px;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .green-button {
            background-color: #4caf50;
        }

        .red-button {
            background-color: #f44336;
        }

        .blue-button {
            background-color: #2196f3;
        }
        .random-button {
            background-color: grey;
    }
    </style>
</head>
<body>
    <button class="js-green-button button green-button">Green</button>
    <button class="js-red-button button red-button">Red</button>
    <button class="js-blue-button button blue-button">Blue</button>
    <button class="js-random-button button random-button">Random</button>
</body>

<script>
    let greenButton = document.querySelector('.js-green-button');
    let redButton = document.querySelector('.js-red-button');
    let blueButton = document.querySelector('.js-blue-button');
    let randomButton = document.querySelector('.js-random-button');

    greenButton.addEventListener("click" , () =>{
        document.body.style = 'background-color: Green';
    });
    redButton.addEventListener("click" , () =>{
        document.body.style = 'background-color: red';
    });
    blueButton.addEventListener("click" , () =>{
        document.body.style = 'background-color: blue';
    });
    randomButton.addEventListener("click" , () =>{
        
        let red = Math.round(Math.random() *255);
        let blue = Math.round(Math.random() *255);
        let green = Math.round(Math.random() *255);
        let color = `rgb(${red},${blue},${green})`;
        document.body.style.backgroundColor = color;
        
    }); 
</script>
</html>
