let allcards=[
    {
      "Type": "Aragorn",
      "XP": "Start",
      "Name": "Wanderer",
      "Number": 1,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "After you explore a tile, you or a nearby hero may scout 1."
    },
    {
      "Type": "Aragorn",
      "XP": "Start",
      "Name": "Strider",
      "Number": 2,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Strike 3 (When you attack, discard to add 3 hits.)\nGuard 2 (Discard to prevent 2 Damage or Fear for a hero in your space.)"
    },
    {
      "Type": "Aragorn",
      "XP": "Start",
      "Name": "Strider",
      "Number": 3,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Strike 3 (When you attack, discard to add 3 hits.)\nGuard 2 (Discard to prevent 2 Damage or Fear for a hero in your space.)"
    },
    {
      "Type": "Aragorn",
      "XP": "Start",
      "Name": "Thorongil",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "Before you test, you may discard this skill to test Wisdom instead.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Aragorn",
      "XP": "Start",
      "Name": "Gift of Men",
      "Number": 5,
      "Trait": "Innate, Valour",
      "Icon": "2 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill to discard 1 Fear."
    },
    {
      "Type": "Arwen",
      "XP": "Start",
      "Name": "Nobility",
      "Number": 1,
      "Trait": "Aid",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "Before a nearby hero tests, you may discard this skill for that hero to gain 2 inspiration: if they are an Elf or Human, you may gain 1 inspiration."
    },
    {
      "Type": "Arwen",
      "XP": "Start",
      "Name": "Elven Light",
      "Number": 2,
      "Trait": "Knowledge, Innate",
      "Icon": "2 Fate",
      "ReshykRating": "D",
      "Ability": "Before you test Wisdom or Spirit, you may look at the top card of your deck and place it on the top or bottom of your deck."
    },
    {
      "Type": "Arwen",
      "XP": "Start",
      "Name": "Evenstar",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Before you test, you may discard this skill to test Spirit instead and reveal 2 additional cards.\nSprint 1 (During your turn discard to move 1 space.)"
    },
    {
      "Type": "Arwen",
      "XP": "Start",
      "Name": "Evenstar",
      "Number": 4,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Before you test, you may discard this skill to test Spirit instead and reveal 2 additional cards.\nSprint 1 (During your turn discard to move 1 space.)"
    },
    {
      "Type": "Arwen",
      "XP": "Start",
      "Name": "Willful",
      "Number": 5,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "During your turn, you may discard this skill to interact with a token in your space.\nStrike 2 (When you attack, discard this card to add 2 hits.)"
    },
    {
      "Type": "Balin",
      "XP": "Start",
      "Name": "Kinship",
      "Number": 1,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "Before a nearby hero tests, you may discard this skill for that hero to reveal 2 additional cards; if they are a Dwarf, you may scout 1."
    },
    {
      "Type": "Balin",
      "XP": "Start",
      "Name": "Raven Companion",
      "Number": 2,
      "Trait": "Creature, Shadow",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When you test Wit, reveal 1 additional card.\nRest 1 (Discard at the end of turn to discard 1 facedown damage or fear.)"
    },
    {
      "Type": "Balin",
      "XP": "Start",
      "Name": "Loyal Friend",
      "Number": 3,
      "Trait": "Valour",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Before you attack, you may discard this skill to test Spirit instead and gain 1 inspiration.\nGuard 2 (Discard to prevent 2 damage or fear for a hero in your space.)"
    },
    {
      "Type": "Balin",
      "XP": "Start",
      "Name": "Loyal Friend",
      "Number": 4,
      "Trait": "Valour",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Before you attack, you may discard this skill to test Spirit instead and gain 1 inspiration.\nGuard 2 (Discard to prevent 2 damage or fear for a hero in your space.)"
    },
    {
      "Type": "Balin",
      "XP": "Start",
      "Name": "Misty Mountain Cold",
      "Number": 5,
      "Trait": "Song",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "When you scout, you may reveal 1 fewer card to gain 1 inspiration."
    },
    {
      "Type": "Basic",
      "XP": "Start",
      "Name": "Undying Might",
      "Number": 1,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you test Might, you may discard this skill to add 1 Success"
    },
    {
      "Type": "Basic",
      "XP": "Start",
      "Name": "Honed Agility",
      "Number": 2,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When  you test Agility, you may discard this skill to add 1 Success"
    },
    {
      "Type": "Basic",
      "XP": "Start",
      "Name": "Unyielding Spirit",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you test Spirit, you may discard this skill to add 1 Success"
    },
    {
      "Type": "Basic",
      "XP": "Start",
      "Name": "Ancient Wisdom",
      "Number": 4,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you test Wisdom, you may discard this skill to add 1 Success"
    },
    {
      "Type": "Basic",
      "XP": "Start",
      "Name": "Clever Wit",
      "Number": 5,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you test Wit, you may discard this skill to add 1 Success"
    },
    {
      "Type": "Basic",
      "XP": "Start",
      "Name": "Time of Need",
      "Number": 6,
      "Trait": "-",
      "Icon": "2 Fate",
      "ReshykRating": "-",
      "Ability": "When you test, if you do not reveal any Successes, you may discard this skill to convert all Fate to Success"
    },
    {
      "Type": "Beravor",
      "XP": "Start",
      "Name": "Into Hiding",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "During your turn, if there are no enemies in your space, you may discard this skill for you and each other hero in your space to become hidden.\nGuard 2 (Discard to prevent 2 Damage or Fear for a hero in your space.)"
    },
    {
      "Type": "Beravor",
      "XP": "Start",
      "Name": "Ways of Old",
      "Number": 2,
      "Trait": "Tactic, Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, you may discard this skill to convert 1 Fate to 1 Success and scout 1.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Beravor",
      "XP": "Start",
      "Name": "Ways of Old",
      "Number": 3,
      "Trait": "Tactic, Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, you may discard this skill to convert 1 Fate to 1 Success and scout 1.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Beravor",
      "XP": "Start",
      "Name": "Fateless",
      "Number": 4,
      "Trait": "Innate",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "When you test, you may discard this skill to convert all Fate to Success."
    },
    {
      "Type": "Beravor",
      "XP": "Start",
      "Name": "Gift of Men",
      "Number": 5,
      "Trait": "Innate, Valour",
      "Icon": "2 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill to discard 1 Fear."
    },
    {
      "Type": "Bilbo",
      "XP": "Start",
      "Name": "The Tookish Part",
      "Number": 1,
      "Trait": "Innate, Valour",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "Before you test, you may discard this skill to test Wit instead and gain 1 inspiration.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Bilbo",
      "XP": "Start",
      "Name": "The Tookish Part",
      "Number": 2,
      "Trait": "Innate, Valour",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "Before you test, you may discard this skill to test Wit instead and gain 1 inspiration.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Bilbo",
      "XP": "Start",
      "Name": "Well-Nourished",
      "Number": 3,
      "Trait": "Food",
      "Icon": "-",
      "ReshykRating": "D",
      "Ability": "After you prepare this skill, flip 1 Fear facedown.\nRest 2 (Discard at end of turn to discard 2 facdown Damage or Fear.)"
    },
    {
      "Type": "Bilbo",
      "XP": "Start",
      "Name": "Simple Desires",
      "Number": 4,
      "Trait": "Innate",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "At the start of your turn, you may discard this skill to scout 2; then gain 1 inspiration for each aid, food, or song card in your play area."
    },
    {
      "Type": "Bilbo",
      "XP": "Start",
      "Name": "The Road Goes Ever On",
      "Number": 5,
      "Trait": "Song",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "During your turn, you may discard this skill for you and each nearby hero to move up to 1 space."
    },
    {
      "Type": "Burglar",
      "XP": "Start",
      "Name": "Self-Sufficient",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When you test, if there are no nearby heroes, you may convert 2 Fate to 1 Success.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Burglar",
      "XP": "Start",
      "Name": "Quiet",
      "Number": 2,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "If you would discard hidden, you may gain 1 inspiration and discard this skill instead.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Burglar",
      "XP": "Start",
      "Name": "Quiet",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "If you would discard hidden, you may gain 1 inspiration and discard this skill instead.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Burglar",
      "XP": 3,
      "Name": "Word of Fortune",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "When you or a nearby hero tests Wit, you may discard this skill to add 1 Success and scout 1.\nHide"
    },
    {
      "Type": "Burglar",
      "XP": 3,
      "Name": "Sneaking",
      "Number": 5,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "While hidden, you do not provoke attacks. \nHide\nSprint 1"
    },
    {
      "Type": "Burglar",
      "XP": 3,
      "Name": "Pockets",
      "Number": 6,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "D",
      "Ability": "At the end of your turn, you may discard this skill to equip an unequipped Trinket from the inventory.\nRest 2"
    },
    {
      "Type": "Burglar",
      "XP": 7,
      "Name": "What Is In my Pocket?",
      "Number": 7,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "If you are attacked and would discard hidden, discard this skill instead and gain 2 inspiration.\nGuard 2\nHide"
    },
    {
      "Type": "Burglar",
      "XP": 7,
      "Name": "Self-Sufficient",
      "Number": 8,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "D",
      "Ability": "When you test, if there are no nearby heroes, you may convert 2 Fate to 1 Success.\nHide"
    },
    {
      "Type": "Burglar",
      "XP": 7,
      "Name": "Hidden Blades",
      "Number": 9,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "Your other skills with hide have strike 2.\nHide\nStrike 2"
    },
    {
      "Type": "Burglar",
      "XP": 7,
      "Name": "Unseen Strike",
      "Number": 10,
      "Trait": "Tactic, Shadow",
      "Icon": "2 Fate",
      "ReshykRating": "A",
      "Ability": "When you attack, if you discard hidden, add 1 hit and lethal.\nStrike 2"
    },
    {
      "Type": "Burglar",
      "XP": 12,
      "Name": "Quick Thinking",
      "Number": 11,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "After you prepare this skill, scout 2. After you discard a boon, you may discard this skill to gain a different boon.\nSprint 1"
    },
    {
      "Type": "Burglar",
      "XP": 12,
      "Name": "Embrace the Darkness",
      "Number": 12,
      "Trait": "Shadow",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "When you test, if you are in darkness, convert 1 Fate to 1 Successs. Before you hide, you may suffer 1 Fear that cannot be prevented to not discard that skill.\nHide"
    },
    {
      "Type": "Captain",
      "XP": "Start",
      "Name": "Well Provisioned",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "At the start of your turn, you may discard this skill for you and a nearby hero to scout 2."
    },
    {
      "Type": "Captain",
      "XP": "Start",
      "Name": "Lead the Charge",
      "Number": 2,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you attack, you may discard this skill to gain 1 inspiration and for a nearby hero to also attack.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Captain",
      "XP": "Start",
      "Name": "Lead the Charge",
      "Number": 3,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you attack, you may discard this skill to gain 1 inspiration and for a nearby hero to also attack.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Captain",
      "XP": 3,
      "Name": "Word of Triumph",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "When you or a nearby hero tests Might, you may discard this skill to add 1 Success and scout 1.\nStrike 2"
    },
    {
      "Type": "Captain",
      "XP": 3,
      "Name": "Stand Together",
      "Number": 5,
      "Trait": "Tactic",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "At the start of your turn, you may discard this skill for you and each hero in your space to scout 1.\nGuard 1"
    },
    {
      "Type": "Captain",
      "XP": 3,
      "Name": "A Fey Mood",
      "Number": 6,
      "Trait": "Valour",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "After a hero performs a last stand, each hero may prepare 1 skill with strike, guard, or sprint from their discard pile.\nStrike 2"
    },
    {
      "Type": "Captain",
      "XP": 7,
      "Name": "Empowering Words",
      "Number": 7,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill and any amount of inspiration. For each inspiration you discard, you or a nearby hero becomes emboldened.\nGuard 2"
    },
    {
      "Type": "Captain",
      "XP": 7,
      "Name": "Inspiring Presence",
      "Number": 8,
      "Trait": "Aid",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "If a nearby hero would gain an inspiration, they may scout 1 or discard 1 facedown Damage or Fear instead."
    },
    {
      "Type": "Captain",
      "XP": 7,
      "Name": "To Me!",
      "Number": 9,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "At the start of your turn, you may discard this skill for you and each nearby hero to scout 2.\nStrike 2"
    },
    {
      "Type": "Captain",
      "XP": 7,
      "Name": "Battle Plan",
      "Number": 10,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "When you move into a space with an enemy, you may discard this skill for you and each nearby hero to scout 3. Each hero who prepares a tactic skill this way gains 1 inspiration.\nGuard 2"
    },
    {
      "Type": "Captain",
      "XP": 12,
      "Name": "A Wind Among Grass",
      "Number": 11,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you move into a space, you may discard this skill to attack. Then you and each nearby hero may move 1 space without provoking attacks.\nSprint 2"
    },
    {
      "Type": "Captain",
      "XP": 12,
      "Name": "Master Tactician",
      "Number": 12,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "S",
      "Ability": "At the start of your turn, each hero may discard 1 prepared skill. Each hero who does scouts 3."
    },
    {
      "Type": "Delver",
      "XP": "Start",
      "Name": "Intrepid",
      "Number": 1,
      "Trait": "Valour",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "After you gain inspiration, you may discard this skill to gain 1 additional inspiration and scout 1."
    },
    {
      "Type": "Delver",
      "XP": "Start",
      "Name": "Shadow Sight",
      "Number": 2,
      "Trait": "Shadow",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, if you are in darkness, convert 1 fate to 1 success.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Delver",
      "XP": "Start",
      "Name": "Shadow Sight",
      "Number": 3,
      "Trait": "Shadow",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, if you are in darkness, convert 1 fate to 1 success.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Delver",
      "XP": 3,
      "Name": "Wiles",
      "Number": 4,
      "Trait": "Shadow, Tactic",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "At the end of your turn, you may scout X where X is the number of shadow skills you have prepared.  If you do, discard this skill.\nHide"
    },
    {
      "Type": "Delver",
      "XP": 3,
      "Name": "Crushing Blow",
      "Number": 5,
      "Trait": "Tactic",
      "Icon": "-",
      "ReshykRating": "D",
      "Ability": "Before you strike with this skill, add sunder to the attack.\nStrike 1"
    },
    {
      "Type": "Delver",
      "XP": 3,
      "Name": "Boasting",
      "Number": 6,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "When you test Spirit or Might, you may suffer 1 facedown fear to convert all fate to success."
    },
    {
      "Type": "Delver",
      "XP": 7,
      "Name": "Forging Ahead",
      "Number": 7,
      "Trait": "",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "At the start of your turn, if there are no nearby heroes, gain 1 inspiration.\nSprint 2"
    },
    {
      "Type": "Delver",
      "XP": 7,
      "Name": "Spirit of Adventure",
      "Number": 8,
      "Trait": "Valour",
      "Icon": "1 Fate",
      "ReshykRating": "D",
      "Ability": "After a tile is placed, you may discard this skill to either scout 2 or prepare a skill from your discard pile."
    },
    {
      "Type": "Delver",
      "XP": 7,
      "Name": "No Stone Unturned",
      "Number": 9,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "At the end of your turn, if you are in darkness, you may discard this skill to interact with a token in your space.\nSprint 1"
    },
    {
      "Type": "Delver",
      "XP": 7,
      "Name": "No Stone Unturned",
      "Number": 10,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "At the end of your turn, if you are in darkness, you may discard this skill to interact with a token in your space.\nSprint 1"
    },
    {
      "Type": "Delver",
      "XP": 12,
      "Name": "Glory",
      "Number": 11,
      "Trait": "Valour",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "After you suffer damage or fear, gain 1 inspiration and scout 1.\nStrike 2\nGuard 1"
    },
    {
      "Type": "Delver",
      "XP": 12,
      "Name": "Treasures Untold",
      "Number": 12,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "When you attack, if there is a search or threat token in the enemy's space, add 4 hits and pierce.\nSprint 1"
    },
    {
      "Type": "Dis",
      "XP": "Start",
      "Name": "Fury",
      "Number": 1,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "When you attack, you may spend any amount of fate to add an equal number of hits."
    },
    {
      "Type": "Dis",
      "XP": "Start",
      "Name": "Kinship",
      "Number": 2,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "Before a nearby hero tests, you may discard this skill for that hero to reveal 2 additional cards; if they are a Dwarf, you may scout 1."
    },
    {
      "Type": "Dis",
      "XP": "Start",
      "Name": "Strength of Thrain",
      "Number": 3,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "Once per round, after you perform a Might test, gain 1 inspiration.\nSprint 1 (During your turn, discard to move 1 space)"
    },
    {
      "Type": "Dis",
      "XP": "Start",
      "Name": "Fire Heart",
      "Number": 4,
      "Trait": "Innate",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Increase your Spirit by 1.\nOnce per round, when you test, you may add 1 fate.\nStrike 2 (When you attack, discard this card to add 2 hits.)"
    },
    {
      "Type": "Dis",
      "XP": "Start",
      "Name": "Fire Heart",
      "Number": 5,
      "Trait": "Innate",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Increase your Spirit by 1.\nOnce per round, when you test, you may add 1 fate.\nStrike 2 (When you attack, discard this card to add 2 hits.)"
    },
    {
      "Type": "Eleanor",
      "XP": "Start",
      "Name": "Nobility",
      "Number": 1,
      "Trait": "Aid",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "Before a nearby hero tests, you may discard this skill for that hero to gain 2 inspiration: if they are an Elf or Human, you may gain 1 inspiration."
    },
    {
      "Type": "Eleanor",
      "XP": "Start",
      "Name": "Fateless",
      "Number": 2,
      "Trait": "Innate",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "When you test, you may discard this skill to convert all Fate to Success."
    },
    {
      "Type": "Eleanor",
      "XP": "Start",
      "Name": "Blood of Gondor",
      "Number": 3,
      "Trait": "Innate",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, you may discard this skill to reveal 3 additional cards.\nGuard 2 (Discard to prevent 2 damage or fear for a hero in your space.)"
    },
    {
      "Type": "Eleanor",
      "XP": "Start",
      "Name": "Blood of Gondor",
      "Number": 4,
      "Trait": "Innate",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, you may discard this skill to reveal 3 additional cards.\nGuard 2 (Discard to prevent 2 damage or fear for a hero in your space.)"
    },
    {
      "Type": "Eleanor",
      "XP": "Start",
      "Name": "Gift of Men",
      "Number": 5,
      "Trait": "Innate, Valour",
      "Icon": "2 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill to discard 1 Fear."
    },
    {
      "Type": "Elena",
      "XP": "Start",
      "Name": "Child of the Lhun",
      "Number": 1,
      "Trait": "Tactic",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When an enemy moves into your space, you may discard this skill to apply 4 hits and stun to that enemy.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Elena",
      "XP": "Start",
      "Name": "Elven Light",
      "Number": 2,
      "Trait": "Knowledge, Innate",
      "Icon": "2 Fate",
      "ReshykRating": "D",
      "Ability": "Before you test Wisdom or Spirit, you may look at the top card of your deck and place it on the top or bottom of your deck."
    },
    {
      "Type": "Elena",
      "XP": "Start",
      "Name": "Immortality",
      "Number": 3,
      "Trait": "Innate",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "Rest 2 (Discard at end of turn to discard 2 facedown Damage or Fear.)\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Elena",
      "XP": "Start",
      "Name": "Lay of Twilight",
      "Number": 4,
      "Trait": "Knowledge, Song",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "During your turn, you may discard this skill for you and nearby heroes to collectively discard up to 4 facedown Damage and Fear."
    },
    {
      "Type": "Elena",
      "XP": "Start",
      "Name": "Lay of Twilight",
      "Number": 5,
      "Trait": "Knowledge, Song",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "During your turn, you may discard this skill for you and nearby heroes to collectively discard up to 4 facedown Damage and Fear."
    },
    {
      "Type": "Gandalf",
      "XP": "Start",
      "Name": "Grey Pilgrim",
      "Number": 1,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "Once per round, when you scout, you may reveal 1 additional card.\nGuard 2 (Discard to prevent 2 Damage or Fear for a hero in  your space.)"
    },
    {
      "Type": "Gandalf",
      "XP": "Start",
      "Name": "Uncanny",
      "Number": 2,
      "Trait": "Shadow",
      "Icon": "2 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill to search your deck for a weakness.  Remove that skill from the adventure, then shuffle your deck."
    },
    {
      "Type": "Gandalf",
      "XP": "Start",
      "Name": "Flame Imperishable",
      "Number": 3,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When you prepare this skill, gain 1 inspiration.\nWhen you test, you may discard this skill to convert 1 fate to 1 success."
    },
    {
      "Type": "Gandalf",
      "XP": "Start",
      "Name": "Greater Power",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "Strike 2\nSprint 2\nGuard 2\nRest 2\nHide"
    },
    {
      "Type": "Gandalf",
      "XP": "Start",
      "Name": "Dazzling Flash",
      "Number": 5,
      "Trait": "Tactic",
      "Icon": "2 Fate",
      "ReshykRating": "B",
      "Ability": "When you attack an enemy in your space, discard this skill to add smite and stun to the attack."
    },
    {
      "Type": "Gimli",
      "XP": "Start",
      "Name": "Poet's Heart",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "D",
      "Ability": "Before you interact with a person token, gain 1 inspiration.\nRest 2 (Discard at end of turn to discard 2 facedown Damage or Fear.)"
    },
    {
      "Type": "Gimli",
      "XP": "Start",
      "Name": "Restless Axe",
      "Number": 2,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "At the start of your turn, you may discard this skill to attack and add 2 hits.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Gimli",
      "XP": "Start",
      "Name": "Restless Axe",
      "Number": 3,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "At the start of your turn, you may discard this skill to attack and add 2 hits.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Gimli",
      "XP": "Start",
      "Name": "Kinship",
      "Number": 4,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "Before a nearby hero tests, you may discard this skill for that hero to reveal 2 additional cards; if they are a Dwarf, you may scout 1."
    },
    {
      "Type": "Gimli",
      "XP": "Start",
      "Name": "Fury",
      "Number": 5,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "When you attack, you may spend any amount of Fate to add an equal number of hits."
    },
    {
      "Type": "Guardian",
      "XP": "Start",
      "Name": "You Cannot Pass",
      "Number": 1,
      "Trait": "Tactic, Valour",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "You can use guard for nearby heroes in addition to heroes in your space.\nGuard 3 (Discard to prevent 3 Damage or Fear for a hero in your space.)"
    },
    {
      "Type": "Guardian",
      "XP": "Start",
      "Name": "Ready Defense",
      "Number": 2,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "When you test to negate Damage or fear, add 1 Success.\nGuard 2 (Discard to prevent 2 Damage or Fear for a hero in  your space.)"
    },
    {
      "Type": "Guardian",
      "XP": "Start",
      "Name": "Ready Defense",
      "Number": 3,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "When you test to negate Damage or fear, add 1 Success.\nGuard 2 (Discard to prevent 2 Damage or Fear for a hero in  your space.)"
    },
    {
      "Type": "Guardian",
      "XP": 3,
      "Name": "Word of Glory",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When you or a nearby hero tests Spirit, you may discard this skill to add 1 Success and scout 1.\nGuard 1"
    },
    {
      "Type": "Guardian",
      "XP": 3,
      "Name": "Noble Sacrifice",
      "Number": 5,
      "Trait": "Valour",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "If a nearby hero would suffer Damage or Fear, you may discard this skill to suffer that Damage and Fear instead. If you do, that hero gains 1 inspiration and you may scout 1."
    },
    {
      "Type": "Guardian",
      "XP": 3,
      "Name": "Desperate Defense",
      "Number": 6,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "D",
      "Ability": "Before you or another hero in your space performs a last stand, you may discard this skill to add 1 Success to the test.\nGuard 1\nRest 2"
    },
    {
      "Type": "Guardian",
      "XP": 7,
      "Name": "Voice Like Ringing Steel",
      "Number": 7,
      "Trait": "Valour",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "When a nearby enemy activates, you may discard this skill to be the target and scout 1. You cannot suffer Fear during this activation."
    },
    {
      "Type": "Guardian",
      "XP": 7,
      "Name": "Ready Defense",
      "Number": 8,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test to negate Damage or fear, add 1 Success.\nGuard 2"
    },
    {
      "Type": "Guardian",
      "XP": 7,
      "Name": "Guarded Strike",
      "Number": 9,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "Your other skills with guard have strike 1. Before you strike, gain 1 inspiration.\nGuard 2\nStrike 1"
    },
    {
      "Type": "Guardian",
      "XP": 7,
      "Name": "Grim Resolve",
      "Number": 10,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "D",
      "Ability": "When you or a hero in your space performs a last stand, you may discard this skill to add 1 Success to the test.\nGuard 2\nRest 2"
    },
    {
      "Type": "Guardian",
      "XP": 12,
      "Name": "Final Defense",
      "Number": 11,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "When you or a nearby hero performs a last stand, you may discard this skill to add 1 Success to the test and scout 2.\nGuard 3\nRest 2"
    },
    {
      "Type": "Guardian",
      "XP": 12,
      "Name": "Defense Instruction",
      "Number": 12,
      "Trait": "Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When a hero tests to negate Damage or Fear, they may spend 1 inspiration to convert 1 Fate to 2 Successes.\nGuard 2"
    },
    {
      "Type": "Herbalist",
      "XP": "Start",
      "Name": "Curiosity",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "After you prepare a skill with Fate, you may discard this skill to gain 2 inspiration or become determined."
    },
    {
      "Type": "Herbalist",
      "XP": "Start",
      "Name": "Gathered Wisdom",
      "Number": 2,
      "Trait": "Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After lore increases, you or a nearby hero may scout 1.\nRest 2 (Discard at end of turn to discard 2 facecdown damage or fear.)"
    },
    {
      "Type": "Herbalist",
      "XP": "Start",
      "Name": "Gathered Wisdom",
      "Number": 3,
      "Trait": "Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After lore increases, you or a nearby hero may scout 1.\nRest 2 (Discard at end of turn to discard 2 facecdown damage or fear.)"
    },
    {
      "Type": "Herbalist",
      "XP": 3,
      "Name": "Study of Nature",
      "Number": 4,
      "Trait": "Aid, Knowledge",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "During your turn, you may discard this skill to choose another hero to scout 1.  If they prepare a card with fate, you each gain 1 inspiration."
    },
    {
      "Type": "Herbalist",
      "XP": 3,
      "Name": "Hands of a Healer",
      "Number": 5,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "After a hero in your space discards fear, you may discard this skill for a hero in your space to prepare a card with fate from their discard pile.\nRest 2"
    },
    {
      "Type": "Herbalist",
      "XP": 3,
      "Name": "Insight",
      "Number": 6,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "Once per round, a hero in your space may discard a prepared skill to scout 2.\nHide"
    },
    {
      "Type": "Herbalist",
      "XP": 7,
      "Name": "Calming Presence",
      "Number": 7,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "Before you or a nearby hero suffers fear, you may discard this skill to prevent all of that fear.  Then look at the top 3 fear cards and place each of them on the top or bottom of that deck."
    },
    {
      "Type": "Herbalist",
      "XP": 7,
      "Name": "Athelas",
      "Number": 8,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "At the end of your turn, you may discard this skill for you or a nearby hero to discard up to 2 damage.\nSprint 1"
    },
    {
      "Type": "Herbalist",
      "XP": 7,
      "Name": "Natural Remedy",
      "Number": 9,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "Before you or a nearby hero suffers damage, you may discard this skill to prevent all of that damage.  Then look at the top 3 damage cards and place each of them on the top or bottom of that deck."
    },
    {
      "Type": "Herbalist",
      "XP": 7,
      "Name": "Innovation",
      "Number": 10,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "D",
      "Ability": "When you interact and test, you may discard this skill to discard all cards from the test and reveal that many additional cards.\nHide"
    },
    {
      "Type": "Herbalist",
      "XP": 12,
      "Name": "Phosphorescence",
      "Number": 11,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Heroes in your space ignore darkness.\nWhen a hero in your space prepares a card with fate, that hero gains 1 inspiration."
    },
    {
      "Type": "Herbalist",
      "XP": 12,
      "Name": "Healing Poultice",
      "Number": 12,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "At the end of your turn, you may discard this skill for you or a nearby hero to discard up to 2 damage and 2 fear.\nSprint 2"
    },
    {
      "Type": "Hunter",
      "XP": "Start",
      "Name": "Resourceful",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "After you prepare this skill, gain 1 inspiration. At the end of your turn, you may discard this skill to gain 1 inspiration or scout 1."
    },
    {
      "Type": "Hunter",
      "XP": "Start",
      "Name": "Precise Strike",
      "Number": 2,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Strike 3 (When you attack, discard to add 3 hits.)"
    },
    {
      "Type": "Hunter",
      "XP": "Start",
      "Name": "Precise Strike",
      "Number": 3,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "Strike 3 (When you attack, discard to add 3 hits.)"
    },
    {
      "Type": "Hunter",
      "XP": 3,
      "Name": "Resourceful",
      "Number": 4,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "After you prepare this skill, gain 1 inspiration. At the end of your turn, you may discard this skill to gain 1 inspiration or scout 1."
    },
    {
      "Type": "Hunter",
      "XP": 3,
      "Name": "Coordinated Strike",
      "Number": 5,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "Before you strike with this skill, if there is another hero in your target's space, add a modifer of your choice to the attack.\nStrike 1"
    },
    {
      "Type": "Hunter",
      "XP": 3,
      "Name": "Quick Snare",
      "Number": 6,
      "Trait": "Tactic",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "Before you strike with this skill, add stun to the attack.\nStrike 1"
    },
    {
      "Type": "Hunter",
      "XP": 7,
      "Name": "Death Stroke",
      "Number": 7,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "Before you strike with this skill, add lethal to the attack.\nStrike 2"
    },
    {
      "Type": "Hunter",
      "XP": 7,
      "Name": "Barrage",
      "Number": 8,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "Before you strike with this skill, add cleave to the attack.\nStrike 1"
    },
    {
      "Type": "Hunter",
      "XP": 7,
      "Name": "Falcon Companion",
      "Number": 9,
      "Trait": "Creature",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill to apply 3 hits and pierce to a nearby enemy.\nSprint 1"
    },
    {
      "Type": "Hunter",
      "XP": 7,
      "Name": "Gather Supplies",
      "Number": 10,
      "Trait": "Food",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "After you prepare this skill, gain 1 inspiration. When you rest with this skill, you may scout 3.\nRest 2"
    },
    {
      "Type": "Hunter",
      "XP": 12,
      "Name": "On the Hunt",
      "Number": 11,
      "Trait": "Tactic",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Once per turn, before you or a nearby hero attacks, that hero gains 1 inspiration.\nStrike 2"
    },
    {
      "Type": "Hunter",
      "XP": 12,
      "Name": "Stalk Prey",
      "Number": 12,
      "Trait": "Valour",
      "Icon": "1 Success",
      "ReshykRating": "B",
      "Ability": "When you attack, if there are no nearby heroes, add 2 hits.\nHide"
    },
    {
      "Type": "Legolas",
      "XP": "Start",
      "Name": "Keen Eyes",
      "Number": 1,
      "Trait": "Innate",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "Your Ranged attacks can taget enemies 1 additional space away.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Legolas",
      "XP": "Start",
      "Name": "Light-Footed",
      "Number": 2,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you interact with a search or threat token, before you test, you may discard this skill to test Agility instead and scout 1.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Legolas",
      "XP": "Start",
      "Name": "Light-Footed",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you interact with a search or threat token, before you test, you may discard this skill to test Agility instead and scout 1.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Legolas",
      "XP": "Start",
      "Name": "Tireless",
      "Number": 4,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "At the end of your turn, you may discard this skill to perform an action that you have not performed this turn."
    },
    {
      "Type": "Legolas",
      "XP": "Start",
      "Name": "Immortality",
      "Number": 5,
      "Trait": "Innate",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "Rest 2 (Discard at end of turn to discard 2 facedown Damage or Fear.)\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Meddler",
      "XP": "Start",
      "Name": "Nosy",
      "Number": 1,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "Once per round, you may look at the top card of any hero's skill deck.  If it is a card with fate, that hero gains 1 inspiration."
    },
    {
      "Type": "Meddler",
      "XP": "Start",
      "Name": "Guidance",
      "Number": 2,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Before a hero in your space tests, you may discard this skill for that hero to scout 2.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Meddler",
      "XP": "Start",
      "Name": "Guidance",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Before a hero in your space tests, you may discard this skill for that hero to scout 2.\nHide (After you test, discard to become hidden.)"
    },
    {
      "Type": "Meddler",
      "XP": 3,
      "Name": "Gossip",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When you or a nearby hero tests Wisdom, you may discard this skill for that hero to gain 1 boon.\nRest 2"
    },
    {
      "Type": "Meddler",
      "XP": 3,
      "Name": "Fast Talking",
      "Number": 5,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "When you interact with a person token and test, you may discard this skill to add 2 success and scout 1.\nStrike 2"
    },
    {
      "Type": "Meddler",
      "XP": 7,
      "Name": "Interfering",
      "Number": 6,
      "Trait": "Aid, Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "When a nearby hero interacts and would test, you may discard this skill to perform that test instead. (All effects still target the original hero.)\nSprint 1"
    },
    {
      "Type": "Meddler",
      "XP": 7,
      "Name": "Ancient Legend",
      "Number": 7,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "D",
      "Ability": "During your turn, you may discard this skill to swap your deck and discard pile, then shuffle your deck."
    },
    {
      "Type": "Meddler",
      "XP": 12,
      "Name": "Contemplation",
      "Number": 8,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "You may have up to 6 prepared skills at the same time.  (If this skill is discarded, discard all but 4 prepared skills.)\nRest 2"
    },
    {
      "Type": "Meddler",
      "XP": 12,
      "Name": "Flattery",
      "Number": 9,
      "Trait": "Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "At the start of the rally phase, you may discard this skill for you and each nearby hero to prepare up to 1 skill with fate from their discard pile."
    },
    {
      "Type": "Meddler",
      "XP": 12,
      "Name": "Hidden Plans",
      "Number": 10,
      "Trait": "Knowledge, Shadow",
      "Icon": "1 Success",
      "ReshykRating": "S",
      "Ability": "During your turn, you may discard this skill to scout 4 and prepare up to 3 additional cards."
    },
    {
      "Type": "Meddler",
      "XP": 16,
      "Name": "Quick Temper",
      "Number": 11,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "Before you strike with this skill, add 2 modifiers of your choice to the attack.\nStrike 3"
    },
    {
      "Type": "Meddler",
      "XP": 16,
      "Name": "Strong Opinions",
      "Number": 12,
      "Trait": "Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you test, you may add 1 success for each knowledge skill you have prepared.  If you do, discard this skill.\nGuard 2"
    },
    {
      "Type": "Musician",
      "XP": "Start",
      "Name": "Endless Melody",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "At the end of your turn, you may discard this skill to prepare a song skill from your discard pile. If you do, gain 1 inspiration."
    },
    {
      "Type": "Musician",
      "XP": "Start",
      "Name": "Traveling Song",
      "Number": 2,
      "Trait": "Song",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you move into a space, you may discard this skill for you and up to 2 nearby heroes to each gain 1 inspiration."
    },
    {
      "Type": "Musician",
      "XP": "Start",
      "Name": "Traveling Song",
      "Number": 3,
      "Trait": "Song",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "When you move into a space, you may discard this skill for you and up to 2 nearby heroes to each gain 1 inspiration."
    },
    {
      "Type": "Musician",
      "XP": 3,
      "Name": "Word of Peace",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "When you or a nearby hero tests Wisdom, you may discard this skill to add 1 Success and scout 1.\nRest 2"
    },
    {
      "Type": "Musician",
      "XP": 3,
      "Name": "Song of Mocking",
      "Number": 5,
      "Trait": "Song",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill to apply stun to 1 enemy in your space. If you do, 1 nearby hero gains 1 inspiration.\nGuard 1"
    },
    {
      "Type": "Musician",
      "XP": 3,
      "Name": "A Bit of Nonsense",
      "Number": 6,
      "Trait": "Song",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill for you and nearby heroes to collectively discard up to 3 facedown Fear.\nHide"
    },
    {
      "Type": "Musician",
      "XP": 7,
      "Name": "Endless Wonder",
      "Number": 7,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "When you prepare a song skill, gain 1 inspiration. When you would gain inspiration, you may give it to nearby heroes instead.\nRest 2"
    },
    {
      "Type": "Musician",
      "XP": 7,
      "Name": "Durin's Song",
      "Number": 8,
      "Trait": "Song",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "During your turn, you may discard this skill for you and nearby heroes to collectively flip up to 4 Fear facedown. Then you become determined.\nGuard 2"
    },
    {
      "Type": "Musician",
      "XP": 7,
      "Name": "Lay of Nimrodel",
      "Number": 9,
      "Trait": "Song",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill for you and nearby heroes to collectively discard up to 4 facedown Damage."
    },
    {
      "Type": "Musician",
      "XP": 7,
      "Name": "Burst Into Song",
      "Number": 10,
      "Trait": "Song, Aid",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "After a nearby hero suffers Damage, you may discard this skill for you and that hero to each become emboldened or determined."
    },
    {
      "Type": "Musician",
      "XP": 12,
      "Name": "Crescendo of Dawn",
      "Number": 11,
      "Trait": "Song",
      "Icon": "1 Success",
      "ReshykRating": "D",
      "Ability": "You and nearby heroes ignore darkness and add smite to each of your attacks. At the end of the shadow phase, discard this skill and gain 1 inspiration."
    },
    {
      "Type": "Musician",
      "XP": 12,
      "Name": "Tale of Tinuviel",
      "Number": 12,
      "Trait": "Song",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "During your turn, you may discard this skill for you and up to 2 nearby heroes to each discard 1 Damage or 1 Fear. Then you scout 3."
    },
    {
      "Type": "Pathfinder",
      "XP": "Start",
      "Name": "Trailblazer",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "Before you sprint, gain 1 inspiration.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Pathfinder",
      "XP": "Start",
      "Name": "Paths Unseen",
      "Number": 2,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "S",
      "Ability": "After you sprint with this skill, you may place another hero in youir space without provoking attacks.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Pathfinder",
      "XP": "Start",
      "Name": "Paths Unseen",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "S",
      "Ability": "After you sprint with this skill, you may place another hero in youir space without provoking attacks.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Pathfinder",
      "XP": 3,
      "Name": "Word of Warning",
      "Number": 4,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "When you or a nearby hero tests Agility, you may discard this skill to add 1 Success and scout 1.\nSprint 1"
    },
    {
      "Type": "Pathfinder",
      "XP": 3,
      "Name": "Baited Trap",
      "Number": 5,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "When an enemy moves into a space with another hero, you may discard this skill to apply 3 hits and pierce to that enemy."
    },
    {
      "Type": "Pathfinder",
      "XP": 3,
      "Name": "Trail Sign",
      "Number": 6,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "After another hero moves into a space, you may discard this skill for that hero to choose to either move 1 additional space, become hidden, or interact with a search token."
    },
    {
      "Type": "Pathfinder",
      "XP": 7,
      "Name": "Ambush",
      "Number": 7,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "When an enemy moves into a space, you may discard this skill to attack that enemy, if possible, and add 1 Success to the test.\nStrike 2"
    },
    {
      "Type": "Pathfinder",
      "XP": 7,
      "Name": "Ambush",
      "Number": 8,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "When an enemy moves into a space, you may discard this skill to attack that enemy, if possible, and add 1 Success to the test.\nStrike 2"
    },
    {
      "Type": "Pathfinder",
      "XP": 7,
      "Name": "A Shortcut",
      "Number": 9,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "After a hero explores a tile, you may discard this skill to place your hero in their space without provoking attacks and scout 1.\nHide"
    },
    {
      "Type": "Pathfinder",
      "XP": 7,
      "Name": "Find a Way",
      "Number": 10,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "C",
      "Ability": "Before you sprint with this skill, choose to become determined, gain 1 inspiration, or scout 1.\nSprint 1"
    },
    {
      "Type": "Pathfinder",
      "XP": 12,
      "Name": "Unstoppable",
      "Number": 11,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "C",
      "Ability": "When you test, you may add 1 Success for each skill with sprint you have prepared and then discard this skill.\nSprint 2"
    },
    {
      "Type": "Pathfinder",
      "XP": 12,
      "Name": "Honed Instinct",
      "Number": 12,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you sprint, you may move 1 additional space. Your skills with sprint have strike 2 and hide.\nStrike 2\nHide"
    },
    {
      "Type": "Smith",
      "XP": "Start",
      "Name": "Reforging",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "After setup, equip the Hammer and Tongs Trinket.\nDuring your turn, you may discard this skill to prepare a skill from your discard pile."
    },
    {
      "Type": "Smith",
      "XP": "Start",
      "Name": "Thrice-Forged Steel",
      "Number": 2,
      "Trait": "Aid",
      "Icon": "1 Success",
      "ReshykRating": "D",
      "Ability": "You can strike with this skill when another hero in your space attacks.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Smith",
      "XP": "Start",
      "Name": "Thrice-Forged Steel",
      "Number": 3,
      "Trait": "Aid",
      "Icon": "1 Success",
      "ReshykRating": "D",
      "Ability": "You can strike with this skill when another hero in your space attacks.\nStrike 2 (When you attack, discard to add 2 hits.)"
    },
    {
      "Type": "Smith",
      "XP": 3,
      "Name": "Unbowed",
      "Number": 4,
      "Trait": "Valour",
      "Icon": "-",
      "ReshykRating": "S",
      "Ability": "Your inspiration limit is increased by 2.  (If this skill is discarded, discard all inspiration in excess of your inspiration limit.)\nRest 1"
    },
    {
      "Type": "Smith",
      "XP": 3,
      "Name": "Industrious",
      "Number": 5,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "After you prepare this skilll, a hero in your space may place 1 depletion token on any equipped Trinket.\nSprint 1\nStrike 1"
    },
    {
      "Type": "Smith",
      "XP": 3,
      "Name": "Industrious",
      "Number": 6,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "After you prepare this skilll, a hero in your space may place 1 depletion token on any equipped Trinket.\nSprint 1\nStrike 1"
    },
    {
      "Type": "Smith",
      "XP": 7,
      "Name": "Strike the Anvil",
      "Number": 7,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "After a hero attacks an enemy in your space, you may discard this skill to attack that enemy and add sunder."
    },
    {
      "Type": "Smith",
      "XP": 7,
      "Name": "Dwarf-Linked Rings",
      "Number": 8,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "Before a hero tests to negate damage, you may discard this skill for that hero to scout 2.\nGuard 2"
    },
    {
      "Type": "Smith",
      "XP": 7,
      "Name": "Elf-Wrights' Grace",
      "Number": 9,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "When a hero attacks, you may discard this skill for one of their items to gain:\n1 Success: 4 hits, pierce"
    },
    {
      "Type": "Smith",
      "XP": 7,
      "Name": "Craft of Men",
      "Number": 10,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "Before a hero attacks or tests to negate damage or fear, you may discard this skill for that hero to reveal 2 additional cards.\nStrike 2"
    },
    {
      "Type": "Smith",
      "XP": 12,
      "Name": "Cirith Inscription",
      "Number": 11,
      "Trait": "Knowledge, Valour",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you prepare this skill, gain 1 inspiration.\nWhen a hero attacks, you may discard this skill for one of their items to gain: \n1 Success: 4 hits, smite"
    },
    {
      "Type": "Smith",
      "XP": 12,
      "Name": "Forge's Fire",
      "Number": 12,
      "Trait": "Valour",
      "Icon": "1 Success",
      "ReshykRating": "S",
      "Ability": "When you attack, you may discard this skill to choose an equipped Trinket and add 1 success for each depletion token on that Trinket.\nGuard 3"
    },
    {
      "Type": "Traveller",
      "XP": "Start",
      "Name": "Over Ridge and Rill",
      "Number": 1,
      "Trait": "Aid",
      "Icon": "-",
      "ReshykRating": "B",
      "Ability": "After you explore a tile, another hero gains 1 inspiration.\nHide (After you test, discard to become hidden.)\nRest 1 (Discard at end of turn to discard 1 facedown damage or fear.)"
    },
    {
      "Type": "Traveller",
      "XP": "Start",
      "Name": "Many Paths to Tread",
      "Number": 2,
      "Trait": "Song, Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you discard a token from your space, gain 1 inspiration or scout 1.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Traveller",
      "XP": "Start",
      "Name": "Many Paths to Tread",
      "Number": 3,
      "Trait": "Song, Knowledge",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you discard a token from your space, gain 1 inspiration or scout 1.\nSprint 1 (During your turn, discard to move 1 space.)"
    },
    {
      "Type": "Traveller",
      "XP": 3,
      "Name": "Camaraderie",
      "Number": 4,
      "Trait": "Aid, Knowledge",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "During your turn, you may discard this skill for a nearby hero to discard 1 fear and scout 1."
    },
    {
      "Type": "Traveller",
      "XP": 3,
      "Name": "Around Every Corner",
      "Number": 5,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "A",
      "Ability": "Once per round, after you move into a space with a person, search, or terrain token, you may scout 1.\nSprint 1"
    },
    {
      "Type": "Traveller",
      "XP": 3,
      "Name": "Seasoned",
      "Number": 6,
      "Trait": "Knowledge",
      "Icon": "-",
      "ReshykRating": "C",
      "Ability": "Before you interact, you may discard this skill to gain 1 inspiration or become determined."
    },
    {
      "Type": "Traveller",
      "XP": 7,
      "Name": "Fleet of Foot",
      "Number": 7,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "S",
      "Ability": "Once per round, before you travel, you may move 1 space.\nSprint 1"
    },
    {
      "Type": "Traveller",
      "XP": 7,
      "Name": "Nothing to Fear",
      "Number": 8,
      "Trait": "Valour",
      "Icon": "1 Fate",
      "ReshykRating": "B",
      "Ability": "You do not provoke attacks.\nGuard 2"
    },
    {
      "Type": "Traveller",
      "XP": 7,
      "Name": "Campfire Tales",
      "Number": 9,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "At the end of your turn, you may discard this skill for you and a nearby hero to scout 2.\nHide\nRest 2"
    },
    {
      "Type": "Traveller",
      "XP": 7,
      "Name": "Paths Less Travelled",
      "Number": 10,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "A",
      "Ability": "Before you travel, you may discard this card to become hidden.\nSprint 2"
    },
    {
      "Type": "Traveller",
      "XP": 12,
      "Name": "Wanderlust",
      "Number": 11,
      "Trait": "Valour",
      "Icon": "1 Success",
      "ReshykRating": "A",
      "Ability": "After you interact, you may discard this skill to perform 1 additional action and gain 1 insiration.\nHide"
    },
    {
      "Type": "Traveller",
      "XP": 12,
      "Name": "Forgotten Roads",
      "Number": 12,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "S",
      "Ability": "At the start of your turn, you may discard this skill for you and a nearby hero to move up to 2 spaces without provoking attacks."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Mist-Walker",
      "Number": 1,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After a hero explores a tile, you may remove this skill from the adventure to place your hero on any space of that tile."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Stone-Talker",
      "Number": 2,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "During your turn, you may remove this skill from the adventure to choose a space and apply stun to each enemy group in that space."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Pack-Dweller",
      "Number": 3,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you strike with this skill, remove it from the adventure.\nStrike 3"
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Dwarf-Friend",
      "Number": 4,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "You have the Dwarf trait.\nDuring you turn, you may remove this skill from the adventure for you and another Dwarf to become emboldened."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Word-Wielder",
      "Number": 5,
      "Trait": "Knowledge",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you or a nearby hero tests, you may remove this skill from the adventure to add 1 success and scout 1."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Clue-Finder",
      "Number": 6,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you interact and test, you may remove this skill from the adventure to convert all fate to success."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Stinging Fly",
      "Number": 7,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "At the start of your turn, you may remove this skill from the adventure to perform an attack and ignore all counter-attacks until the end of your turn."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Wingfoot",
      "Number": 8,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you sprint with this skill, remove it from the adventure.\nSprint 3"
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Friend of Bears",
      "Number": 9,
      "Trait": "Creature",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you guard with this skill, remove it from the adventure.\nGuard 4"
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Fire-Giver",
      "Number": 10,
      "Trait": "Tactic",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you attack, you may remove this skill from the adventure to add a modifier of your choice."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Gale-Rock",
      "Number": 11,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "Before a hero in your space suffers any amount of fear, you may remove this skill from the adventure for that hero to gain an equal amount of inspiration instead."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Stormcrow",
      "Number": 12,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "At the start of your turn, you may remove this skill from the adventure to place your hero in a space with a threat token and interat with it without provoking attacks."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Unfallen",
      "Number": 13,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you rest with this skill, remove it from the adventure and become determined.\nRest 3"
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Elf-Friend",
      "Number": 14,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "You have the Elf trait.\nDuring your turn, you may remove this skill from the adventure for you and another Elf to gain 2 inspiration."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Coney-Foot",
      "Number": 15,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After an enemy moves into a nearby space, you may remove this skill from the adventure to place your hero in a space with another hero without provoking attacks."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Skin-Changer",
      "Number": 16,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you hide with this skill, remove it from the adventure and become emboldened.\nHide"
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Barrel Rider",
      "Number": 17,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you interact with a token and discard it, you may remove this skill from the adventure to place your hero in any space of an explored tile without provoking attacks."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Flame-Bearer",
      "Number": 18,
      "Trait": "Knowledge, Aid",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When a nearby enemy is attacked by another hero, you may remove this skill from the adventure to add 2 modifiers of your choice to that attack."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Guest of Eagles",
      "Number": 19,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "At the start of your turn, you may remove this skill from the adventure to, without provoking attacks, either place your hero in another hero's space or place another hero in your space."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Luckwearer",
      "Number": 20,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "After you deplete a trinket, you may remove this skill from the adventure to gain a boon of your choice and place 1 depletion token on that trinket."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Lone-Survivor",
      "Number": 21,
      "Trait": "Valour",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you or a nearby hero performs a last stand, you may remove this skill from the adventure to add 2 success to the test."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Nemesis",
      "Number": 22,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When a nearby elite enemy activates, you may remove this skill from the adventure to become emboldened. If you do, that enemy cannot move or attack during its activation."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Lore-Master",
      "Number": 23,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "Before you test, you may remove this skill from the adventure to scout 5."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Ever-Wary",
      "Number": 24,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "When you prepare this skill, you may flip 1 fear facedown. You may remove this skill from the adventure to ignore all counter-attacks until the end of your turn."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Treasure Seeker",
      "Number": 25,
      "Trait": "Shadow",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "At the start of your turn, you may remove this skill from the adventure to place your hero in a space with a search token and interact with it without provoking attacks."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Storyteller",
      "Number": 26,
      "Trait": "-",
      "Icon": "1 Fate",
      "ReshykRating": "-",
      "Ability": "During your turn, you may remove this skill from the adventure for 2 heroes to gain inspiration equal to their inspiration limits."
    },
    {
      "Type": "Title",
      "XP": "Title",
      "Name": "Dawn-Bringer",
      "Number": 27,
      "Trait": "-",
      "Icon": "1 Success",
      "ReshykRating": "-",
      "Ability": "Yet dawn is ever the hope of men.\"\n- The Two Towers"
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 1,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 2,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 3,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 4,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 5,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 6,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 7,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 8,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 9,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 10,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    },
    {
      "Type": "Weakness",
      "XP": "Start",
      "Name": "Food Coma",
      "Number": 11,
      "Trait": "-",
      "Icon": "-",
      "ReshykRating": "-",
      "Ability": "I just don't want to look back and think \"I could've eaten that\""
    }
  ];