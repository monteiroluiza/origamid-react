// const upperName = (name) => name.toUpperCase();
// const countLetters = word => word.length;

// console.log(countLetters(upperName("luiz")));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent(){
    this.menuElement.addEventListener("click", (ev) => {
      console.log(this);
      ev.target.classList.add(this.activeClass);
    })
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();