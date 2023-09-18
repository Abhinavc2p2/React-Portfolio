import discord from "../images/discord.jpeg";
import wheather from "../images/wheather.jpeg";
import currency from "../images/currency.jpeg";
import calc from "../images/calc.jpeg";
import Qr from "../images/qr code.jpeg";
import expense from "../images/expense.jpeg";
import thought from "../images/though.jpeg";
import addnotes from "../images/Addnotes.png"
import cargame from "../images/Car game.jpeg"
import movie from "../images/movie.jpeg"
import gym from "../images/gym.jpeg"



const portfolios = [{
        id: "01",
        imgUrl: gym,
        category: "Mern",
        title: "Gym website frontend",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", ""],
        siteUrl: "https://github.com/Abhinavc2p2/Gym-Website-Frontened ",

    },
    {
        id: "02",
        imgUrl: movie,
        category: "web Design",
        title: "",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://comforting-kringle-2c07ed.netlify.app",
    },
    {
        id: "03",
        imgUrl: cargame,
        category: "wen Design",
        title: "Multimedia Sharing Website",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://stellular-capybara-b99ad5.netlify.app",
    },
    {
        id: "04",
        imgUrl: addnotes,
        category: "Web Design",
        title: "Landing Page",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://earnest-madeleine-c06280.netlify.app",
    },
    {
        id: "05",
        imgUrl: thought,
        category: "Mern",
        title: "Landing Page",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://magenta-bublanina-b18740.netlify.app/",
    },

    {
        id: "06",
        imgUrl: expense,
        category: "Mern",
        title: "Online Therapy Website",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://expense-tracker-ayzv.onrender.com/",
    },
    {
        id: "07",
        imgUrl: Qr,
        category: "Web Design",
        title: "Appointment Booking Website",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
        temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
        animi doloribus saepe!`,
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://warm-melba-1a50bb.netlify.app",
    },
    {
        id: "08",
        imgUrl: calc,
        category: "Web Design",
        title: "Finance Technology Website",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
      temporibus dignissimos atque repellendus amet a velit. Dolorem 
      quidem animi doloribus saepe!`,
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
    },
    {
        id: "09",
        imgUrl: currency,
        category: "Wen Design",
        title: "Video Conference Website",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque 
      repellendus amet a velit. Dolorem quidem animi doloribus saepe!`,
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://amazing-medovik-78c821.netlify.app",
    },
    {
        id: "10",
        imgUrl: wheather,
        category: "Web Design",
        title: "File Sharing Website",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
       temporibus dignissimos atque repellendus amet a velit. Dolorem 
       quidem animi doloribus saepe!`,
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://vermillion-kringle-9b6162.netlify.app",
    },
    {
        id: "11",
        imgUrl: discord,
        category: "Web Design",
        title: "Landing Page",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
      temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
      animi doloribus saepe!`,
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://regal-banoffee-c49120.netlify.app ",
    },
    {
        id: "12",
        imgUrl: discord,
        category: "Web Design",
        title: "Landing Page",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
    temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
    animi doloribus saepe!`,
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "https://regal-banoffee-c49120.netlify.app",
    },



];

export default portfolios;