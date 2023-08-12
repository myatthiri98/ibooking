document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const boldTexts = document.querySelectorAll(".hotelroom p b");

  checkboxes.forEach(function (checkbox, index) {
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        boldTexts[index].style.color = "orange";
      } else {
        boldTexts[index].style.color = ""; // Reset to default color
      }
    });
  });

  const quantities = document.querySelectorAll(".secroom #quantity");
  quantities.forEach(function (quantity, index) {
    var value = 1; // Initial quantity value

    $(quantity)
      .parent()
      .find(".BTN")
      .click(function () {
        var button = $(this);
        var increment = button.hasClass("btn-plus") ? 1 : -1;
        value += increment;

        // Update the quantity input value
        $(quantity).val(value);
      });
  });
});
