const reviews = [
  {
    id: 1,
    name: "Baris Manco",
    job: "efsane",
    img:
      "https://i.pinimg.com/474x/3d/c3/cd/3dc3cdc208b096ecef89d1aa3e105eb4.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi minus, voluptas libero architecto suscipit iure, ipsa nesciunt, sequi debitis tenetur eveniet est necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. doloremque! ",
  },
  {
    id: 2,
    name: "neset ertas",
    job: "turku babasi",
    img:
      "https://i.pinimg.com/474x/f0/91/55/f0915553d6dbfb5b0f427e7bfd350c90.jpg",
    text:
    "Doloribus hic a possimus, obcaecati doloremque delectus sint id odit enim molestiae labore architecto officiis magnam nam. Non eum quas quidem dicta iure quam, mollitia consectetur debitis aut maxime quasi empore cumque qui dolore omnis saepe eveniet iste vel? ",
  },
  {
    id: 3,
    name: "sener sen",
    job: "eskiya",
    img:
      "https://i.pinimg.com/474x/a4/a0/10/a4a010f3e065f62fced8eb124cfe3af9.jpg",
    text:
    "Culpa excepturi expedita ipsa mollitia dolore, voluptate quo deleniti quos, neque nesciunt optio ducimus, Non eum quas quidem dicta iure quam,eius omnis alias, aliquid magnam laborum dolorem hic voluptatibus aspernatur iste error impedit saepe! ",
  },
  {
    id: 4,
    name: "Sadri Alisik",
    job: "turist omer",
    img:
      "https://i.pinimg.com/564x/42/fd/17/42fd1750c675ccacf9160e79760a6d0c.jpg",
    text:
    "Incidunt voluptatem dicta nostrum molestias assumenda perspiciatis corrupti, dignissimos laudantium aperiam, dolore voluptatum, repellendus distinctio nobis aut porro voluptate! Maiores nam ea, consequatur officiis sapiente repudiandae cupiditate dolores culpa accusantium accusamus.",
  },
];

const img = document.getElementById("img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const solBtn = document.querySelector(".solbtn");
const sagBtn = document.querySelector(".sagbtn");
const randomBtn = document.querySelector(".randombtn");

let sira = "0";

window.addEventListener("DomContentLoaded", ()=>{
  const item = reviews[sira];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

sagBtn.addEventListener("click", ()=>{
  sira++;
  if (sira > reviews.length -1) {
    sira = 0;
  }
  showPerson(sira)
});


solBtn.addEventListener("click", ()=>{
  sira--;
  if (sira < 0 ) {
    sira = reviews.length -1;
  }
  showPerson(sira)
});

randomBtn.addEventListener("click", ()=>{
  sira = Math.floor(Math.random() * reviews.length);
  showPerson(sira);
})
