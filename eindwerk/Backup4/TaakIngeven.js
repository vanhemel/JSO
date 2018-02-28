// let catLijst = [];
// catLijst.push($('#catTitel').val());
// console.log (catLijst);

function optionsVullen() {
	$.ajax({
		url: '/categorienamen',
		type: 'GET',
		data: $('#addCat').serialize(),
		success: function (data) {
			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst1").append("<option value='"+data.result[i].CATID+"'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='"+data.result[i].CATID+"'>" + data.result[i].CATNAME + "</option>");
			}
		}
	});
}

function categorieAanmaken() {
	$.ajax({
		url: $('#addCat').attr('action'),
		type: 'POST',
		data: $('#addCat').serialize(),
		success: function (data) {

			$('#opslCat').addClass('zichtbaar');
			setTimeout(function () {
				$('#opslCat').removeClass('zichtbaar');
			}, 2500);

			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst1").append("<option value='"+data.result[i].CATID+"'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='"+data.result[i].CATID+"'>" + data.result[i].CATNAME + "</option>");
			}

		}
	});
}

function taakAanmaken() {
	$.ajax({
		url: $('#addTaak').attr('action'),
		type: 'POST',
		data: $('#addTaak').serialize(),
		success: function (data) {
			$('#opslTaak').addClass('zichtbaar');
			setTimeout(function () {
				$('#opslTaak').removeClass('zichtbaar');
			}, 2500);
		}
	});
}

function lijstVullen() {
	
	$.ajax('http://127.0.0.1:2001/catWeergeven',{
		methode: 'GET',
		dataType: 'json',
		success: function (data) {
			$("#takenLijst").empty();
		
			for (var i = 0; i < data.result.length; i++) {
				if(data.result[i].PARENTCATIDC == undefined){
					$("#takenLijst").append("<p id=C"+data.result[i].CATID+" >" + data.result[i].CATNAME + "</p>");
					var categorieID= data.result[i].CATID;
					var paragraafID= "C"+data.result[i].CATID;
				}
			}
		}
	});
}

function init() {
	optionsVullen();
	lijstVullen();
	var btn = document.getElementById("catMaken");
	btn.onclick = categorieAanmaken;
	var btn = document.getElementById("taakMaken");
	btn.onclick = taakAanmaken;
}
window.onload = init;