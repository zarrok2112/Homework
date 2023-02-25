export const parOimpar = () => {
    const validacion = (a) => {
        let b = a % 2
        let res = ""

        if(b === 0 ){
            res = " es par"
        }else{
            res = " es impar"
        }
        return a + res ;
    }

    return {
        validacion}
} 