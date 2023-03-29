/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.ElMedusa";
        $scope.Curso ="2022/23";
        $scope.Github_ID ="https://github.com/seeergiovm/DIU-practicas";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Fernando Peralvo",
				Photo: "man1.png",
				Quote: "¡Luces, cámaras y acción!",
				Age: 26,
				Occupation: "Técnico de sonido y luces",
				Family: "Con pareja desde hace 2 años",
				Location: "Ciudad Real",
				Character: "Descubrir cosas nuevas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Ser influencer", "Hacer actividades con sus amigos y pareja"],
				Frustrations: ["Sus amigos no salen mucho de casa", "Le gustaría ser famoso"],
				Bio: "Es de Ciudad Real pero vino a Granada para estudiar Matemáticas, aunque se dio cuenta de que no era lo suyo. Acabó realizando un curso de técnico de sonido y ahora se encuentra trabajando para conciertos y teatros por toda Andalucía. Se encuentra muy agusto en su actual trabajo pero él quiere aspirar a algo más.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Quiere hacerse influencer y empezar a subir contenido. Busca cosas diferentes.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Miriam Peinado",
				Photo: "woman1.png",
				Quote: "Apasionada por el arte",
				Age: 45,
				Occupation: "Profesora",
				Family: "Marido y dos hijos",
				Location: "Córdoba",
				Character: "Inquieta e investigadora",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Culturizar a su familia", "Le gustaría trabajar en un museo", "Conseguir dar la vuelta al mundo"],
				Frustrations: ["El desorden de las cosas", "La monotonía", "La infravaloración de los distintos tópicos artísticos"],
				Bio: "Nació en Córdoba, y actualmente ejerce de profesora en un colegio de primaria. Es apasionada por todo lo relacionado con el arte, desde pinturas y esculturas hasta monumentos arquitectónicos. Es madre e intenta inculcar a sus hijos su afán por el arte y la cultura.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Quiere llevar a sus hijos a una excursión influenciada por el arte." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])