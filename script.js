function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
	let tr = document.createElement("tr");
	let td1 = document.createElement("td");
	td1.textContent = "New Cell1";
	tr.appendChild(td1);
	let td2 = document.createElement("td");
	td2.textContent = "New Cell2";
	tr.appendChild(td2);
	table.insertBefore(tr,table.firstElementChild);
  
}
