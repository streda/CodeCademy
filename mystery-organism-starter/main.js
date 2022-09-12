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



// VERSION 2


/*
// Returns a random DNA base.
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases.
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for creating many objects.
const pAequorFactory = (number, dnaStrand) => {
  return {
    specimenNum: number,
    dna: dnaStrand,
    // Changes a random base in the mockup strand to a new random base.
    mutate() {
      const randomBaseIndex = Math.floor(Math.random() * this.dna.length);
      const generatedBase = returnRandBase();
      
      // If The base is identical, do not change.
      if (this.dna[randomBaseIndex] === generatedBase) {
        console.log(`pAequorFactory.mutate() - The new DNA base '${generatedBase}' is identical to the 
        current base '${this.dna[randomBaseIndex]}' and does not need changed.\n`);
        return this.dna;
      } else {
        // Overwrite original DNA base with new randomly generated one.
        console.log(`----------------\nOriginal DNA base: ${this.dna[randomBaseIndex]} at index: ${randomBaseIndex}`);
        this.dna[randomBaseIndex] = generatedBase;
        console.log(`Newly inserted DNA base: ${this.dna[randomBaseIndex]} at index: ${randomBaseIndex}\n----------------\n`);
        return this.dna;
      }
    },

    compareDNA(pAequorObject) {
      console.log(`MY DNA sequence: ${this.dna}`);
      console.log(`Other specimens DNA sequence: ${pAequorObject.dna}`);

      if (this.dna === pAequorObject.dna) {
        console.log(`Specimen ${pAequorObject.specimenNum} has an idential DNA sequence.`);
      } else {
        let identicalBases= 0;
        
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequorObject.dna[i]) identicalBases++;
        }
        
        // Get the percentage of identical bases and return the value rounded to the second decimal place.
        console.log(`Total DNA in common between specimen ${this.specimenNum} and specimen ${pAequorObject.specimenNum}: 
        ${(identicalBases / this.dna.length).toFixed(2)}%`);

      }
    },

    // Determines the likelihood of the p. Aequor surviving. There is a 
    // higher chance of survival if the DNA is made up of at least C or G bases.
    willLikelySurvive() {
      dnaBaseCounter = 0;
      this.dna.forEach(dnaBase => {
        if (dnaBase === 'G' || dnaBase === 'C') dnaBaseCounter++;
      });

      // (x / y) * 100 then round to 2 decimal places.
      const survivalPercentage = ((dnaBaseCounter / this.dna.length) * 100).toFixed(2);
      if (survivalPercentage >= 60) {
        console.log(`Greater chance of survival. Percentage of C and G bases is ${survivalPercentage}%`);
      } else {
        console.log(`Lesser chance of survival. Percentage of C and G bases is ${survivalPercentage}%`);
      }
    }
  }
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
const storedSpecimens = [];
for (i = 0; i < 30; i++) {
  storedSpecimens.push(pAequorFactory(i, mockUpStrand()));
};
*/