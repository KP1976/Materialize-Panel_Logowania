$(".section").hide();
$(".main-container").hide();

// setTimeout(_ => {
$(function () {
  $(".loader").hide();

  $(".section").show();
  $(".main-container").show();

  // BOCZNE MENU
  $(".button-collapse").sideNav();

  // MODAL
  $(".modal").modal();

  // INICJALIZACJA SELECT W MODALU
  $('select').material_select();

  // DROPDOWN
  $(".dropdown-button").dropdown({
    constrainWidth: false,
    hover: true,
    container: true,
    belowOrigin: true,
    alignment: "left"
  });

  // ZADANIA
  $("#todo-form").submit(e => {
    const output = `
      <li class="collection-item">
        <div class="blue-text">${$("#todo").val()}<a href="#!" class="secondary-content delete">
          <i class="material-icons grey-text text-darken-4">close</i>
        </a></div>
      </li>`;

    $(".todos").append(output);

    Materialize.toast('Zadanie dodane', 1500, 'rounded');

    e.preventDefault();
  });

  // KASOWANIE ZADAŃ
  $(".todos").on("click", ".delete", function (e) {
    $(this).parent().parent().remove();

    Materialize.toast('Zadanie usunięte', 1500, 'rounded');

    e.preventDefault();
  });
});
// }, 1300);
