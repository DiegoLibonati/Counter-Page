# Counter-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a web page that contains a simple counter, this counter could increment the result shown on the screen, decrement that value and even do a reset to return to 0 its default value. Also if the number is positive it will be green, if it is negative it will be red and if the default is 0 it will be black.

## Feel free to edit my code

Here you can edit the color if the number is positive, negative or default 0.

```
function Colors(){

    if (count > 0){
        numberCounter.style.color = "green";
    } else if (count < 0){
        numberCounter.style.color = "red";
    } else{
        numberCounter.style.color = "black";
    }

}
```

You can edit the default value.

```
let count = 0;
```

If you want to add other button, you need to that in index.html. Before that you go to "codigo.js" and get that button and add a functionality like this:

```
YOURBUTTON.addEventListener("click", ()=>{

    DO SOMETHING

});
```

## Technologies used

1. Javascript
2. CSS3
3. HTML5

## Galery

![Counter](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/counter-0.jpg)

![Counter](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/counter-1.jpg)

![Counter](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/counter-2.jpg)

![Counter](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/counter-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Counter%20page`

## Video


https://user-images.githubusercontent.com/99032604/198900237-ea0835d1-7b2f-4452-8c92-807e9f60e859.mp4

