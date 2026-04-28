const banks = [
  {
    name: "State Bank of India",
  rates: [
      8.5,
      7.8,
      9.1,
      11.5
  ],
    logo: "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
  },
  {
    name: "HDFC Bank",
    rates: [
      8.9,
      8.2,
      9.4,
      12.0
    ],
    logo: "https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png"
  },
  {
    name: "ICICI Bank",
    rates: [
      8.7,
8.0,
9.3,
11.8
    ],
    logo: "https://e7.pngegg.com/pngimages/892/32/png-clipart-icici-bank-logo-bank-logos-thumbnail.png"
  },
  {
    name: "Bank of Baroda",
    rates: [
8.6,
7.9,
9.2,
11.5
    ],
    logo: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png"
  },
  {
    name: "Sarva Haryana Gramin Bank",
    rates: [
8.3,
7.5,
8.9,
      10.8
    ],
    logo: "https://content.jdmagicbox.com/comp/gurgaon/h8/011pxx11.xx11.140722093916.h8h8/catalogue/sarva-haryana-gramin-bank-sector-44-gurgaon-regional-rural-banks-g4ooq-250.jpg"
  },
  {
    name: "Kotak Mahindra Bank",
    rates: [
9.1,
8.4,
9.6,
12.5
],
    logo: "https://e7.pngegg.com/pngimages/20/41/png-clipart-kotak-mahindra-bank-logo-thumbnail-bank-logos-thumbnail.png"
  },
  {
    name: "Axis Bank",
    rates: [
8.8,
8.1,
9.3,
11.9
],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsqA9PKI4lHGLYHC18FHFCBih5KvL27IzzA&s"
  }
];
let bankDropDown = document.querySelector("#bank");
let rate = document.querySelector("#rate");
let amt = document.querySelector("#amount");
let logo = document.querySelector("img");
let type = document.querySelector("#loanType");
let typeChild = document.querySelectorAll("#loanType option");
let selected = banks[0];
//default 
rate.value = banks[0].rates[0];
banks.forEach((bank,idx)=>{
  let option = document.createElement("option");
  option.value = idx;
  option.text = bank.name;
  bankDropDown.appendChild(option);
})
function updateRate(idx){
  rate.value = selected.rates[idx];
}
type.addEventListener("change",()=>{
  index = Number(type.value);
  updateRate(index);
})

bankDropDown.addEventListener("change",()=>{
  selected = banks[bankDropDown.value];
  logo.src = `${selected.logo}`;
})

