import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { HungryBear } from './../src/hungrybear.js';



$(document).ready(function() {

  let fuzzy;

  $("button#start").click(function() {
    fuzzy = new HungryBear;
    fuzzy.setHunger();

    setInterval(function(){
    $("#hunger-level").text(fuzzy.foodLevel);
    }, 1000);

    setInterval(function() {
      if (fuzzy.eaten === true) {
        $("#hunger-level").text("You've been eaten by the bear!");
      };
      console.log(fuzzy.eaten);
      fuzzy.didYouGetEaten();
    }, 1000);
  });

  $("button#feed").click(function() {
    fuzzy.feed();
  });
});