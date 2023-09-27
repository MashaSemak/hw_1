const node_for_click = document.getElementById("for_click")

function find_edit(){
    const p1 = document.getElementsByTagName('div')[4]
    p1.innerText = 'SEMAK'

    const p2 = document.getElementsByTagName('div')[5]

    p2.innerText = 'MARIIA'

    const p3 = document.getElementsByTagName('div')[8]
    p3.innerText = 'IX.XI.MMIV'

}

node_for_click.addEventListener("click",find_edit)