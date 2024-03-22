import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "LOREM",
    para:       "“A girl gamer describes a female who regularly engages in the playing of video games, role-playing games, or other games (colloquially referred to as gaming). This can be from the most casual interest to the most serious professional gaming.”",
    button:     "Contact me",
    image:      "sl.png"
}

const dataTwo = {
    title2:     "GIRL GAMER",

    image1:     "dog.jpg",
    para1:      "A Project Dog is the dog that presents you with significant behavioural problems. Maybe the dog came to you with issues, maybe you created the issues, or maybe the dog developed them over time. Regardless of how it happened, now you have a Project Dog.",
    button1:    "View",

    image2:     "(5).webp",
    para2:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button2:    "View",

    image3:     "(6).jpg",
    para3:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button3:    "View"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))
