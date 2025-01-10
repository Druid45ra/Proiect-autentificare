$(document).ready(function () {
  // Gestionarea trimiterii formularului
  $("#login-form").on("submit", function (e) {
    e.preventDefault(); // Previne reîncărcarea paginii

    const email = $("#email").val();
    const password = $("#password").val();

    if (!email || !password) {
      $(".message")
        .text("Toate câmpurile sunt obligatorii.")
        .css("color", "red")
        .fadeIn()
        .delay(3000)
        .fadeOut();
    } else {
      $(".message")
        .text("Autentificare reușită!")
        .css("color", "green")
        .fadeIn()
        .delay(3000)
        .fadeOut();
    }
  });

  // Afișare/ascundere parolă
  $(document).on("click", ".toggle-password", function () {
    const passwordField = $("#password");
    const type =
      passwordField.attr("type") === "password" ? "text" : "password";
    passwordField.attr("type", type);

    $(this).toggleClass("fa-eye fa-eye-slash");
  });
});
