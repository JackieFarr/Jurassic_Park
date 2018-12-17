class Request {

  // get(url) {
  //   return fetch(url)
  //   .then((res) => res.json());
  //   .then(res => res.text())          // convert to plain text
  //   .then(text => console.log(text))
  // }


  get(url) {
    return fetch(url)
    .then((res) => res.json());
  }

  post(url, payload){
    return fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  }

  delete(url) {
    return fetch(url, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
  }

  patch(url, payload){
    return fetch(url, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  }

}

export default Request;
