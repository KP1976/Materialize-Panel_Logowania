$(".section").hide();

setTimeout(_ => {
  $(function() {
    $(".loader").hide();

    $(".section").show();

    // BOCZNE MENU
    $(".button-collapse").sideNav();

    // MODAL
    $(".modal").modal();

    // DROPDOWN
    $(".dropdown-button").dropdown({
      constrainWidth: false,
      hover: true,
      container: true,
      belowOrigin: true,
      alignment: "left"
    });
  });
}, 1300);
