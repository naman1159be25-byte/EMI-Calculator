const banks = [
  {
    name: "State Bank of India",
    rate: 8.5,
    logo: "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
  },
  {
    name: "HDFC Bank",
    rate: 9.0,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png"
  },
  {
    name: "ICICI Bank",
    rate: 8.8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/512px-ICICI_Bank_Logo.svg.png"
  },
  {
    name: "Bank of Baroda",
    rate: 8.7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bank_of_Baroda_logo.svg/512px-Bank_of_Baroda_logo.svg.png"
  },
  {
    name: "Sarva Haryana Gramin Bank",
    rate: 8.3,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Sarva_Haryana_Gramin_Bank_logo.png/300px-Sarva_Haryana_Gramin_Bank_logo.png"
  },
  {
    name: "Kotak Mahindra Bank",
    rate: 9.2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kotak_Mahindra_Bank_logo.svg/512px-Kotak_Mahindra_Bank_logo.svg.png"
  },
  {
    name: "Axis Bank",
    rate: 8.9,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/512px-Axis_Bank_logo.svg.png"
  }
];
let bankDropDown = document.querySelector("#bank");
let rate = document.querySelector("#rate");
let amt = document.querySelector("#amount");
banks.forEach((bank,idx)=>{
  let option = document.createElement("option");
  option.value = idx;
  option.text = bank.name;
  bankDropDown.appendChild(option);
})
