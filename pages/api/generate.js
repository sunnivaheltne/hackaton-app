import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// openai.createChatCompletion({
//   model: 'gpt-3.5-turbo',
//   messages: [
//     {
//       role: 'user',
//       // content: `"Hello, chatGPT! I want recommendations for a recipe with "${ingredients}`,
//       content:
//         'Hello, chatGPT! I want recommendations for three recipes with potatoes',
//     },
//   ],
// })
// .then((response) => {
//   console.log(response);
// });

function generateRecipe(ingredients) {
  const capitalizedIngredients = ingredients[0].toUpperCase() + ingredients.slice(1);
  return `Suggest three recipes with ${capitalizedIngredients}`;
}
