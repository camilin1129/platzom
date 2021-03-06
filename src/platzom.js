
export default function platzom(str){
    let translation = str

    //si la palabra termina en "ar" se le quitan esos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
     }
    //si la palabra inicia con z, se le añade "pe al final"
    if (str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }
    //si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion del medio 
    const lenght = translation.length 
    if ( lenght >= 10 ){
        const firstHalf = translation.slice(0, Math.round(lenght / 2)) 
        const secondHalf = translation.slice(Math.round(lenght / 2))
        translation = `${firstHalf}-${secondHalf}`
    }
    //si la palabra original es un palindromo, niguna regla anterior cuenta y se
    //devuelve la misma palabra intercalando mayuscula y minusculas
    const reverse = (str) => str.split('').reverse().join('')

    function minMay(str){
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i= 0; i < length; i++){
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize =! capitalize
        }
        return translation
    }    
    if (str == reverse(str)){
        return minMay(str)
    }

     return translation
}
