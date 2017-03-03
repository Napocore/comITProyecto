listadoCelulares = [
		{
			"id": 1,
			"marca": "Motorola",
			"modelo": "G 4 PLAY",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5,
			"pantalla_resolucion": "2000x1620",
			"camara_resolucion": "8 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 2,
			"marca": "Samsung",
			"modelo": "GALAXY J5 J510",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5.2,
			"pantalla_resolucion": "720x1280",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 3,
			"marca": "Samsung",
			"modelo": "GALAXY J7 J710",
			"sistema_operativo": "Android ",
			"pantalla_pulgadas": 5.5,
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 4,
			"marca": "Huawei",
			"modelo": "Y360D",
			"sistema_operativo": "Android 5.5",
			"pantalla_pulgadas": 4,
			"pantalla_resolucion": "2500x1980",
			"camara_resolucion": "5 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "2 Mpx",
			"memoria_interna": "4 GB",
			"flash": true
		},
		{
			"id": 5,
			"marca": "Lenovo",
			"modelo": "VIBE K5",
			"sistema_operativo": "Android 6",
			"pantalla_pulgadas": 6,
			"pantalla_resolucion": "2700x1780",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true

		},
		{
			"id": 6,
			"marca": "LG",
			"modelo": "g6",
			"sistema_operativo": "Android 7",
			"pantalla_pulgadas": 6.6,
			"pantalla_resolucion": "3000x22480",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true

		}
	];


function agregarElementos() {
	var p = document.createElement("p");
	p.id = "nuevo";
	var t = document.createTextNode("Ofertas de Marzo ");
	p.appendChild(t);
	var div = document.getElementById("nuevosElementos");
	div.appendChild(p);

	for (var cont=0;cont <listadoCelulares.length;cont++){
		var p = document.createElement ("li");
		var texto = "marca : "+listadoCelulares [cont].marca;
		var valor = document.createTextNode (texto)
		p.appendChild (valor);

		var texto1 = "/ modelo : "+listadoCelulares [cont].modelo;
		var valor1 = document.createTextNode (texto1)
		p.appendChild (valor1);

		var texto2 = "/ sistema operativo : "+listadoCelulares [cont].sistema_operativo;
		var valor2 = document.createTextNode (texto2)
			p.appendChild (valor2);

			var texto3 = "/ Pulgadas : "+listadoCelulares [cont].pantalla_pulgadas;
		var valor3 = document.createTextNode (texto3)
			p.appendChild (valor3);

		var texto4 = "/ Resolucion : "+listadoCelulares [cont].pantalla_resolucion;
		var valor4 = document.createTextNode (texto4)
		p.appendChild (valor4);


		var div = document.getElementById("nuevosElementos");
		div.appendChild(p)
			
		
	}	
}	
function agregarElementos3() {

   for(var cont = 0; cont < listadoCelulares.length; cont++) {
      var mycheckbox = document.createElement("input");
      mycheckbox.setAttribute("type","checkbox");
      mycheckbox.checked = listadoCelulares[cont].flash;
      mycheckbox.id = "mycheckbox"+cont;
      mycheckbox.className = "miEstilo";
      
      var p = document.createElement("p");
      var texto = document.createTextNode("Cámara frontal: ");
      p.appendChild(texto);
      var div = document.getElementById("nuevosElementos");
      div.appendChild(p);
      if(listadoCelulares[cont].flash) {
         p.appendChild(mycheckbox);
      }
   }
}  

//opcion 2 generar dos nodos de texto con la caractersitca y el valor por separado
/*var opcion2= document.createElement("li");
var caractersitca =document.createTextNode("marca:");
opcion2.appendChild(valorCaracteristica);
var valorCaracteristica =document.createTextNode (listadoCelulares[cont].marca);
opcion2.appendChild(valorCaracteristica);
var div =document.getElementById("nuevosElementos");
div.appendChild (opcion2);
*/