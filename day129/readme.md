# Theme Clock

Buulding on the day 2 of the [30 day JS](https://javascript30.com/) challenge. I decided that for today I'll do the analog clock but style it based on this amazing design by [Gleb Kuznetsov](https://dribbble.com/shots/2286742-Alarm-Clock-Skin) and the thing is I want to implement that neon seconds progress circle and have a theme
where users can switch based on their prefrence if they want a dark or light theme. With that said lets get started.

## Dependences

A couble of libraries I will be using include:

* [Google Font](https://fonts.google.com/) for the fontface
* [Font Awesome](https://origin.fontawesome.com/) for the icons for light and dark themes

### HTML

I'll start the structure of the page based on the minimal style then later add on it so far the page structure looks
like so

``` html
 <main>
        <div class="container">
            <div class="seconds-container">
                <div class="seconds" data-key="0"></div>
                <div class="seconds" data-key="1"></div>
                <div class="seconds" data-key="2"></div>
                <div class="seconds" data-key="3"></div>
                <div class="seconds" data-key="4"></div>
                <div class="seconds" data-key="5"></div>
                <div class="seconds" data-key="6"></div>
                <div class="seconds" data-key="7"></div>
                <div class="seconds" data-key="8"></div>
                <div class="seconds" data-key="9"></div>
                <div class="seconds" data-key="10"></div>
                <div class="seconds" data-key="11"></div>
                <div class="seconds" data-key="12"></div>
                <div class="seconds" data-key="13"></div>
                <div class="seconds" data-key="14"></div>
                <div class="seconds" data-key="15"></div>
                <div class="seconds" data-key="16"></div>
                <div class="seconds" data-key="17"></div>
                <div class="seconds" data-key="18"></div>
                <div class="seconds" data-key="19"></div>
                <div class="seconds" data-key="20"></div>
                <div class="seconds" data-key="21"></div>
                <div class="seconds" data-key="22"></div>
                <div class="seconds" data-key="23"></div>
                <div class="seconds" data-key="24"></div>
                <div class="seconds" data-key="25"></div>
                <div class="seconds" data-key="26"></div>
                <div class="seconds" data-key="27"></div>
                <div class="seconds" data-key="28"></div>
                <div class="seconds" data-key="29"></div>
                <div class="seconds" data-key="30"></div>
                <div class="seconds" data-key="31"></div>
                <div class="seconds" data-key="32"></div>
                <div class="seconds" data-key="33"></div>
                <div class="seconds" data-key="34"></div>
                <div class="seconds" data-key="35"></div>
                <div class="seconds" data-key="36"></div>
                <div class="seconds" data-key="37"></div>
                <div class="seconds" data-key="38"></div>
                <div class="seconds" data-key="39"></div>
                <div class="seconds" data-key="40"></div>
                <div class="seconds" data-key="41"></div>
                <div class="seconds" data-key="42"></div>
                <div class="seconds" data-key="43"></div>
                <div class="seconds" data-key="44"></div>
                <div class="seconds" data-key="45"></div>
                <div class="seconds" data-key="46"></div>
                <div class="seconds" data-key="47"></div>
                <div class="seconds" data-key="48"></div>
                <div class="seconds" data-key="49"></div>
                <div class="seconds" data-key="50"></div>
                <div class="seconds" data-key="51"></div>
                <div class="seconds" data-key="52"></div>
                <div class="seconds" data-key="53"></div>
                <div class="seconds" data-key="54"></div>
                <div class="seconds" data-key="55"></div>
                <div class="seconds" data-key="56"></div>
                <div class="seconds" data-key="57"></div>
                <div class="seconds" data-key="58"></div>
                <div class="seconds" data-key="59"></div>
            </div>
            <div class="clock">
                <div class="hand second-hand"></div>
                <div class="hand minute-hand"></div>
                <div class="hand hour-hand"></div>
            </div>
        </div>
    </main>
```

okay I'll work with that for now. moving on to styling

### CSS

first the light theme. I'm trying to immulate the design and it was a bit touch since gradients are my bain. so far this is what I styled the body as

``` css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
    background: rgb(234,240,239);
    background: linear-gradient(90deg, rgba(234,240,239,1) 0%, rgba(218,227,227,1) 100%);
}
```

and this gives us this light gradient background

![screenshot of gradient background](img/1.png)