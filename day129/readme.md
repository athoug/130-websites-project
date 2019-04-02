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
        <div class="clock">
            <div class="hand second-hand"></div>
            <div class="hand minute-hand"></div>
            <div class="hand hour-hand"></div>
        </div>
    </div>
</main>
```