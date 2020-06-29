import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { HungryBear } from './../src/hungrybear.js';

$(document).ready(function() {

  let fuzzy;

  $("#start").submit(function(event) {
    event.preventDefault();
    let fuzzy = new HungryBear;
    fuzzy.setHunger();
    $("#hunger-level").text(fuzzy.foodLevel);
  });

  $("#feed").click(function() {
    fuzzy.feed();
  });


});