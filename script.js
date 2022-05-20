const data = [
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
];
console.log(data);
const list = document.createElement("div");
console.log(list);

function updateImage(){
    let selected = document.querySelector(".selected");
    console.log(selected.firstChild);
    let bigImage = document.querySelector(".bigImage");
    bigImage.setAttribute("src", selected.firstChild.getAttribute("src"));
}

for(let i = 0; i < data.length; i++){
    const div = document.createElement("div");
    const p = document.createElement("p");
    const a = document.createElement("img");
    a.setAttribute("src", data[i].previewImage);
    p.innerHTML = `${data[i].title}`;
    div.append(a);
    div.append(p);
    div.classList.add("list-row");
    if(i == 0){
        div.classList.add("selected");
    }
    div.addEventListener("click", function(){
        let prevselected = document.querySelector(".selected");
        console.log(prevselected); 
        prevselected.classList.toggle("selected");
        this.classList.toggle("selected");
        updateImage();
    });
    div.setAttribute("id", i);
    list.append(div);
}

list.classList.add("list");
const body = document.querySelector("body");
let bigImage = document.createElement("img");
bigImage.classList.add("bigImage");
let imageAndList = document.createElement("div");
imageAndList.append(list);
imageAndList.append(bigImage);
console.log(imageAndList);
imageAndList.classList.add("imageAndList");
body.append(imageAndList);

document.addEventListener("keydown", function(event){
    console.log(event);
    if(event.key == "ArrowUp"){
        let prevselected = document.querySelector(".selected");
        let newselected = prevselected.previousSibling;
        if(newselected != undefined){
            prevselected.classList.toggle("selected");
            newselected.classList.toggle("selected");
            updateImage();
        }
    }
    else if(event.key == "ArrowDown"){
        let prevselected = document.querySelector(".selected");
        let newselected = prevselected.nextSibling;
        if(newselected != undefined){
            prevselected.classList.toggle("selected");
            newselected.classList.toggle("selected");;
            updateImage()
        }
    }
});

updateImage();
