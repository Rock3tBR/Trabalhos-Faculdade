class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  //Inicío dos slides

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 5000)

function proximaImg(){
  cont++

  if(cont > 3){
    cont = 1
  }

  document.getElementById('radio'+cont).checked = true
}
// Fim dos slides
//  carinho
const items = [
  {
    id: 0,
    nome: 'whey',
    img: 'img/WheyM.jpg',
    quantidade: 0
  },
  {
    id: 1,
    nome: 'camiseta',
    img: 'img/camiseta.png',
    quantide: 0
  }
]

inicicializarLoja = () =>{
  var containerProdutos = document.getElementById('produtos');
  items.map((val)=>{
    containerProdutos.innerHTML += `
    
    <div class="produto-single">
      <img src="`+val.img+` />
      <p>`+val.nome+`</p>
      <a key="`+val.id+`" href="carrinho.html">Adicionar ao carrinho<a/>
    </div>
   
    `;
  })
}

inicicializarLoja();

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho');
  items.map((val)=>{
      if(val.quantidade > 0){
    containerCarrinho.innerHTML += `
    
    <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
    <hr>
   
    `;
    }
  })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++){
  links[i].addEventListener("click",function(){
    let key = this.getAttribute('key');
    items[key].quantidade++;
    atualizarCarrinho();
    return false;
  })
}
document.getElementById("submitC").addEventListener("click", function(event){
  event.preventDefault();
  var usuario = document.getElementById("usuario").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var conf_senha = document.getElementById("conf_senha").value;

  if(senha != conf_senha){
      alert("As senhas não correspondem.");
      return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "cadastro.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("usuario="+usuario+"&email="+email+"&senha="+senha+"&conf_senha="+conf_senha);
  xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
          alert(xhr.responseText);
      }
  }
});
