let tab=[], tab2=[];
let i, N=3;

    for(i=0; i<5; i++){
        tab[i]=i;
    }

    let tabl=tab.join("");
    let pozisyonAvan=tabl.indexOf(N);
    
    console.log(tab)
    console.log("Indeks "  + N + " avan melanj se " +pozisyonAvan)


    for(i=0; i<5; i++){
        tab=tab.reverse()
         tab2[(4)-i]=tab.pop()
    }

    let k=tab2.join("");
    let  pozisyonApre=k.indexOf(N);

    console.log(tab2)

    console.log("Indeks "  + N + " avan melanj se " +pozisyonApre)