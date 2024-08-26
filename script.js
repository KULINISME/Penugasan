async function load() {
    let data = await fetch("data.json");
    data = await data.json();
    
    let comp = ""
    
    data.forEach(element => {
        comp += `<tr>
            <td>${element.nama}</td>
        </tr>`
    });

    document.getElementById('kotakku').innerHTML = comp
}

load()