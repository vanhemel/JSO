window.onload = gegevensHalen;

function gegevensHalen() {
	 var file = "sales.json"; 
	 var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
		if(this.readyState == 4  && this.status == 200){
            var sales = JSON.parse(request.responseText);
			var divSales = document.getElementById("sales");
            for(i=0; i<sales.length; i++){
                var div = document.createElement("div");     
                div.setAttribute ("class", "saleItem")
                var textnode = document.createTextNode (sales[i].name +", sold: "+sales[i].sales+" gumballs");       
                div.appendChild(textnode);   
                document.getElementById("sales").appendChild(div);
            }
		}
    }
    request.open("GET", file);
	request.send();
}

