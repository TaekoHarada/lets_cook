// import React, { useState } from "react";
// import { Form } from "react-router-dom";
// import { getRecipeList } from "../scripts";

// export async function loader({ request }) {
//   try {
//     const formData = await request.formData();
//     console.log("formData", formData);
//     const seachKey = Object.fromEntries(formData);
//     const recipeList = await getRecipeList(seachKey);
//     return recipeList;
//     // return redirect(`/contacts/${params.contactId}`);
//   } catch (error) {
//     console.error("Error fetching recipe list:", error);
//   }
// }

// const SearchForm = () => {
//   // Ingredients for Search
//   const [ingredients, setIngredients] = useState("");
//   // Menu for Search
//   const [menu, setMenu] = useState("");

//   // //on submit event
//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   // fetchRecipeList();
//   // }

//   return (
//     <Form className="flex" method="get" role="search">
//       <div>
//         <label htmlFor="ingredient_box">ingredient</label>
//         <input
//           id="ingredient_box"
//           name="ingredient_box"
//           placeholder="ingredient"
//           type="text"
//           onChange={(e) => setIngredients(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="menu_box">menu</label>
//         <input
//           id="menu_box"
//           name="menu_box"
//           placeholder="menu"
//           type="text"
//           onChange={(e) => setMenu(e.target.value)}
//         />
//       </div>
//       <div>
//         <button type="submit" className="search_btn">
//           Search Recipes!
//         </button>
//       </div>
//     </Form>
//   );
// };

// export default SearchForm;
