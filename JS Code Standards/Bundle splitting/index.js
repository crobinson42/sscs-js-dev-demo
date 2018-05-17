import modal from "./Modal";

function showModal() {
  modal("Hello!");
}

window.showModal = showModal;
