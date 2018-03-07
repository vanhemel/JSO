// let catLijst = [];
// catLijst.push($('#catTitel').val());
// console.log (catLijst);

/*function optionsVullen() {
	$.ajax({
		url: '/categorienamen',
		type: 'GET',
		data: $('#addCat').serialize(),
		success: function (data) {
			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
		}
	});
}*/
function optionsVullen() {
	$.ajax({
		url: '/categorienamen',
		type: 'GET',
		data: $('#addCat').serialize(),
		success: function (data) {
			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				if (data.result[i].ID == 1) { 			// ID van IRINA ipv 1
					$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
				};
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				if (data.result[i].ID == 1) { 			// ID van IRINA ipv 1
					$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
				};
			}
			$('#catTitel').val('');
			$('#taakTitel').val('');
			$('#taakOmschr').val('');
			lijstVullen();
		}
	});
}

/*function categorieAanmaken() {
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
				$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}

		}
	});
}*/
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
				$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			optionsVullen();
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
			optionsVullen();
		}
	});
}

function lijstVullen() {

	$.ajax('http://127.0.0.1:2001/catWeergeven', {
		methode: 'GET',
		dataType: 'json',
		success: function (data) {
			$("#takenLijst").empty();
			var hoofdcats = data.result.filter(cat => cat.PARENTCATIDC == undefined && cat.ID == 1);	// ID van IRINA ipv 1
			var unic_hoofdcats = [];
			for (var i = 0; i < hoofdcats.length; i++) {
				if (!unic_hoofdcats.find(cat => cat.CATID == hoofdcats[i].CATID)) { unic_hoofdcats.push(hoofdcats[i]); }
			}
			hoofdcats = unic_hoofdcats;
			for (var i = 0; i < hoofdcats.length; i++) {
				$("#takenLijst").append("<fieldset id=C" + hoofdcats[i].CATID + " ><legend onclick='inuit(" + hoofdcats[i].CATID + ")'><i class='fas fa-book'></i> " + hoofdcats[i].CATNAME + "</i></legend><div class='edit fas fa-pencil-alt' onmouseenter='gain(" + hoofdcats[i].CATID + ")' onmouseleave='gauit(" + hoofdcats[i].CATID + ")'></div></fieldset>");
				verwerksubcat(hoofdcats[i].CATID, data.result);
			}
			verwerkTaken(data.result);
		}
	});
}

function verwerksubcat(parentid, data) {
	var subcats = data.filter(cat => cat.PARENTCATIDC == parentid && cat.ID == 1);	// ID van IRINA ipv 1
	var unic_subcats = [];
	for (var i = 0; i < subcats.length; i++) {
		if (!unic_subcats.find(cat => cat.CATID == subcats[i].CATID)) { unic_subcats.push(subcats[i]); }
	}
	subcats = unic_subcats;
	for (var i = 0; i < subcats.length; i++) {
		$("#C" + subcats[i].PARENTCATIDC).append("<fieldset id=C" + subcats[i].CATID + " ><legend onclick='inuit(" + subcats[i].CATID + ")'><i class='fas fa-book'></i> " + subcats[i].CATNAME + "</legend><div class='edit fas fa-pencil-alt' onmouseenter='gain(" + subcats[i].CATID + ")' onmouseleave='gauit(" + subcats[i].CATID + ")'></div></fieldset>");
		verwerksubcat(subcats[i].CATID, data);
	}
}

function verwerkTaken(result) {console.dir(result);
	var taken = result.filter(t => t.PARENTCATIDT != undefined && t.ID == 1);	// ID van IRINA ipv 1
	for (var i = 0; i < taken.length; i++) {
		$("#C" + taken[i].CATID).append("<fieldset id=T" + taken[i].TAAKID + " ><legend><i class='fas fa-clipboard'></i> " + taken[i].TITEL + "</legend><div class='edit fas fa-pencil-alt' onmouseenter='gaint(" + taken[i].TAAKID +")' onmouseleave='gauitt(" + taken[i].TAAKID + ")'></div><p>" + taken[i].TAAKOMSCHR + "</p>" + "</fieldset>");
	}
}

function inuit(x){$('#C'+x).children('fieldset').toggle();}

function gain(c){
	$('#C'+c+'>.edit').html('<button onclick="updCat('+c+')">update</button><button onclick="delCat('+c+')">wissen</button>');
}
function gauit(c){$('#C'+c+'>.edit').html('');}
function gaint(t){
	$('#T'+t+'>.edit').html('<button onclick="updTaak('+t+')">update</button><button onclick="delTaak('+t+')">wissen</button>');
}
function gauitt(t){$('#T'+t+'>.edit').html('');}

function delCat(c){
	$.post("http://127.0.0.1:2001/delCat", { idC: c }, function (data) {optionsVullen();});
}
function delTaak(t){
	$.post("http://127.0.0.1:2001/delTaak", { idT: t }, function (data) {optionsVullen();});
}
function updCat(c){gauit(c);
	$('#C'+c+'>legend').html('<input type="text" value="'+$('#C'+c+'>legend').text().slice(1)+'" autofocus="true"><button onclick="updateCat('+c+')">update</button>');
}
function updateCat(c){
	$.post("http://127.0.0.1:2001/updateCat", { idC: c, catname: $('#C'+c+'>legend>input').val()}, function (data) {optionsVullen();});
}
function updTaak(t){gauitt(t);
	$('#T'+t+'>legend').html('<input type="text" value="'+$('#T'+t+'>legend').text().slice(1)+'" autofocus="true"><button onclick="updateTaak('+t+')">update</button><br><textarea rows="4" cols="60">'+$('#T'+t+' p').text()+'</textarea>');
}
function updateTaak(t){
	$.post("http://127.0.0.1:2001/updateTaak", { idT: t, taakomschr: $('#T'+t+'>legend>textarea').val(), taakname: $('#T'+t+'>legend>input').val()}, function (data) {optionsVullen();});
}


function init() {
	optionsVullen();
	
	var btn = document.getElementById("catMaken");
	btn.onclick = categorieAanmaken;
	var btn = document.getElementById("taakMaken");
	btn.onclick = taakAanmaken;

	
}
window.onload = init;