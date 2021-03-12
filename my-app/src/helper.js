export function obtenerDiferenciaAño(year)
{
    return new Date().getFullYear() - year;
}

export function calcularMarca(modelo)
{
    let incremento;

    switch (modelo)
    {
        case 'Europeo':
            incremento = 1.30;
            break;
        case 'Americano':
            incremento = 1.15;
            break;
        case 'Asiatico':
            incremento = 1.05;
            break;
        default:
            break;        
    }

    return incremento;
}

export function obtenerPlan(plan)
{
    return (plan === 'basico') ? 1.20 : 1.50
}

export function primerMayuscula(texto)
{
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}