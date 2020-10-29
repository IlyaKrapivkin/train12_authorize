document.forms.searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userName = document.forms.searchForm.name.value;
  const res = fetch('/userapi/user', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name: userName }),
  });
  const result = await res.json();
  const resultContainer = document.getElementById('result');
  resultContainer.innerText = result;
});
