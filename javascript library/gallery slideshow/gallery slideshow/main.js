const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const alt = {
    "pic1.jpg" : "eye",
    "pic2.jpg" : "abstract art",
    "pic3.jpg" : "flowers",
    "pic4.jpg" : "ancient egypt drawings",
    "pic5.jpg" : "butterfly"
}
/* Looping through images */
for(const element of arr){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', ("images/" + element));
    newImage.setAttribute('alt', alt[element]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () =>
        displayedImage.setAttribute("src", newImage.src),
        displayedImage.setAttribute("alt", newImage.alt) 
    );
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(){
    if(btn.getAttribute("class") === "light"){
        btn.textContent = "Lighten";
        btn.setAttribute("class", "dark");
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        } else {
            console.log("works");
            btn.textContent = "Darken";
            btn.setAttribute("class", "light");
            overlay.style.backgroundColor = "rgba(0,0,0,0)";
        }
    }  
)