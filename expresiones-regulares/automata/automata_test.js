class Automata {
    static matriz = [
        [1, 200, 200],
        [1, 1, 0]
    ];

    inicio(p) {
        let i = 0;
        const c = p.split('');
        let caracter = 0;
        let estado = 0;

        while (i < c.length) {
            if (/[a-zA-Z]/.test(c[i])) {
                caracter = 0;
            } else if (/[0-9]/.test(c[i])) {
                caracter = 1;
            } else {
                caracter = 2;
            }
            estado = matriz[estado][caracter];

            if (estado === 200) {
                break;
            }
            i++;
        }

        if (estado === 1) {
            console.log("Aceptado");
        } else {
            console.log("Negado");
        }
    }
}

const obj = new Automata();
obj.inicio('variable');
