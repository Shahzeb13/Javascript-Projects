<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome</title>

<style>
    body {
        background-color: whitesmoke;
        color: #db2828;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

   
    

    .container {
        text-align: center;
        background-color: #1e1e1e;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    input[type="text"] {
        width: 300px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        background-color: #2a2a2a;
        color: #ffffff;
        margin-bottom: 10px;
    }


    input[type="text"]::placeholder {
        color: #a0a0a0;
    }

    button {
        background-color: #3a86ff;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: #ff006e;
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 4px 10px rgba(255, 0, 110, 0.5);
    }
</style>
</head>
<body>

    <div>
        <h1>Palindrome Checker</h1>
        <label for="userInput">Enter Text:</label>
        <input type="text" id="userInput" placeholder="Type words blud...">
        <button id ="submit-btn">Submit</button>
        <h3  style= 'color: rgb(114, 241, 17); font-family: Papyrus' id='output'></h3>
    </div>



    <script>
        const inputText = document.getElementById('userInput');
        const buttonElement = document.getElementById('submit-btn');
        const outputElement = document.getElementById('output');

        buttonElement.addEventListener("click" , () => {
            let text = inputText.value;
            // console.log(text);
            let reversedText = text.split('').reverse().join('');
             
            // console.log(reversedText);
            if(text === reversedText){
                 outputElement.innerHTML = `${text} is a Palindrome buddy! Congrats!`;
                
            }
            else{
                outputElement.innerHTML = `${text} isn't a Palindrome Pal! Try again!`;
            }



        });


    </script>
    
</body>
</html>

