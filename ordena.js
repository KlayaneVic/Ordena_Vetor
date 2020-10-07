function ordenacao(v) {
    for (i = 0; i < v.length; i++) {
        for (a = 0; a < v.length; a++) {
            atual = v[a];

            if (atual > v[a+1]) {
                v[a] = v[a+1];
                v[a+1] = atual;
            }else{
                v[a] = atual;
            }
        }
    }

    console.log(v); 
}
var vetor = [34, 22, 45, 67, 12, 34, 70, 1, 222];
ordenacao(vetor);