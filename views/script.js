$("#search").on("click", () =>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "contract_address": $("#contractAddress").val(),
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://0.0.0.0:8000/api/contract/log/all", requestOptions)
    .then(response => response.json())
    .then(result => {
      result.json.forEach(elem => {
        if(elem.decode_log.event_name == 'ProofCreated' && elem.decode_log.value == $("#fileValue").val()){
          console.log(elem)
          $('#result').append(JSON.stringify(elem));
        }
      });
    })
    .catch(error => console.log('error', error));
})