var productArray = [
    {
        img: "img/clock1.jpg",
        title: "German Glory",
        description: "This German beauty is a nice addition to any home.",
        price: "$399.99"

    },
    {
        img: "img/clock2.jpg",
        title: "The Romanov",
        description: "A gorgeous timepiece fit for an aristocrat.",
        price: " $599.99"
    },
    {
        img: "img/clock3.jpg",
        title: "The Lovebirds",
        description: "A fanciful creation perfect for a precious princess.",
        price: "$199.99"
    },
    {
        img: "img/clock4.jpg",
        title: "Wood Fantasy",
        description: "Carved leaves grace the timepiece for woodland fun.",
        price: "$179.99"
    },
    {
        img: "img/clock5.jpg",
        title: "Hunter's Dream",
        description: "From one carcass to the next, for the true hunter.",
        price: "$79.99"
    },
    {
        img: "img/clock6.jpg",
        title: "Log Cabin Frolic",
        description: "Figurines make this cuckoo love at first sight!",
        price: "$299.99"
    },
    {
        img: "img/clock7.jpg",
        title: "Dutch Wonder",
        description: "Traditional Dutch styling to fit right in to any home.",
        price: "$1199.00"
    },
    {
        img: "img/clock8.jpg",
        title: "Chime Holiday",
        description: "This clock has a picturesque scene of tranquil holidays",
        price: "$999.00"
    }
]


for (var i = 0; i < productArray.length; i++) {
    var productContainer = document.getElementById("content");
    productContainer.innerHTML += "<article>";
    productContainer.className += " productMain";
    productContainer.innerHTML += "<img src=" + '"' + productArray[i].img + '"' + ">";
    productContainer.innerHTML += "<h3>" + productArray[i].title + "</h3>";
    productContainer.innerHTML += "<p>" + productArray[i].description + "</p>";
    productContainer.innerHTML += "<p>" + productArray[i].price + "</p>";
    productContainer.innerHTML += "</article>";


    console.log("productContainer", productContainer);
}

