const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    if (pizzaPalace.pizzas.includes(pizzaName)) {
      // onSuccess(pizzaName);
      return onSuccess(pizzaName);
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         for (const pizza of pizzaPalace.pizzas) {
//             if (pizza === pizzaName) {
//             onSuccess(pizzaName);
//               return;
//             }
//             onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//         }
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

