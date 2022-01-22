fetch("https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba").then((data) => {
    return data.json(); 
}).then((objectData) => {
    let tableData = "";
    objectData.clients.map((values) => {
        tableData += `<tr>
                        <td>${values.name}</td>
                        <td>${values.company}</td>
                        <td>${values.orderId}</td>
                        <td>${values.invoicepaid}</td>
                        <td>${values.invoicePending}</td>
                        
                      </tr>` ;
    })
    document.getElementById("table-body").innerHTML= tableData;
}).catch((err) => {
    console.log(err);
})