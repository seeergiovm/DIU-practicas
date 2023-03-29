/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.ElMedusa";
        $scope.Curso ="2022/23";
        $scope.Github_ID ="https://github.com/seeergiovm/DIU-practicas";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Fernando Peralvo",
                Photo: "man1.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere encontrar una actividad para crear contenido en redes sociales proximamente",
                touch1: "Calendario",
                feel1: "4",
                con1: "Es difícil encontrar algo creativo para llamar la atención de sus seguidores",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Hace una lista de actividades poco comúnes en redes y elige una",
                touch2: "Libreta",
                feel2: "2",
                con2: "No se le ocurren muchas ideas",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                goal3: "Busca información sobre sitios de artesanía populares en Granada",
                touch3: "Móvil (Google)",
                feel3: "3",
                con3: "Encuentra mucha información acerca de artesanía pero pocas oportunidades de hacer algo",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Mira si existe la posibilidad de realizar una visita al taller",
                touch4: "Ordenador (Web Artesanía)",
                feel4: "3",
                con4: "Está preocupado por si la actividad organizada será buena",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Observa de qué trata la visita al taller, el precio y demás",
                touch5: "móvil (whatsapp)",
                feel5: "4",
                con5: "Necesita avisar a sus amigos para realizar la visita porque es para grupos",
                ima5: "cartoon-teamthinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "No realiza la reserva y busca otra actividad",
                touch6: "ordenador",
                feel6: "1",
                con6: "La actividad es demasiado cara y para que salga barata deben de ser un grupo grande",
                ima6: "cartoon-KO.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Miriam Peinado",
                Photo: "woman1.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar una escapada de fin de semana con su familia",
                touch1: "Agenda",
                feel1: "5",
                con1: "Tiene que organizarlo todo correcto por la brevedad de tiempo",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Un compañero del trabajo le recomienda un taller",
                touch2: "Lugar de trabajo",
                feel2: "4",
                con2: "Su compañero cuenta que le fue muy bien pero da muy pocos detalles",
                ima2: "cartoon-talking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se informa por su cuenta de la actividad y no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Se decepciona por lo que le cuentan, pero sigue empañada en hacer algo similar",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca talleres similares que le parezcan más interesantes",
                touch4: "Ordenador (webapp)",
                feel4: "3",
                con4: "Le cuesta encontrar nueva información debido a que no entiende muy bien las tecnologías",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la página web para una visita guiada",
                touch5: "Ordenador (webapp)",
                feel5: "4",
                con5: "Está insegura por si no ha conseguido realizar la reserva correctamente",
                ima5: "cartoon-PCsurprised.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue realizar la visita organizada con su familia y resulta contenta",
                touch6: "Taller",
                feel6: "4",
                con6: "Sus hijos no llegaron a disfrutar mucho porque la actividad estaba enfocada para adultos",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



