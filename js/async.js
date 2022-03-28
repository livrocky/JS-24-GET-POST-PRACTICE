const baseUrl = "https://olive-bead-glazer.glitch.me";
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", sendBrandModel);

async function sendBrandModel() {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand: "BMW",
      model: "X5",
    }),
  });
  const data = await res.json();
  console.log("data", data);
  getCars()
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      getCars();
    })
    .catch((error) => console.log(error.message));
}

async function getCars() {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log("data", data);
  } catch (error) {
    console.log(error.message);
  }

  // fetch(baseUrl)
  //   .then((res) => res.json())
  //   .then((data) => console.log('data', data))
  //   .catch((err) => console.log(err.message));
}

getCars();
