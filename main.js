import { Web3Storage } from "web3.storage";
var form = document.getElementById("mainForm");
var fileInput = document.getElementById("file-input");
var cidDiv = document.getElementById("cid-div");
var fileSelected;


fileInput.onchange = fileSelecting

function fileSelecting(e) {
    fileSelected = e.target.files[0]
}

form.addEventListener("submit", async function(e)  {
    e.preventDefault();
    var token = document.getElementById("token").value

    const web3Storage = new Web3Storage({token})

    console.log(token)

    const cid = await web3Storage.put([fileInput.files[0]], {
        name: fileInput.files[0].name,
        onRootCidReady: (localCid) => {
            console.log(localCid)
        }
    })

    cidDiv.innerHTML=`https://${cid}.ipfs.dweb.link/`

})