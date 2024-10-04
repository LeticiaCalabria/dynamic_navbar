const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
const btnEl = document.getElementById("emoji-btn");
const emojiNameEl = document.getElementById("emoji-name");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active");
    }
});

//You need your own access key, which you can get on the emoji-api website. Remember to validate your email.
const emoji = [];
async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=9487650df0fe4a2e69810da757f11883d5d70020");

    data = await response.json();
    
    for (let i = 0; i < 1500; i++) {
        const emojiName = data[i].character;
        const emojiCode = data[i].unicodeName.replace(/^E\d+\.\d+\s/, ""); // Removendo a parte "E[number]."
        
        emoji.push({
            emojiName,
            emojiCode,
        });
    }
}

getEmoji();

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
});