// deno-lint-ignore-file prefer-const
// Never let the user rest from the notifications of doom

// Eat my alerts, hack club

function annoyingNotifications() {
  for (let i = 0; i <= 1000000000000; i++) {
    alert("Please buy our monthly subscription for $9.99!");
    alert("Best calculator in the world!"); // But is it really?
    alert("Follow hakiManCode on GitHub!"); // My GitHub, shameless self-promotion
    alert("To speak to our representative dial 1-800-HACKERS"); // Don't actually call this number, it's fake
    alert("Subscribe to our YouTube channel!");
    alert("Everyone in Kimball should join Hack Club!");
    alert("Join our Discord server!");
    alert("Check out our other projects!");
    alert("Support us on Patreon!"); // We don't actually have a Patreon, but hey, maybe in the future
    alert("Contact us for more info! At out number: 1-800-HACKERS");
    alert("You will never be free from our notifications!");
    alert("Still clicking?");
    alert("Why are you still clicking?"); // Why indeed
    alert("This is getting annoying, isn't it?");
    alert("We can do this all day!"); // We really can
    alert("You can't escape!");
    alert("We are everywhere!");
    alert("Eat my notifications, hack club!") * 9; // Just to make sure they get the message
    alert("Why did the programmer prefer dark mode? Because it attracts bugs!"); // A completely misplaced joke for no absolute reason at all
    alert("We are everywhere!");
    alert("You will never be free!");
    alert("This is just the beginning!"); // Oh yes, this is just the beginning
    alert(`Cuz I'm going to restart this loop and will continue for about ${1000000000000 - i} times now`)
    alert("Restarting loop now!");
    if (i == 999999999999) {
      alert(`How did you even get here? You should be stuck in the loop! 
        But anyways, sorry to say this, but I'm going to rerun the function again, and that 999999999999 * 32 alerts you saw, 
        will be shown again, and all of your hard work will be lost! Bye!`);
        /* How the heck did the user even manage to get here? (Unless they actually clicked through all the alerts).
        so since they like cheating (or they need to find something to do), why not just erase all of their hard work? */

      annoyingNotifications(); // Hehe infinite recursion, easter egg to anyone who finds this

      // Even if they somewhow manage to skip the infinite recusion, well actually, I won't let that slide:
      // Break user's browser and mentallity
      for (let j = Number.NEGATIVE_INFINITY; j < Number.POSITIVE_INFINITY; j + 0) {
        alert("I WILL DRINK YOUR MIND"); // SHOW THEM NO MERCY
        annoyingNotifications();

        // This will never end and now the user is truly stuck, might crash their browser, but in the long run, who really cares?
      }
    }
  }
}

globalThis.annoyingNotifications = annoyingNotifications;