

function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}

async function calculate() {
    try {
        const display = document.getElementById("result");
        let value = display.value;
        console.log({value})
        let url;
        let config;
    
    if (value.includes("+")){
        const [num1, num2] = value.split('+');

        console.log({num1, num2, operator: '+'});
        url = `/calculator/add?num1=${num1}&num2=${num2}`;
    }
//myLogger {operation} of {num1}

    if (value.includes("-")){
        const [num1, num2] = value.split('-');

        console.log({num1, num2, operator: '-'});
        
        url = `/calculator/subtract/${num1}/${num2}`
    }
    if (value.includes("/")){
        const [num1, num2] = value.split('/');

        console.log({num1, num2, operator: '/'});

        url = `/calculator/divide`;
        config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ num1, num2 }),
        }
    }
    if (value.includes("*")){
        const [num1, num2] = value.split('*');

        console.log({num1, num2, operator: '*'});

        url = `/calculator/multiply`;
        config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({num1, num2}),
        }
    }

        const res = await fetch(url,config);
        const json = await res.json();
        console.log(json);
        display.value = json.result;

    } catch (error) {
        console.log(error);
    }

    
}