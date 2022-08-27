// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
   
    mutate() {
      const currentBase = Math.floor(Math.random() * this.dna.length);
      const differentBase = returnRandBase();
      
      
      if (this.dna[currentBase] !== differentBase) {
        this.dna[currentBase] = differentBase;
      }
      return this.dna;
    },

    compareDNA(pAequor) {
      const comparableElement = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          comparableElement++;
        }
      }
      const percentage = ((comparableElement / this.dna.length) * 100).toFixed(2);
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${comparableElement} elements that have a ${percentage} % in common`);
    },
    willLikelySurvive() {
      const eitherCorG = this.dna.filter(dnaLetter => dnaLetter === 'C' || dnaLetter === 'G');
      const cap = 0.6;
      let percentageOfEitherCorG = (eitherCorG / this.dna.length);
      if (percentageOfEitherCorG > cap) {
        return true;
      } else {
        return false;
      }
    }

  };
};

// Run.
const pAequor = pAequorFactory(999, mockUpStrand());
console.log(`pAequor BEFORE mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}\n`);
pAequor.mutate();
console.log(`pAequor AFTER mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`);

const pAequor1 = pAequorFactory(999, mockUpStrand());
const pAequor2 = pAequorFactory(1000, mockUpStrand());

pAequor1.compareDNA(pAequor2);
console.log('p. Aequor 1: ');
pAequor1.willLikelySurvive();
console.log('p. Aequor 2: ');
pAequor2.willLikelySurvive();

// Store 30 p. Aequor specimens in array.
// const storedSpecimens = [];
// for (i = 0; i < 30; i++) {
//   storedSpecimens.push(pAequorFactory(i, mockUpStrand()));
// };