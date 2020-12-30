$(document).ready(function () {
  $(".vertical__nav__list__dropdownItem").click(function () {
    $(this).find(".vertical__nav__list__dropdownItem__wrapper").slideToggle();
    $(this).toggleClass("vertical__nav__list__dropdownItem__open");
  });
});
