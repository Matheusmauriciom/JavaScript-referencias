
///////

const somar = (...args) =>{
  const soma = args.reduce((total, atual)=> total + atual,0);
  const media = soma / args.length
  return media;
}
console.log(somar(10,5,7,3))

////////


