const menulist = document.querySelector(".menu-list");

menulist.onclick = function () {
  navBar = document.querySelector(".Nav_links");
  navBar.classList.toggle("active");
};

function goDown() {
  var element = document.getElementById("AboutSection");
  element.scrollIntoView({ behavior: "smooth" });
}

function contactButton() {
  var element = document.getElementById("Contact_Section");
  element.scrollIntoView({ behavior: "smooth" });
}
function homePage() {
  var element = document.getElementById("header_container");
  element.scrollIntoView({ behavior: "smooth" });
}

function animateHeading() {
  const paragraphs = document.querySelectorAll(".content p");
  paragraphs.forEach((p, index) => {
    setTimeout(() => {
      p.classList.add("animate");
    }, index * 500);
  });
}

// window.addEventListener("load", animateHeading);

// function showInsta() {
//   window.location = "https://instagram.com/_arteves?igshid=MzRlODBiNWFlZA==";
// }

// function showTwitter() {
//   window.location =
//     "https://twitter.com/_ARTEVES?t=HpanyU1HYde9KyIKiqoDdg&s=08";
// }

// function AnimationCard() {
//   window.location =
//     "https://drive.google.com/drive/folders/1y9YV4qxBOY8NZVdsnR2odGCRLrJ335pq";
// }

// function BannerCard() {
//   window.location =
//     "https://drive.google.com/drive/folders/119x74JvYRl6HQHDzR4AxqRFbPCyurnom";
// }
// function EmotesCard() {
//   window.location =
//     "https://drive.google.com/drive/folders/1-0OkPbIoyuSaxHFHgcSlf3iPAeNN8UcP";
// }

// function VtubeCard() {
//   window.location =
//     "https://drive.google.com/drive/folders/1zERrZJmUpqw5ib_wllCFwoX2ZdzZ1pNT";
// }

// function OverlaysCard() {
//   window.location =
//     "https://drive.google.com/drive/folders/1xQ8DNi86kunfqccWQ9dwnJzCate6smh4";
// }

// function logoCard() {
//   window.location =
//     "https://drive.google.com/drive/folders/1vWWwwUIhEXigXlvyoSVM0_A2EShn87Dh";
// }
