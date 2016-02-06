var productArray = [
    {
        img: "img/clock1.jpg",
        title: "German Glory",
        description: "This tradionally styled German beauty is the perfect addition to the traditional home.",
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
        description: "The carved wood graces the timepiece in a cluster of woodland fun.",
        price: "$179.99"
    },
    {
        img: "img/clock5.jpg",
        title: "Hunter's Dream",
        description: "From one carcass to the next, a clock only a true hunter could love.",
        price: "$79.99"
    },
    {
        img: "img/clock6.jpg",
        title: "Log Cabin Frolic",
        description: "The adorable figurines make this unique take on the cuckoo love at first sight!",
        price: "$299.99"
    },
    {
        img: "img/clock7.jpg",
        title: "Dutch Wonder",
        description: "With a nod to traditional Dutch styling, this cuckoo fits right in.",
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
    var productContainer = document.getElementsByName("content");
    productContainer += "<article>"


    console.log("[i].img", productArray[i].title);
}

