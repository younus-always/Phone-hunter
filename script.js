// loadDatas to fetch..


/*
{
    "brand": "Apple ",
    "phone_name": "iPhone 13 Pro",
    "slug": "apple_iphone_13_pro-11102",
    "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg"
}

*/

const loadData = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await res.json();
    const videosData = data.data;
    const videosDataSlice = videosData.slice(0,6)
    const dataMainContainer = document.getElementById("card-container");

    // slicing data
    videosDataSlice.forEach(video => {
        const {brand, phone_name, slug, image} = video;
        const dataContainer = document.createElement("div");
        dataContainer.innerHTML =
        `<div class="card border">
    <figure class="px-10 pt-10">
        <img
        src="${image}"
        alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title font-bold text-xl">${phone_name}</h2>
        <p class="my-2">There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
        </div>
    </div>
    </div>
        `
        dataMainContainer.append(dataContainer)
    });

    // full data

}


// Show all phones
const showAll = async (searchText) => {
    console.log(searchText)
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText? "":"iphone" }`)
    const data = await res.json();
    const videosData = data.data;
    const dataMainContainer = document.getElementById("card-container");
    dataMainContainer.innerText = ""
    videosData.forEach(video => {
        const {phone_name, image} = video;
        const dataContainer = document.createElement("div");
        dataContainer.innerHTML =
        `<div class="card border">
    <figure class="px-10 pt-10">
        <img
        src="${image}"
        alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title font-bold text-xl">${phone_name}</h2>
        <p class="my-2">There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions">
        <button onclick="showModalBox()" class="btn btn-primary">Show Details</button>
        </div>
    </div>
    </div>
        `
        dataMainContainer.append(dataContainer);

        if (searchText == phone_name.toLowerCase()) {
            console.log("yes")
        }
    });
}


// Show Modal

const showModalBox = () => {
    console.log("I'm here")
}

const showBtn = document.getElementById("show-all");
showBtn.addEventListener("click", () => {
    showAll()
})

// Spinner..
const spinner = async (searchText) => {
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 3000);
    showAll(searchText);

}

document.getElementById("search-btn").addEventListener("click", () => {
    const searchValue = document.getElementById("search-box").value;
    if (searchValue) {
        console.log(true)
        spinner(searchValue);
    }else{
        alert("Please input specific text")
    }
})

loadData()