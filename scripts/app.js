const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");


const elementProjectComlete = document.querySelector("#valeu-project-complete");
const elementNavigationMenus = document.querySelector(".navigation__menus");

const elementValeuYears = document.querySelector("#valeu-years");




const containerValue = {
  projectComplete: 600,
  valeuYears: "18+"
};

const navigationMenus = [
  {
    title:"Work",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Service",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },];

 const a = navigationMenus.map( (navigation) => {
    return navigation;
  })


/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});


elementProjectComlete.append(containerValue.projectComplete);
elementValeuYears.append(containerValue.valeuYears);