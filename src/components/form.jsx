import React, { useEffect, useRef } from 'react';
function Form() {
const form = useRef()

useEffect(() => {

  console.log(form.current)
  form.current.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('http://localhost:8080/query',{ method: 'POST',})
    .then((resp) => resp.json())
    .then(json => console.log(json))
  })
}, [])

  return (
    <React.Fragment>

      <form ref={form} action="http://localhost:8080/query" method="POST">

        <span>Nome</span>
        <input type="text" name="name" />

        <button>Incluir</button>

      </form>

    </React.Fragment>

  );
}



export default Form;

