## Maquetación de una página.
Elementos a tener en cuenta en la página:
• En el header, la imagen de la sagrada familia, tiene que ser un slider de 3
ítems.

Sección 1, al hacer hover en cada una de las cajas, hay que mostrar la
imagen de fondo que aparece en la pantalla desktop hover. A parte, Tiene
que ser Responsive (Lo sabemos, no hay diseño, queremos ver cómo lo
adaptarías).

Section Scrolling Paralax BG, es necesario que el background de la imagen
haga un efecto parallax.

Sección 4, al hacer hover, hay que mostrar la imagen a color, a poder ser
con una animación pasando de blanco/negro a color.

## Maquetación de una Newsletter
Hay que maquetar la Newsletter, utilizando el html que veas oportuno.


## Live on https://lp-newsletter-page-img-parallax-flip-carousel.netlify.app  

**EXTRAS**
* compressed all images  
* Newsletter page: you get a prompt message so you can put in your name, simulating a real world example, where we would know the user's name.  


.carousel-bullet {
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
            background: transparent;
            background-clip: content-box;
            border: 0.25rem solid white;
            border-radius: 50%;
            font-size: 0;
            transition: transform 0.1s;
            cursor: pointer;

            &:hover {
              background: $body-background-color;
              background-clip: content-box;
            }
* 