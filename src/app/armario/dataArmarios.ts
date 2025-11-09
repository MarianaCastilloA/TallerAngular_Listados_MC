import {Armario} from './armario';

export const dataArmarios: Armario[] = [
    new Armario(1, 'Armario de verano', 'Ropa ligera y fresca para el verano', new Date('2022-06-01')),
    new Armario(2, 'Armario de invierno', 'Ropa abrigada para el invierno', new Date('2022-12-01')),
    new Armario(3, 'Armario de oficina', 'Ropa formal para el trabajo', new Date('2022-01-15')),
    new Armario(4, 'Armario casual', 'Ropa cómoda para el día a día', new Date('2022-03-10')),
    new Armario(5, 'Armario de fiesta', 'Ropa elegante para ocasiones especiales', new Date('2022-11-20'))
];