/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/

$(document).ready(function() {
  //home bk animation starts
  $(document).mousemove(function(e) {
    let width_X, width_Y, x_Left, y_Left, x_Right, y_Right;

    width_X = e.pageX;

    width_Y = e.pageY;

    x_Left = Math.ceil(-width_X / 40);

    y_Left = Math.ceil(-width_Y / 10);

    x_Right = Math.ceil(width_X / 40);

    y_Right = Math.ceil(width_Y / 10);

    $(".planet-stars .img-outer:nth-child(1)").css({
      transform: "translate3d(" + x_Left + "px , " + y_Left + "px , 0px)"
    });

    $(".planet-stars .img-outer:nth-child(2)").css({
      transform: "translate3d(" + x_Right + "px , " + y_Right + "px , 0px)"
    });
  });
  //home bk animation ends

  // hamburger and contact stars
  $(".hamburger").click(function() {
    $(this).toggleClass("open");
    $(".contact-sc").toggleClass("open");
  });
  // hamburger and contact ends

  // event counter star
  var enddate = $(".counter");
  var countDownDate = new Date(enddate.attr("time")).getTime();
  var now, distance, days, hours, minutes, seconds;
  var counting = setInterval(function() {
    now = new Date().getTime();

    distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
      days = "0" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    enddate.html(
      "<div><h1>" +
        days +
        "</h1><p>D</p></div><span>:</span> " +
        "<div><h1>" +
        hours +
        "</h1><p>H</p></div><span>:</span>  " +
        "<div><h1>" +
        minutes +
        "</h1><p>M</p></div><span>:</span>  " +
        "<div><h1>" +
        seconds +
        "</h1><p>S</p></div>"
    );

    if (distance < 0) {
      clearInterval(counting);
      enddate.html("Event Ended");
    }
  }, 100);
  // event counter end

  // contact form validation start
  $("form").submit(function(event) {
    
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test($("input[name=email]").val())) {
      return;
    } else {
      $("form span.error").html("*Your e-mail address is not valid.").fadeIn();
      $("form input[name=email]").addClass("error")
    }
    // console.log("error");

    event.preventDefault();
  });
  // contact form validation end
});
