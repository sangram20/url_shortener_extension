document.getElementById("btn").addEventListener("click", async function() {
    const Url = document.getElementById("url").value;
    
    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);

        if (response.ok) {
            const data = await response.text();
            document.getElementById('result').innerHTML = `
                Shortened URL: <a href="${data}" target="_blank">${data}</a>`;
        } else {
            document.getElementById('result').innerHTML = "Error shortening";
        }
    } catch (error) {
        console.error("An error occurred:", error);
        document.getElementById('result').innerHTML = "Error shortening";
    }
});
