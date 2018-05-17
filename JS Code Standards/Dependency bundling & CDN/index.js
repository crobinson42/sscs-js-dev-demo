import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

$('#root').html(`
  <div>
    <h3>#hardwareMatters</h3>
  
    <button class="btn btn-primary" onclick="ajaxCall();">Load Some Data</button>
    
    <div id="data"></div>
  </div>
`);

function ajaxCall() {
  $.ajax('https://www.al4president.com/api/favorite-macbooks')
    .then((response) => {
      $('#data').html(response)
    });
}
