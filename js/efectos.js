
$(document).ready(function(){
// AL CARGAR LA PÁGINA, LUEGO DE X SEGUNDO HAGA EL EFECTO DE APARICIÓN 1 EN 1 EN EL NAVBAR
	
	$('.header nav ul li ').each(function(index, elemento){
				$(this).css({
					'top': '-200px',
				'display':'inline-block'
		})
			$(this).animate({
					top: '0'
		},2900 + (index * 500));
	})
		$('.header .text-box').each(function(){
				$(this).css({'display':'block','opacity': '0', 'top': '45%'});
			$(this).animate({opacity: '1',top:'50%'},2700);
	});

	setTimeout(function(){
		swal.fire({
			title:'Welcome!',
			text: 'Hi!, this is my web portfolio in which i use the following technologies: HTML5, CSS3 / Scss, Responsive Design, JavaScript/Jquery.',
			icon:'info',
			footer: 'I hope you like it!',
			showConfirmButton: true,
			confirmButtonText:'Continue !',
			confirmButtonColor: '#4566DF',
			timer:7500,
			timerProgressBar: true,
			customClass:{
				popup: 'popup-class',

			},
			allowOutsideClick:false,
			allowEscapeKey:false,
			allowEnterKey:false,
			
		}) 
	}, 3300);

//HEADROOM
	var nav = document.getElementById('nav');
	var headroom = new Headroom(nav);
	headroom.init();

//MOSTAR Y OCULTAR MENU
	$('#bars').on('click',function(){
		$('#navLinks').css("right","0px");
		//Bloquear el Scroll al hacer click en bars
		document.getElementsByTagName("html")[0].style.overflow = "hidden";
	});


	$('#navLinks ul li').on('click',function(){
		$('#navLinks').css('right','-200px');
		//Permitir el scroll
		document.getElementsByTagName("html")[0].style.overflow = "auto";
	});
	
	$('#times').on('click',function(e){
		$('#navLinks').css("right","-200px");
		$('.header .text-box').css('display','block')
		$('.header .flecha').css('display','block')
		//Permitir el scroll
		document.getElementsByTagName("html")[0].style.overflow = "auto";
	});

//BOTON BACK TO TOP
	const backToTop = $('#back-to-top');
	const header = $('#top-element');

	$(backToTop).click(() => {
		window.scrollTo(0,0);
		header.focus();
	});
//Esconder boton back to top
	$(window).on('scroll',function(){
		if($(window).scrollTop()>400){
			$('#back-to-top').css('display','block');
		}
		else{
			$('#back-to-top').css('display','none');
		}
	});

//CUANDO SCROLLEO CAMBIE EL MENU FIJO DE COLOR
	$(window).on("scroll", function(){
		if($(window).scrollTop()>50){
			$('nav').addClass('sticky');
			$('.header nav a img').css('width','150');
		}
		else{
			$('nav').removeClass('sticky');
			$('.header .text-box').css('z-index','1');
			$('.header nav a img').css('width','200');
		}
	})

//CUANDO HAGO SCROLL SE VAYAN MOSTRANDO LOS ELEMENTOS
	//Seleccionar todos los elemento que tengan la clase animado
	let animado = document.querySelectorAll(".animado");

	function mostrarScroll(){
    	//Medida de scroll
    	let scrollTop = document.documentElement.scrollTop;
    
    	for(var i=0; i < animado.length; i++ ){
        	let alturaAnimado = animado[i].offsetTop;
        
        	if(alturaAnimado - 350 < scrollTop){
            	animado[i].style.opacity=1;
				animado[i].classList.add("mostrarArriba");
        	}	
    	}
	}

	window.addEventListener('scroll',mostrarScroll);	

})