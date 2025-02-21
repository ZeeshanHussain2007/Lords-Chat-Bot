const fetch = require("node-fetch");

async function testAPI() {
    const response = await fetch("http://localhost:4000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "What is AI?" })
    });

    const data = await response.json();
    console.log(data);
}

testAPI();
