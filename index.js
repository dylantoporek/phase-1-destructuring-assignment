const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let moo, neigh, baa, oink, cluck;
let animalObj = Object.assign({}, farmAnimals.split(' '));
moo = animalObj[0];
neigh = animalObj[1];
baa = animalObj[2];
oink = animalObj[3];
cluck = animalObj[4];
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let bessie, dolly, babe, little;
bessie = animalObj[0];
dolly = animalObj[2];
babe = animalObj[3];
little = animalObj[4];


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let blackAndWhite, black, pink;
blackAndWhite = animalObj[0]
black = animalObj[2]
pink = animalObj[3]
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let red, orange, yellow, green, blue, indigo, violet;
red = colors[0];
orange = colors[1];
yellow = colors[2];
green = colors[3];
blue = colors[4];
indigo = colors[5];
violet = colors[6];

let r, o, y, g, b, v;

r = colors[0];
o = colors[1];
y = colors[2];
g = colors[3];
b = colors[4];
v = colors[6];

let indg = colors[5];

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

let muppetName, color, song, job, partner, nestedName, nestedColor, album, theMuppetMovie, song1, song2, song3, song4, nestedJob, nestedPartner;

muppetName = muppet['muppetName'];
color = muppet['color'];
song = muppet['song'];
job = muppet['job'];
partner = muppet['partner'];

nestedName = nestedMuppet['nestedName'];
nestedColor = nestedMuppet['nestedColor'];
nestedJob = nestedMuppet['nestedJob'];
nestedPartner = nestedMuppet['nestedPartner'];
album = nestedMuppet['album'];
theMuppetMovie = album['theMuppetMovie'];
song1 = theMuppetMovie['song1'];
song2 = theMuppetMovie['song2'];
song3 = theMuppetMovie['song3'];
song4 = theMuppetMovie['song4'];

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner