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
document.querySelectorAll(".counts").forEach((counter) => {
  const target = Number(counter.getAttribute("data-count"));
  let count = 0;
  const speed = 100;
  const increment = target / speed;

  function updateCount() {
    count += increment;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  }

  updateCount();
});

// let AddToCarts = document.querySelectorAll(".AddToCarts");
// let Cart = document.querySelector("#Cart");

// AddToCarts.forEach((child) => {
//   child.addEventListener("click", () => {
//     let grandparent = child.parentNode.parentNode;

//     let clonedItem = grandparent.cloneNode(true);

//     Cart.append(clonedItem);
//   });
// });
// Add to Cart - Store Items in LocalStorage and Update UI
// Add to Cart - Store Items in LocalStorage and Update UI
document.querySelectorAll(".AddToCarts").forEach((button) => {
  button.addEventListener("click", (event) => {
    let productCard = event.target.closest(".card");
    if (productCard) {
      let clonedHTML = productCard.outerHTML;

      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      if (!cartItems.includes(clonedHTML)) {
        cartItems.push(clonedHTML);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCartUI();
      } else {
        alert("Item already in cart!");
      }
    }
  });
});

function updateCartUI() {
  let cart = document.querySelector("#Cart");
  cart.innerHTML = ""; // ✅ Clear previous content

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems.length === 0) {
    // ✅ Display noItem image if cart is empty
    let noItemImage = document.createElement("img");
    noItemImage.src = "Images/noItem.jpg";
    noItemImage.style.width = "100%"; // Full width
    noItemImage.alt = "No Items in Cart";
    noItemImage.style.border = "4px solid black";

    cart.appendChild(noItemImage);
  } else {
    cartItems.forEach((item, index) => {
      let wrapper = document.createElement("div");
      wrapper.innerHTML = item;

      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("remove-button-class");
      removeButton.addEventListener("click", () => {
        removeCartItem(index);
      });

      wrapper.appendChild(removeButton);
      cart.appendChild(wrapper);
    });
  }
}

function removeCartItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCartUI();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
});
