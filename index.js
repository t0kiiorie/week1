const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const narratorSpan = document.querySelector("#narrator");
const TheHeroSpan = document.querySelector("#TheHero");
const isHero = confirm("Are you The Hero destined to save the world?");
const btnUpdateProfile = document.querySelector("#updateBtn");

if(isHero === true){
    console.log("You are the hero!");
} else {
    profileImage.src = "images/soft-princess.webp";
    firstNameSpan.innerHTML = "The Princess";
    narratorSpan.innerHTML = "She will lie, she will cheat, and she will do anything in her power to stop you from slaying her. Don't believe a word she says.";
    TheHeroSpan.innerHTML = "\"She's beautiful. How could someone like this be a threat to anyone?\" Soft.";
}

btnUpdateProfile.addEventListener("click", () => {
    console.log('clicked');
    profileImage.src = "images/sharp-princess.webp";
    firstNameSpan.innerHTML = "The Princess";
    narratorSpan.innerHTML = "She will lie, she will cheat, and she will do anything in her power to stop you from slaying her. Don't believe a word she says.";
    TheHeroSpan.innerHTML = "\"She's so coldly beautiful... Is she really a threat to the world?\" Sharp.";
});