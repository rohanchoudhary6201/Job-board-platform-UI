// Search Button

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const jobTitle = document.querySelectorAll(".search-box input")[0].value;
    const location = document.querySelectorAll(".search-box input")[1].value;

    if(jobTitle === "" || location === ""){
        alert("Please enter Job Title and Location");
    } else {
        alert(`Searching for ${jobTitle} jobs in ${location}`);
    }
});

// 3D Card Animation

const cards = document.querySelectorAll(".job-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let x = e.offsetX;
        let y = e.offsetY;

        let rotateY = (x - 150) / 10;
        let rotateX = -(y - 100) / 10;

        card.style.transform =
        `perspective(1000px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    });

});