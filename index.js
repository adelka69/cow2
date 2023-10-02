const userInfo = require("./information.js");

const cowsay = require("cowsay");

console.log(cowsay.think({
    text : `I'm  ${userInfo.name} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()