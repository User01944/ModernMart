// let Categories = document.querySelector("#Categories");
// let Category_drop = document.querySelector(".Category-drop");
// let Products = document.querySelector("#Products");
// let Products_drop = document.querySelector(".Products-drop");
// let Gift_Cards = document.querySelector("#Gift-Cards");
// let Gift_Cards_drop = document.querySelector(".Gift-Cards-drop");
// let isFromCategory = false;
// let isFromProduct = false;
// let isFromGift_card = false;

// // Category
// Categories.addEventListener("mouseenter", () => {
//   isFromCategory = true;
//   Category_drop.classList.remove("hide");
//   Category_drop.style.zIndex = "1";
// });

// Categories.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!Category_drop.matches(":hover")) {
//       Category_drop.classList.add("hide");
//       isFromCategory = false;
//       Category_drop.style.zIndex = "1";
//     }
//   }, 200);
// });

// Category_drop.addEventListener("mouseenter", () => {
//   if (!isFromCategory) {
//     Category_drop.classList.add("hide");
//   }
// });

// Category_drop.addEventListener("mouseleave", () => {
//   Category_drop.classList.add("hide");
//   isFromCategory = false;
// });

// // Product Drop
// Products.addEventListener("mouseenter", () => {
//   isFromProduct = true;
//   Products_drop.classList.remove("hide");
// });

// Products.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!Products_drop.matches(":hover")) {
//       Products_drop.classList.add("hide");
//       isFromProduct = false;
//     }
//   }, 200);
// });

// Products_drop.addEventListener("mouseenter", () => {
//   if (!isFromProduct) {
//     Products_drop.classList.add("hide");
//   }
// });

// Products_drop.addEventListener("mouseleave", () => {
//   Products_drop.classList.add("hide");
//   isFromProduct = false;
// });

// // Gift-card Drop
// Gift_Cards.addEventListener("mouseenter", () => {
//   isFromGift_card = true;
//   Gift_Cards_drop.classList.remove("hide");
// });

// Gift_Cards.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!Gift_Cards_drop.matches(":hover")) {
//       Gift_Cards_drop.classList.add("hide");
//       isFromGift_card = false;
//     }
//   }, 200);
// });

// Gift_Cards_drop.addEventListener("mouseenter", () => {
//   if (!isFromGift_card) {
//     Gift_Cards_drop.classList.add("hide");
//   }
// });

// Gift_Cards_drop.addEventListener("mouseleave", () => {
//   Gift_Cards_drop.classList.add("hide");
//   isFromGift_card = false;
// });
// let nav = document.querySelector("nav");
// let cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("mouseover", () => {
//     nav.classList.add("Newnav");
//   });
// });
