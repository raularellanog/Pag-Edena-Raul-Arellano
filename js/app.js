var logo=document.getElementById("logo")

logo.addEventListener('click',function (event) {
    event.preventDefault();
    setTimeout(()=> location.href="./index.html",100);
});

var doc1 =document.getElementById("producto"),
$templatepro=document.getElementById("template-producto").content;
prodContent=[
    {
        img1:"./img/edena-producto-test.png",
        img2:"./img/park-street-0_McYfdyEDA-unspla.png",
        nom:"Nombre porducto",
        category:"categoria",
        precio:"$000",
    },
    {
        img1:"./img/edena-producto-test.png",
        img2:"./img/park-street-0_McYfdyEDA-unspla.png",
        nom:"Nombre porducto",
        category:"categoria",
        precio:"$000",
    },
    {
        img1:"./img/edena-producto-test.png",
        img2:"./img/park-street-0_McYfdyEDA-unspla.png",
        nom:"Nombre porducto",
        category:"categoria",
        precio:"$000",
    },
];

doc1.appendChild($templatepro);

var doc =document.getElementById("des"),
$template=document.getElementById("template4").content,
$fragmento=document.createDocumentFragment(),
cardContent=[
    {
        title:"FÓRMULA PERFECTA",
        img:"./img/ID2020_07_20-EA-Brand-13.png",
        text:"Producto creado a base de ciencias y naturaleza",
    },
    {
        title:"RECETA ABIERTA",
        img:"./img/ID2020_07_20-EA-Brand-16.png",
        text:"Tenemos un proceso transparente y abierto a nuetros clientes",
    },
    {
        title:"MADRE TIERRA",
        img:"./img/ID2020_07_20-EA-Brand-15.png",
        text:"Contamos con ingredientes naturales que vienen de la tierra",
    },
    {
        title:"RAÍCES SANAS",
        img:"./img/ID2020_07_20-EA-Brand-14.png",
        text:" Productos que llegan y curan desde la raiz",
    },
];
cardContent.forEach(el=>{
    $template.querySelector('img').setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("h5").textContent=el.title;
    $template.querySelector("p").textContent=el.text;   
    let $clone=document.importNode($template,true);
    $fragmento.appendChild($clone);
})

doc.appendChild($fragmento);

var doc2 =document.getElementById("prensa"),
$template6=document.getElementById("template6").content,
$fragmento2=document.createDocumentFragment(),
prensaContent=[
    {
        texto:"Reseña Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        idname:"-prensa/cliente",
    },
    {
        texto:"Reseña Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        idname:"-prensa/cliente",
    },
    {
        texto:"Reseña Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        idname:"-prensa/cliente",
    },
];
prensaContent.forEach(el=>{
    $template6.querySelector("p").textContent=el.texto;   
    $template6.querySelector("span").textContent=el.idname; 
    let $clone=document.importNode($template6,true);
    $fragmento2.appendChild($clone);
})
doc2.appendChild($fragmento2);

var doc3 =document.getElementById("redes"),
$templateredes=document.getElementById("template-redes").content,
$fragmentoredes=document.createDocumentFragment(),
imgredes=[
    {
        img:"./img/hichem-dahmani-T5AAr_PfdRA-uns.png",
        text:"Edena-rostro",
    },
    {
        img:"./img/Screen_Shot_2020-08-25_at_1303.png",
        text:"Edena-crema",
    },
    {
        img:"./img/Screen_Shot_2020-08-25_at_1304.png",
        text:"Edena-naturaleza",
    },
    {
        img:"./img/Screen_Shot_2020-08-25_at_1304_dw.png",
        text:"Edena-formula",
    },
    {
        img:"./img/edena-producto-test_dy.png",
        text:"Edena-producto-mascarilla",
    },
];
imgredes.forEach(el=>{
    $templateredes.querySelector("img").setAttribute("src",el.img);  
    $templateredes.querySelector("img").setAttribute("alt",el.text);
    let $clone=document.importNode($templateredes,true);
    $fragmentoredes.appendChild($clone);
})
doc3.appendChild($fragmentoredes);

var docRedes =document.getElementById("app-iconredes"),
templateredes2=document.getElementById("icon-redes").content;
docRedes.appendChild(templateredes2);
