# Counter Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a web page that contains a simple counter, this counter could increment the result shown on the screen, decrement that value and even do a reset to return to 0 its default value. Also if the number is positive it will be green, if it is negative it will be red and if the default is 0 it will be black.

## Technologies used

1. Typescript
2. CSS3
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Counter-Page`](https://www.diegolibonati.com.ar/#/project/Counter-Page)

## Video

https://user-images.githubusercontent.com/99032604/198900237-ea0835d1-7b2f-4452-8c92-807e9f60e859.mp4

## Documentation

Here we get the `Decrease` button. It will subtract 1 from the general counter:

```
const btnDecrease = document.getElementById("btndecrease") as HTMLButtonElement;
```

Here we get the `Reset` button. This button will reset the general counter to 0:

```
const btnReset = document.getElementById("btnreset") as HTMLButtonElement;
```

Here we get the `Increase` button. This button will add 1 to the general counter:

```
const btnIncrease = document.getElementById("btnincrease") as HTMLButtonElement;
```

Here we get the element which will show the counter or the number we are managing in the page:

```
const numberCounter = document.querySelector(".number_counter") as HTMLHeadingElement;
```

This is the variable that we will use to add, subtract or reset the counter with each click:

```
let count: number = 0;
```

Here to the increment button we assign a click event, in each click it will add 1 to the general counter, it will also show it in the `numberCounter` element and finally it will execute the `Colors()` function:

```
btnIncrease.addEventListener("click", () => {
  count++;

  numberCounter.textContent = String(count);

  Colors();
});
```

Here to the increment button we assign a click event, in each click it will return to 0 the general counter, also it will show it in the `numberCounter` element and finally it will execute the `Colors()` function:

```
btnReset.addEventListener("click", () => {
  count = 0;

  numberCounter.textContent = String(count);

  Colors();
});

```

Here to the increment button we assign a click event, in each click it will subtract 1 to the general counter, it will also show it in the `numberCounter` element and finally it will execute the `Colors()` function:

```
btnDecrease.addEventListener("click", () => {
  count--;

  numberCounter.textContent = String(count);

  Colors();
});

```

The `Colors()` function will change the style of the element containing the general counter depending on whether it is a positive, negative or neutral number:

```
const Colors = (): void => {
  if (count > 0) {
    numberCounter.style.color = "green";
    return;
  } else if (count < 0) {
    numberCounter.style.color = "red";
    return;
  }

  numberCounter.style.color = "black";
  return;
};
```
