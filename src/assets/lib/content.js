import thoughtsImage from '../images/thoughts.png';
import therapyImage from '../images/therapy.png';
import helpIcon from '../images/help-icon.svg';
import psychologyIcon from '../images/psychology-icon.svg';

const PresentationText = {
  title: "Dra. Camila Genz",
  paragraph: `Cat ipsum dolor sit amet, get scared by doggo also cucumerro. 
              Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows 
              in litter box all day swipe at owner's legs.`
}

const contentsArray = [
  {
    image: thoughtsImage,
    title: "Quando procurar um psiquiatra?",
    paragraph: `Cat ipsum dolor sit amet, rub my belly hiss and thug cat cats are fats 
              i like to pets them they like to meow back. While happily ignoring when 
              being called hack meowing chowing and wowing. Meow meow we are 3 small 
              kittens sleeping most of our time, we are around 15 weeks old i think, 
              i don’t know i can’t count poop on couch or stretch out on bed for chase 
              dog then run away for annoy kitten brother with poking. `
  },
  {
    image: therapyImage,
    title: "Como é o atendimento?",
    paragraph: `Eat half my food and ask for more need to check on human, have not seen 
                in an hour might be dead oh look, human is alive, hiss at human, feed me 
                howl uncontrollably for no reason shake treat bag make plans to dominate 
                world and then take a nap so love blinks and purr purr purr purr yawn but 
                sit in a box for hours.  `
  }
]

const servicesArray = [
  {
    image: psychologyIcon,
    title: "Psicoterapia",
    paragraph: `Pet my belly, you know you want to; seize the hand and shred it! 
                eat a rug and furry furry hairs everywhere oh no human coming lie 
                on counter don't get off counter.`
  },
  {
    image: helpIcon,
    title: "Algum atendimento",
    paragraph: `Attack feet asdflkjaertvlkjasntvkjn (sits on keyboard) 
                for eat the fat cats food.`
  },
  {
    image: helpIcon,
    title: "Outro atendimento",
    paragraph: `Meow and walk away wake up wander around the house making large 
                amounts of noise jump on top of your human's bed and fall asleep 
                again.`
  },
  {
    image: psychologyIcon,
    title: "Mais um atendimento",
    paragraph: `Bathe private parts with tongue then lick owner's face or fall 
                over dead (not really but gets sypathy). Pee in human's bed until 
                he cleans the litter box`
  },
]

const curriculumArray = [
  "Howl uncontrollably for no reason kitty kitty pussy cat doll.",
  "Rub face on everything. Hack up furballs i is not fat, i is fluffy yet pounce on unsuspecting person.",
  "Stare at owner accusingly then wink find a way to fit in tiny box purr when being pet meow.",
  "Disappear for four days and return home with an expensive injury; bite the vet missing until dinner time.",
  "Catch mouse and gave it as a present kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot."
]

const locationsInfo = [
  {
    coord: { lat: -29.604397, lng: -52.191096 },
    title: "Venâncio Aires",
    paragraph: ["R. Tiradentes, 471 - Centro", "(51) 3741-6467"]
  },
  {
    coord: { lat: -30.042558, lng: -51.187649  },
    title: "Porto Alegre",
    paragraph: ["Av. Itaqui, 89 - Petrópolis", "(51) 98418-5026"]
  }
]

export {
  PresentationText,
  contentsArray,
  servicesArray,
  curriculumArray,
  locationsInfo
};