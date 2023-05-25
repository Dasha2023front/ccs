const btn = document.querySelector(".dropdown__button");
const dropdownList = document.querySelector(".dropdown__list");
const listItems = document.querySelectorAll('.dropdown__list-item');
const inputHidden = document.querySelector(".dropdown__input-hidden");
console.log(listItems);

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


btn.addEventListener("click", () => {
        dropdownList.classList.toggle('dropdown__list-visible');
        btn.classList.toggle('dropdown__button-active');
});

// Выбор элементов списка, запоминание выбранного значения, закрытие списка

listItems.forEach((listItem) => {
    listItem.addEventListener('click', (e) => {
        e.stopPropagation();
        let target = e.target;
        console.log(target);
        document.querySelector(".dropdown__button").innerText = target.innerText;
        document.querySelector(".dropdown__button").focus();
        inputHidden.value = target.dataset.value;
        dropdownList.classList.remove('dropdown__list-visible');
        btn.classList.remove('dropdown__button-active');
    })
})

// Закрытие дропдауна по клику вне списка

document.addEventListener('click', (e) => {
    if (e.target !== btn){
        dropdownList.classList.remove('dropdown__list-visible');
        btn.classList.remove('dropdown__button-active');
    }
});

const burgerToggle = document.querySelector(".header_burger_container");
// const openModals = document.querySelectorAll(".open_modal");
// const modalOrder = document.querySelector(".modal_order");
// const closeModal = document.querySelector(".close_modal");
const burger = document.querySelector(".header_burger");
const anchorsMenu = document.getElementsByClassName("anchorMenu");
const header = document.querySelector(".header");

function openMenu() {
  document.body.classList.toggle("menu_opened");
  burger.classList.toggle("open");
  const clossed = (e) => {
    if (e.target.className === "anchor anchorMenu" || e.code === "Escape") {
      document.body.classList.remove("menu_opened");
      burger.classList.remove("open");
      document.removeEventListener("keydown", clossed);
    }
  };

  document.body.addEventListener("click", clossed);
}

function openToModal() {
  modalOrder.classList.add("active");
}
// function closeToModal() {
//   modalOrder.classList.remove("active");
// }

burgerToggle.addEventListener("click", openMenu);

// for (let i = 0; i < openModals.length; i++) {
//   openModals[i].addEventListener("click", openToModal);
// }

// closeModal.addEventListener("click", closeToModal);
