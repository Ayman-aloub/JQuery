$(document).ready(function () {
  $(".container").css({
    backgroundColor: "aqua",
    width: "200px",
    position: "absolute",
    left: "-100px",
  });
  var li = $(".item1 :nth-child(2)").html();
  console.log(li);
  $(".item2").append($("<p>second</p>"), `<ul style="display:none">${li}</ul>`);
  $(".item3").append($("<p>third</p>"), `<ul style="display:none">${li}</ul>`);
  $(".item4").append($("<p>fourth</p>"), `<ul style="display:none">${li}</ul>`);
  $(".container").hover(
    function () {
      $(".container").css({ left: "0px" });
    },
    function () {
      $(".container").css({ left: "-100px" });
    }
  );
  $("ul").css({ backgroundColor: "red" });

  // doing toggle between divs

  $("p").each(function (index, element) {
    $(element).click(function () {
      //$(`ul:eq(${index})`).slideDown(5000, function () {});
      // if ($("p").hasClass("activa")) {
      console.log($("p.active + ul").html);
      $("p + ul.active")
        .slideUp(2000, function () {})
        .removeClass("active");
      // $("p").removeClass("activa");
      // }
      $(`ul:eq(${index})`)
        .slideDown(2000, function () {})
        .addClass("active");
    });
  });
});

// function () {
//   $("ul:eq(0)").slideUp(5000, function () {});
// }
