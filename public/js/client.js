document.forms.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = document.forms.searchForm.name.value;
  fetch('/userapi/user' {
    method: "POST",
    headers: {}
  })
});
