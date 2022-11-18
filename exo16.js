let alph="A,B,C,D,E,F,G,H,I,J,K,L,M,O,P,Q,R,S,T,U,V,W,X,Y,Z";
let val1 = prompt(" Antre non vale a")

//>5K <0Y <3W <3K <6U <3Q
//"PYTHON";

let tab=[];
for(let i=0;i<val1.length;i++){
	for(j=0;j<val1.length;j++){

		if(val1.includes(">") && (val1[i]==j)){
			tab.push(alph[i+j])
		}
		else if(val1.includes("<") && (val1[i]==j) ){
			tab.push(alph[i-j])
		}
	}

}

console.log( tab.join(" "))