const bradleyIT = {
    cours : "javascript",
    email : "julienbradleycold08@gmail.com",
    etudiant : [],

    login(nom , prenom){
        console.log(`${nom} ${prenom} you are in ${this.cours}
        your email is ${this.email}`)
        this.etudiant.push(`${nom} ${prenom}`)
    }
}

bradleyIT.login("Bradley" , "Julien")
console.log(bradleyIT.etudiant)