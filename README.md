# Platzom  
Platzom es un idioma inventado para
el [curso de Fundamentos de JavaScript](https://platzi.com/js)
de [Platzi](https://platzi.com), el mejor de educación online 

## Descripción del idioma
-si la palabra termina en "ar" se le quitan esas dos letras
-si la palabra inicia con z, se le añade "pe" al final
-si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion del medio   
-Por ultimo, si la palabra original es un palindromo, niguna regla anterior cuenta y se
devuelve la misma palabra intercalando mayuscula y minusculas   

## Instalación

```
npm install platzom
```
## Uso

```
import platzom from 'platzom'

platzom('Programar') //program
platzom('Zorro') //zorrope
platzom('Zarpar') //zarppe
platzom('abecedario') //abece-dario
platzom('sometemos') //SoMeTeMoS
```
## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
