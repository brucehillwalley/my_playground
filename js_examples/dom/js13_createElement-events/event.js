const header = document.querySelector("header");
const addButton = document.getElementById("btn");
const input = document.querySelector("#input");
const ul = document.querySelector("ul");

//? 3.yöntem
header.onmouseover = function () {
  header.style.backgroundColor = "red";
  header.style.color = "white";
};

header.onmouseout = function () {
  header.style.backgroundColor = "transparent";
  header.style.color = "black";
};

const yazdir = () => {
  document.write("Hello from Turkey");
};

//?onload event ı html ve css kodlarının render edilmesinden sonra çalışır
// window.onload=yazdir()

//?window yüklendiğinde input a fokuslan
window.addEventListener("load", () => {
  input.focus();
});

//? 4.yöntem addeventlistener metodu
//*add butonuna tıklandığında event fonksiyonu çağırılır
addButton.addEventListener("click", () => {
  if (!input.value.trim()) {
    
    alert("lütfen bilgi giriniz");
  } else {
    const li = document.createElement("li");
    const text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li);
    input.value = "";
    input.focus();
  }
});

//? input elenmenti üzeerine basılıp 
input.addEventListener("keyup",(event)=>{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.keyCode);
    // console.log(event.code);


//?
    if (event.code==='Enter') {
        addButton.click()
    }
})

//!EKLEDİKLERİMİZİ BUTONLA SONDAN SİLME VE OLMAYANI EKLEME