$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// Animasi Scroll
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

let data = new URLSearchParams(window.location.search);
let datax = data.get("page")
$.ajax({
    url: "./assets/doc/data_herbal.json",
    type: "get",
    dataType: "json",
    success: function (detail) {
        var htA = "";
        if(datax== null || datax == 1){
            nilaiAwal = 0; jumlahData = 10;
        }else if(datax == 2){
            nilaiAwal = 10; jumlahData = 20;
        }else if(datax == 3){
            nilaiAwal = 20; jumlahData = 30;
        }else if(datax == 4){
            nilaiAwal = 30; jumlahData = 40;
        }else if(datax == 5){
            nilaiAwal = 40; jumlahData = 50;
        }else if(datax == 6){
            nilaiAwal = 50; jumlahData = 60;
        }else{
            nilaiAwal = 0; jumlahData = 10;
        }
        for (var i = nilaiAwal; i < jumlahData; i++) {
            var namaTanaman = detail['daftar_tanaman'][i]['nama'];
            var descTanaman = detail['daftar_tanaman'][i]['deskripsi'];
            var imgTanaman  = detail['daftar_tanaman'][i]['image_url'];

            htA+='<div class="card mb-3">';
            htA+='<div class="row g-0">';
            htA+=   '<div class="col-md-4">';
            htA+=       '<img src="'+ imgTanaman +'" class="img-fluid rounded-start">';
            htA+=   '</div>';
            htA+=   '<div class="col-md-8">';
            htA+=       '<div class="card-body">';
            htA+=           '<h5 class="card-title">'+ namaTanaman +'</h5>';
            htA+=           '<p class="card-text">'+ descTanaman +'</p>';
            htA+=       '</div>'
            htA+=   '</div>'
            htA+='</div>';
            htA+='</div>';
        }
        $(".divA").html(htA);
    }
});