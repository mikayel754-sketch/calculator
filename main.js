let butl = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '/', '*','.'];
let GlobalRes = '';

function main(listt) {
    listt.forEach(p => {
        let p2 = `[name="${p}"]`;
        let h = document.querySelector(p2);
        console.log(h);
        h.addEventListener('click', j =>  {
            GlobalRes += p;
            document.querySelector('[class = "text_positional"]').textContent = GlobalRes;
        })
    });
}

function delall() {
    document.querySelector('[class = "text_positional"]').textContent = 'here';
    GlobalRes = '';
    document.querySelector('[id = "res"]').textContent = '=';
}


main(butl);


let el = document.querySelector('[name = "entor"]')
el.addEventListener('click', j => {
        try {
            document.querySelector('[id = "res"]').textContent = '='+`${eval(GlobalRes)}`;
        } catch {
            delall();
        }
    })


document.querySelector('[name = "clear"]').addEventListener('click', j =>  {
        delall();
    })




