function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
	let tr = document.createElement("tr");
	tr.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
	table.insertBefore(tr,table.rows[0]);
  
}
