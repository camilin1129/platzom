
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

    it('si la palabra termina en "ar" se le quitan esas dos letras', function() {
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('si la palabra inicia con z, se le añade "pe" al final', function() {
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
    it('si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion del medio', function() { 
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    it('Por ultimo, si la palabra original es un palindromo, niguna regla anterior cuenta y se devuelve la misma palabra intercalando mayuscula y minusculas', function() {
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})