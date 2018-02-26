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
				$("#catLijst1").append("<option>" + data.result[i] + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option>" + data.result[i] + "</option>");
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
				$("#catLijst1").append("<option>" + data.result[i] + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option>" + data.result[i] + "</option>");
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

function init() {
	optionsVullen();
	var btn = document.getElementById("catMaken");
	btn.onclick = categorieAanmaken;
	var btn = document.getElementById("taakMaken");
	btn.onclick = taakAanmaken;
}
window.onload = init;