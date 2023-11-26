const generatorForm = document.querySelector(".generator-form");
const imgGallory = document.querySelector(".images-generated");
const OPENAI_API_KEY = "";

// const iaGeneratorImg = async (description, quantity) => {
//   try {
//     const response = await fetch(
//       "https://api.openai.com/v1/images/generations",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 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`,
//         },
//         body: JSON.stringify({
//           prompt: description,
//           n: parseInt(quantity),
//           size: "512x512",
//           response_format: "b64_json",
//         }),
//       }
//     );

//     const { data } = await response.json(); // Corrected this line
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

const iaGeneratorImg = async (di, q) => {
  const options = {
    method: "GET",
    url: "https://text-to-image7.p.rapidapi.com/",
    params: {
      prompt: "<REQUIRED>",
      batch_size: "2",
      negative_prompt: "fod",
    },
    headers: {
      "X-RapidAPI-Key": "b5f8714d52mshbb6ac7441d0e878p11048ajsnb52a9d7f10dd",
      "X-RapidAPI-Host": "text-to-image7.p.rapidapi.com",
    },
  };

  try {
    const response = await request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

generatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.srcElement;
  const imgDescription = form[0].value;
  const imgQuantity = form[1].value;
  const fill = Array.from(
    { length: imgQuantity },
    () =>
      ` <div class="images laoding">
    <img src="loader.svg" class="" alt="">
    <a href="" class="download-img">
        <img src="download.svg" alt=""></a>
</div>`
  ).join("");
  imgGallory.innerHTML += fill;
  console.log(imgDescription, imgQuantity);

  iaGeneratorImg(imgDescription, imgQuantity);
});

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://text-to-image7.p.rapidapi.com/',
//   params: {
//     prompt: 'a painting of foxes playing poker, disney, zootopia',
//     batch_size: '1',
//     negative_prompt: 'ugly, duplicate, morbid, mutilated, [out of frame], extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, bad anatomy, bad proportions'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b5f8714d52mshbb6ac7441d0e878p11048ajsnb52a9d7f10dd',
//     'X-RapidAPI-Host': 'text-to-image7.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
