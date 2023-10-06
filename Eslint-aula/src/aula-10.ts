
 enum MarcaTenis {
  Nike = 4,
  DSAF = "dsaf",
  FDSAF = "fdsaf",
 }

 interface Tenis {
  marcaTenis: MarcaTenis
 }

const test1: Tenis = {
  marcaTenis: MarcaTenis.Nike,
}

if (test1.marcaTenis === MarcaTenis.Nike) {
  console.log("É NIKE");
}
//*************************************/

//ou pode colocar todos os resultados.

const teste2 = {
  test: MarcaTenis
}

console.log(teste2)