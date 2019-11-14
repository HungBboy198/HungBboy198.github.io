$(document).ready(function(){

	// thiết lập menu khi ở màn hình mobile
	$('.mobile-menu-icon').click(function(event) {
		$('.mobile-menu-icon').toggleClass('active-menu');
		$('.menu').toggleClass('show-menu');
		$('.background-black').toggleClass('show-background-black');
	});	
	$('.background-black').click(function(event) {
		$('.mobile-menu-icon').removeClass('active-menu');
		$('.menu').removeClass('show-menu');
		$('.background-black').removeClass('show-background-black');
	});


	// thiết lập khi click submit ở contact
    $('.btn-submit').click(function(event) {

        if ($('.text-message').val() == 0){
        	$('.message span').text('Bạn chưa nhập tin nhắn *');
        	return false;
        }
        else if ($('.text-message').val().length <= 5) {
        	$('.message span').text('Tin nhắn phải trên 5 ký tự *');
        	return false;
        }
        else{
        	$('.message span').text("");
        	return true;
        }
    });

	

	// ************************************************************************

	//khai báo mảng cho menu và mảng thành phần
    const vt_scroll_menu = $('.scroll-menu').toArray();
    const vt_scroll_project = $('.one-project').toArray();
    const arr_menu = $('.menu nav a').toArray();
    
    //thiết lập khi click menu
    for (let i = 0; i < arr_menu.length; i++) {
    	$(arr_menu[i]).click(function(event) {
    		// thêm xoá active cho menu
    		for (let j = 0; j < arr_menu.length; j++) {
    			$(arr_menu[j]).removeClass('active-menu');
    		}
    		$(arr_menu[i]).addClass('active-menu');

    		//chức năng scroll đến phần tử tương ứng của menu
    		if (i == 0) {
    			$("html, body").animate({ scrollTop: 0 }, 500); 
        		return false;
    		}
    		else{
	    		$("html, body").animate({ scrollTop: $(vt_scroll_menu[i - 1]).offset().top }, 500); 
	        	return false; 
        	}
    	});

    }

    //Thiết lập chức năng scroll to top và hiệu ứng load web
	$(window).scroll(function(){ 
		// GOTOP
        if ($(this).scrollTop() > 100) { 
            $('#goTop').fadeIn(); 
        }
        else { 
            $('#goTop').fadeOut(); 
        } 
        $('#goTop img').css('transform', 'rotate(' + $(this).scrollTop()/2 + 'deg)');
        // LOAD WEB
        for (let i = 0; i < vt_scroll_menu.length; i++) {
            if (i == 0) {
                for (let j = 0; j < arr_menu.length; j++) {
                    $(arr_menu[j]).removeClass('active-menu');
                }
                $(arr_menu[i]).addClass('active-menu');
            }
            if (i == vt_scroll_menu.length -1) {
                if ($(this).scrollTop() > ($(vt_scroll_menu[i]).offset().top - 500)) {
                    $(vt_scroll_menu[i]).addClass('bannerText');
                    for (let j = 0; j < arr_menu.length; j++) {
                        $(arr_menu[j]).removeClass('active-menu');
                    }
                    $(arr_menu[i+1]).addClass('active-menu');
                }
            }
        	else if ($(this).scrollTop() > ($(vt_scroll_menu[i]).offset().top - 300)) {
        		$(vt_scroll_menu[i]).addClass('bannerText');
                for (let j = 0; j < arr_menu.length; j++) {
                    $(arr_menu[j]).removeClass('active-menu');
                }
                $(arr_menu[i+1]).addClass('active-menu');
        	}
        }

        for (let i = 0; i < vt_scroll_project.length; i++) {
        	if ($(this).scrollTop() > ($(vt_scroll_project[i]).offset().top - 200)) {
        		$(vt_scroll_project[i]).addClass('show-img-project');
        	}
        }


    }); 
    //SCROLL TO TOP
	    $('#goTop').click(function(){ 
	        $("html, body").animate({ scrollTop: 0 }, 600); 
	        return false; 
	    });

});