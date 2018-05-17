import modal from "./Modal";

function showModal() {
  modal("Hello!");
}

document.querySelector("#root").innerHTML(`
  <div>
    <button onclick="showModal();">Show Modal</button>
  </div>
`);
