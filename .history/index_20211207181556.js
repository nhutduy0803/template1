function doivitriao() {
  var doivitriao = document.querySelector(".list-produce");
  doivitriao.classList.toggle("vitriaomot");
  var themvitrihai = document.querySelector(".list-produce2");
  themvitrihai.classList.toggle("themvitrihai");
}

function home() {
  var openhome = document.querySelector(".home");
  openhome.classList.toggle("openhome");

  var opencatagori = document.querySelector(".catagori");
  opencatagori.classList.remove("openopencatagori");

  var openblog = document.querySelector(".blog");
  openblog.classList.remove("openblog");

  var opencontact = document.querySelector(".contact-us");
  opencontact.classList.remove("opencontact");
}

function catagori() {
  var openhome = document.querySelector(".home");
  openhome.classList.remove("openhome");

  var opencatagori = document.querySelector(".catagori");
  opencatagori.classList.add("openopencatagori");

  var openblog = document.querySelector(".blog");
  openblog.classList.remove("openblog");

  var opencontact = document.querySelector(".contact-us");
  opencontact.classList.remove("opencontact");
}

function blog() {
  var openblog = document.querySelector(".blog");
  openblog.classList.toggle("openblog");

  var openhome = document.querySelector(".home");
  openhome.classList.add("openhome");

  var opencatagori = document.querySelector(".catagori");
  opencatagori.classList.remove("openopencatagori");

  var opencontact = document.querySelector(".contact-us");
  opencontact.classList.remove("opencontact");
}

function contact() {
  var opencontact = document.querySelector(".contact-us");
  opencontact.classList.toggle("opencontact");

  var openhome = document.querySelector(".home");
  openhome.classList.add("openhome");

  var opencatagori = document.querySelector(".catagori");
  opencatagori.classList.remove("openopencatagori");

  var openblog = document.querySelector(".blog");
  openblog.classList.remove("openblog");
}
