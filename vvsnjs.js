<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Webpage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        #counter {
            font-size: 2rem;
            margin: 20px;
        }
        .btn {
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1 id="greeting">Hello, Welcome to my Interactive Webpage!</h1>
    <button class="btn" onclick="changeColor()">Change Background Color</button>
    <div id="counter">0</div>
    <button class="btn" onclick="incrementCounter()">Increase Counter</button>
    <script>
        function changeColor() {
            const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#9B59B6"];
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        
        let count = 0;
        function incrementCounter() {
            count++;
            document.getElementById("counter").textContent = count;
        }
    </script>
</body>
</html>
