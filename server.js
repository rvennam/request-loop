const axios = require('axios')


// repeat with the interval of 2 seconds
let timerId = setInterval(() => callURL(), 2000);


function callURL(){
  url = process.env.URL || "http://google.com"
  axios
  .get(url)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res.data);
  })
  .catch(error => {
    console.error(error)
  })
}

setTimeout(() => { clearInterval(timerId); console.log('stopped'); }, 500000);