document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem("Session")
    document.getElementById("session").innerHTML = username;
    console.log(username);
})