$(document).ready(function () {
  $("img").hover(
    function (event) {
      console.log($(this).attr("src"));
      var newImage = $(
        `<img src="${$(this).attr(
          "src"
        )}" alt="" id="newImage" width="300px" height="300px" style="position: absolute;top:${
          event.pageY
        }px;left:${event.pageX}px" />`
      );
      $("body").append(newImage);
      $(this).mousemove(function (nevent) {
        //console.log(nevent.pageX);

        let width = `${$("body").css("width")}`;
        console.log(width.substring(0, width.length - 2));
        console.log(nevent.pageX + 300);
        if (nevent.pageX + 300 > Number(width.substring(0, width.length - 2))) {
          console.log("xxxxxxxxxx");
          $("#newImage").css({
            transformOrigin: "0 50%",
            transform: "rotateY(180deg)",
          });
        }
        $("#newImage").css({
          top: `${nevent.pageY}px`,
          left: `${nevent.pageX}px`,
        });
      });
    },
    function () {
      $("#newImage").remove();
    }
  );

  /*hover(
    function () {
      console.log($(this).attr("src"));
    },
    function () {
      console.log($(this));
    }
  );*/

  //second task
});
