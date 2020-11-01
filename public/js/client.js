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
//
document.forms.addUserForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userName = document.forms.addUserForm.name.value;
  const userPhone = document.forms.addUserForm.phone.value;
  const resultContainer = document.getElementById('itogDiv');

  const res = await fetch('/userapi/users', {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name: userName, phone: userPhone }),
  });

  if (res.status === 200) {
    resultContainer.innerHTML += '<h1>vse ok</h1>';
  } else {
    resultContainer.innerHTML += '<h1>OSHIBKAAAAAA!</h1>';
  }
});
