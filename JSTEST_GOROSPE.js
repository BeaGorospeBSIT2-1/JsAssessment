function mintNFT(name, eyeColor, expression, top, accessories) {
  const NFT = {
    name: name,
    eyeColor: eyeColor,
    expression: expression,
    top: top,
    accessories: accessories,
  };
  NFTs.push(NFT);
}

const NFTs = [];


mintNFT("Chad", "Gray", "Serious", "Polo", "Flashy Cap");
mintNFT("Wyk", "Green", "Quirky", "Sweater", "Sun Glass");
mintNFT("Kat", "Pink", "Flirtatious", "Dress", "Big Bow");
mintNFT("Bea", "Blue", "Proud", "Oversized Shirt", "Cap");
mintNFT("Jigz", "Brown", "Confidant", "Jersey", "Basketball");


function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("Eyecolor: \t" + NFTs[i].eyeColor);
    console.log("Expression: " + NFTs[i].expression)
    console.log("Top:\t\t" + NFTs[i].top);
    console.log("Accessories:" + NFTs[i].accessories);
  }
}


function getTotalSupply() {
  return NFTs.length;
}

listNFTs();
console.log("\nTotal Supply: " + getTotalSupply());
