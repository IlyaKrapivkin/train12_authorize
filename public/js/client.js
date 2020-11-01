document.forms.searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const resultContainer = document.getElementById('itogDiv');
  const userName = document.forms.searchForm.written.value;

  const res = await fetch('/userapi/user', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ userName }),
  });
  const result = await res.text();

  resultContainer.innerHTML += result;
});
