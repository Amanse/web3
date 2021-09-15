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

    const cid = await web3Storage.put([fileInput.files[0]], {
        name: fileInput.files[0].name,
        onRootCidReady: (localCid) => {
            console.log(localCid)
        },
				onStoredChunk: (byte) => showMessage(` uploaded ${byte.toLocaleString()} `)		
    })

    cidDiv.innerHTML=`https://${cid}.ipfs.dweb.link/`

})

function showMessage(text) {
  const output = document.getElementById('output')
  if (!output) {
    return
  }
  const node = document.createElement('div')
  node.innerText = text
  output.appendChild(node)
}

