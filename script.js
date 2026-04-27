const banks = [
  {
    name: "State Bank of India",
    rate: 8.5,
    logo: "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
  },
  {
    name: "HDFC Bank",
    rate: 9.0,
    logo: "https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png"
  },
  {
    name: "ICICI Bank",
    rate: 8.8,
    logo: "https://e7.pngegg.com/pngimages/892/32/png-clipart-icici-bank-logo-bank-logos-thumbnail.png"
  },
  {
    name: "Bank of Baroda",
    rate: 8.7,
    logo: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png"
  },
  {
    name: "Sarva Haryana Gramin Bank",
    rate: 8.3,
    logo: "https://content.jdmagicbox.com/comp/gurgaon/h8/011pxx11.xx11.140722093916.h8h8/catalogue/sarva-haryana-gramin-bank-sector-44-gurgaon-regional-rural-banks-g4ooq-250.jpg"
  },
  {
    name: "Kotak Mahindra Bank",
    rate: 9.2,
    logo: "https://e7.pngegg.com/pngimages/20/41/png-clipart-kotak-mahindra-bank-logo-thumbnail-bank-logos-thumbnail.png"
  },
  {
    name: "Axis Bank",
    rate: 8.9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsqA9PKI4lHGLYHC18FHFCBih5KvL27IzzA&s"
  }
];
let bankDropDown = document.querySelector("#bank");
let rate = document.querySelector("#rate");
let amt = document.querySelector("#amount");
let logo = document.querySelector("img");
banks.forEach((bank,idx)=>{
  let option = document.createElement("option");
  option.value = idx;
  option.text = bank.name;
  bankDropDown.appendChild(option);
})
bankDropDown.addEventListener("change",()=>{
  let selected = banks[bankDropDown.value].name;
  logo.src = `${banks[bankDropDown.value].logo}`;
})