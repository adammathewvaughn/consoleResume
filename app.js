
console.log("Adam Vaughn".toUpperCase());
console.log("Career: Quarter Stack Developer");
console.log("Description: A man in over his head");
console.log("\n");
console.log("Interests");
console.log("* coding");
console.log("* television");
console.log("* hiking");
console.log("* music");
console.log("\n")
console.log("Previous experience:");
displayPosition("Brick Crew", "Cheap labor", "Toted heavy things");
displayPosition("Steel Mill", "Not so cheap labor", "Burned myself for money");
displayPosition("Cable Company", "Cheap labor", "Signal-slinger");
console.log("\n")
console.log("My skills:");
displaySkill("*coding*", true);
displaySkill("hang-gliding", true);
displaySkill("guitar", false);
displaySkill("nose-picking", true);
displaySkill("square-dancing", false);
displaySkill("yoga", false);

function displayPosition(company, job, description) {
  console.log("* " + job + " at " + company + " : " + description);
}
function displaySkill(skill, isCool) {
  if (isCool) {
      console.log("* BAM: " + skill);
  } else {
      console.log("* " + skill);
  }
}