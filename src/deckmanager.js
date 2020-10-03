let deck = []
let hand = []
let discard = []
let scoutedcards = []
let removedcards = []
let zones=["deck","hand","discard","scoutedcards","removedcards"]
deckSectionCreated=0;
let hero = "";
let role = "";

function reset() {
    deck = deck.concat(hand,discard,scoutedcards);
    hand=[];
    discard=[];
    scoutedcards=[]
    updateDeck();
    updateDiscard();
    updateHand();
    updateScoutedCards();
    updateRemoved();
}
function editDeck() {
    parentElement = document.getElementById("allcards");
    heroSelect = document.getElementById("heroselect");
    if (parentElement.hidden==1) {
        parentElement.hidden=0;
        heroSelect.hidden=0;
    } else {
        parentElement.hidden=1;
        heroSelect.hidden=1;
    }
    if (deckSectionCreated) {
        return;
    }
    deckSectionCreated=1;
    addedWeakness=0;
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (i=0; i<allcards.length; i++) {
        if (allcards[i].inDeck) {
            allcards[i].inDeck=1;
        } else if (allcards[i].inDeck==0) {
            
        } else if (allcards[i].Type=="Basic") {
            allcards[i].inDeck=1;
        } else if (allcards[i].Type=="Weakness" && addedWeakness==0) {
            allcards[i].inDeck=1;
            addedWeakness=1;
        } else {
            allcards[i].inDeck=0;
        }

        parentElement = document.getElementById("allcards");
        childElement = document.createElement("div");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.id = "allcardsDiv"+i;
        parentid=appendChildElement.id;
        displayCard(allcards[i], appendChildElement, 1);

        parentElement = appendChildElement;
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","addToDeckFromAllcards("+i+")");
        appendChildElement.innerText = "Add to Deck";
        appendChildElement.id = parentid+"Add";
        if (allcards[i].inDeck==1) {
            appendChildElement.disabled=1;
        }
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","removeFromDeckFromAllcards("+i+")");
        appendChildElement.innerText = "Remove from Deck";
        appendChildElement.id = parentid+"Remove";
        if (allcards[i].inDeck==0) {
            appendChildElement.disabled=1;
        }
    }
    updateDeckFromAllCards();
}

function displayCard(card, elem, displayAll) {
   childElement = document.createElement("pre");
   appendChildElement = elem.appendChild(childElement);
   if (displayAll) {
        appendChildElement.innerText = appendChildElement.innerText + "Hero/Role: " + card.Type + "\n";
    }

    if (displayAll) {
        appendChildElement.innerText = appendChildElement.innerText + "XP: " + card.XP + "\n";
    }

    appendChildElement.innerText = appendChildElement.innerText + "Name: " + card.Name + "\n";

    if (displayAll) {
        appendChildElement.innerText = appendChildElement.innerText + "Number: " + card.Number + "\n";
    }

    appendChildElement.innerText = appendChildElement.innerText + "Trait: " + card.Trait + "\n";

    appendChildElement.innerText = appendChildElement.innerText + "Icon: " + card.Icon + "\n";

    if (displayAll) {
        appendChildElement.innerText = appendChildElement.innerText + "Reshyk Rating: " + card.ReshykRating + "\n";
    }

    appendChildElement.innerText = appendChildElement.innerText + "Ability: " + card.Ability + "\n";
}

function addToDeckFromAllcards(id) {
    allcards[id].inDeck=1;
    elem = document.getElementById("allcardsDiv"+id+"Add");
    elem.disabled=1;
    elem = document.getElementById("allcardsDiv"+id+"Remove");
    elem.disabled=0;
    deck.push(allcards[id]);
    updateDeck();
}

function removeFromDeckFromAllcards(id) {
    allcards[id].inDeck=0;
    elem = document.getElementById("allcardsDiv"+id+"Add");
    elem.disabled=0;
    elem = document.getElementById("allcardsDiv"+id+"Remove");
    elem.disabled=1;

    for (i=0; i<zones.length; i++) {
        index=eval(zones[i]).findIndex((element)=>element.Name==allcards[id].Name && element.Number==allcards[id].Number);
        if (index!=-1) {
            eval(zones[i]).splice(index,1);
            updateDeck();
            updateDiscard();
            updateHand();
            updateScoutedCards();
            updateRemoved();
        }
    }
}

function updateDeckFromAllCards() {
    reset();
    deck = [];
    for (i=0; i<allcards.length; i++) {
        if (allcards[i].inDeck==1) {
            deck.push(allcards[i]);
        }
    }
    updateDeck();
}

function showDeck() {

    parentElement = document.getElementById("deck");
    if (parentElement.hidden==0 ) {
        parentElement.hidden=1;
        return;
    } else {
        parentElement.hidden=0;
    }
    updateDeck();
}

function selectHero(selectObject) {
    oldHero = hero;
    hero = selectObject.value;
    for (j=0; j<allcards.length; j++) {
        if (allcards[j].Type==hero && allcards[j].XP=="Start") {
            addToDeckFromAllcards(j);
        } else if (allcards[j].Type==oldHero && allcards[j].XP=="Start") {
            removeFromDeckFromAllcards(j);
        }
    }
}

function selectRole(selectObject) {
    oldRole=role;
    role=selectObject.value;
    for (j=0; j<allcards.length; j++) {
        if (allcards[j].Type==role && allcards[j].XP=="Start") {
            addToDeckFromAllcards(j);
            if (allcards[j].Number==1) {
                prepareFromDeck(deck.length-1);
            }
        } else if (allcards[j].Type==oldRole && allcards[j].XP=="Start") {
            removeFromDeckFromAllcards(j);
        }
    }
}

function shuffleDeck() {
    shuffle(deck);
    updateDeck();
}

function shuffleDiscardIntoDeck() {
    deck=deck.concat(discard);
    discard=[];
    shuffleDeck();
    updateDeck();
    updateDiscard();
}

function addWeaknessToDiscard() {
    for (i=0; i<allcards.length; i++) {
        if (allcards[i].Type=="Weakness" && allcards[i].inDeck==0) {
            allcards[i].inDeck=1;
            discard.push(allcards[i]);
            updateDiscard();
            return;
        }
    }

}
function scout() {
    if (deck.length==0) {
        return;
    }
    scoutedcards.push(deck.pop());
    updateScoutedCards();
    updateDeck();
}

function topOfDeckFromScoutedcards(id) {
    deck.push(scoutedcards[id]);
    scoutedcards.splice(id,1);
    updateScoutedCards();
    updateDeck();
}

function bottomOfDeckFromScoutedcards(id) {
    deck.unshift(scoutedcards[id]);
    scoutedcards.splice(id,1);
    updateScoutedCards();
    updateDeck();
}

function prepareFromScoutedcards(id){
    hand.push(scoutedcards[id]);
    scoutedcards.splice(id,1);
    updateScoutedCards();
    updateHand();
}

function discardFromScoutedcards(id){
    discard.push(scoutedcards[id]);
    scoutedcards.splice(id,1);
    updateScoutedCards();
    updateDiscard();
}

function topOfDeckFromHand(id) {
    deck.push(hand[id]);
    hand.splice(id,1);
    updateHand();
    updateDeck();
}

function bottomOfDeckFromHand(id) {
    deck.unshift(hand[id]);
    hand.splice(id,1);
    updateHand();
    updateDeck();
}

function discardFromHand(id) {
    discard.push(hand[id]);
    hand.splice(id,1);
    updateHand();
    updateDiscard();
}

function topOfDeckFromDiscard(id) {
    deck.push(discard[id]);
    discard.splice(id,1);
    updateDiscard();
    updateDeck();
}

function bottomOfDeckFromDiscard(id) {
    deck.unshift(discard[id]);
    discard.splice(id,1);
    updateDiscard();
    updateDeck();
}

function prepareFromDiscard(id){
    hand.push(discard[id]);
    discard.splice(id,1);
    updateDiscard();
    updateHand();
}

function removedFromDiscard(id){
    removedcards.push(discard[id]);
    discard.splice(id,1);
    updateDiscard();
    updateRemoved();
}

function discardFromRemoved(id){
    discard.push(removedcards[id]);
    removedcards.splice(id,1);
    updateDiscard();
    updateRemoved();
}

function prepareFromDeck(id){
    hand.push(deck[id]);
    deck.splice(id,1);
    updateDeck();
    updateHand();
}

function discardFromDeck(id){
    discard.push(deck[id]);
    deck.splice(id,1);
    updateDeck();
    updateDiscard();
}

function updateScoutedCards() {
    parentElement = document.getElementById("scoutedcards");
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (i=-0; i<scoutedcards.length; i++) {
        parentElement = document.getElementById("scoutedcards");
        childElement = document.createElement("div");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.id = "div"+i;
        displayCard(scoutedcards[i], appendChildElement, 0);
    
        parentElement = appendChildElement;
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","topOfDeckFromScoutedcards("+i+")");
        appendChildElement.innerText = "Top";
        appendChildElement.id = parentElement.id+"Top";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","bottomOfDeckFromScoutedcards("+i+")");
        appendChildElement.innerText = "Bottom";
        appendChildElement.id = parentElement.id+"Bottom";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","prepareFromScoutedcards("+i+")");
        appendChildElement.innerText = "Prepare";
        appendChildElement.id = parentElement.id+"Prepare";

        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","discardFromScoutedcards("+i+")");
        appendChildElement.innerText = "Discard";
        appendChildElement.id = parentElement.id+"Discard";
    }
}

function updateHand() {
    parentElement = document.getElementById("hand");
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (i=-0; i<hand.length; i++) {
        parentElement = document.getElementById("hand");
        childElement = document.createElement("div");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.id = "handDiv"+i;
        displayCard(hand[i], appendChildElement, 0);
    
        parentElement = appendChildElement;
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","topOfDeckFromHand("+i+")");
        appendChildElement.innerText = "Top";
        appendChildElement.id = parentElement.id+"Top";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","bottomOfDeckFromHand("+i+")");
        appendChildElement.innerText = "Bottom";
        appendChildElement.id = parentElement.id+"Bottom";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","discardFromHand("+i+")");
        appendChildElement.innerText = "Discard";
        appendChildElement.id = parentElement.id+"Discard";
    }
}
function updateDeck() {
    elem = document.getElementById("deckNumber");
    elem.innerText=deck.length+" cards in deck";

    parentElement = document.getElementById("deck");
    if (parentElement.hidden==1) {
        return;
    }
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (i=-0; i<deck.length; i++) {
        parentElement = document.getElementById("deck");
        childElement = document.createElement("div");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.id = "div"+i;
        displayCard(deck[i], appendChildElement, 0);
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","prepareFromDeck("+i+")");
        appendChildElement.innerText = "Prepare";
        appendChildElement.id = parentElement.id+"Prepare";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","discardFromDeck("+i+")");
        appendChildElement.innerText = "Discard";
        appendChildElement.id = parentElement.id+"Discard";
    }
}

function updateDiscard(){
    elem = document.getElementById("discardNumber");
    elem.innerText=discard.length+" cards in discard pile";

    parentElement = document.getElementById("discard");
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (i=-0; i<discard.length; i++) {
        parentElement = document.getElementById("discard");
        childElement = document.createElement("div");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.id = "div"+i;
        displayCard(discard[i], appendChildElement, 0);
    
        parentElement = appendChildElement;
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","topOfDeckFromDiscard("+i+")");
        appendChildElement.innerText = "Top";
        appendChildElement.id = parentElement.id+"Top";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","bottomOfDeckFromDiscard("+i+")");
        appendChildElement.innerText = "Bottom";
        appendChildElement.id = parentElement.id+"Bottom";
    
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","prepareFromDiscard("+i+")");
        appendChildElement.innerText = "Prepare";
        appendChildElement.id = parentElement.id+"Prepare";

        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","removedFromDiscard("+i+")");
        appendChildElement.innerText = "Remove from Game";
        appendChildElement.id = parentElement.id+"Remove";
    }
}

function updateRemoved(){
    parentElement = document.getElementById("removed");
    while(parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (i=-0; i<removedcards.length; i++) {
        parentElement = document.getElementById("removed");
        childElement = document.createElement("div");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.id = "div"+i;
        displayCard(removedcards[i], appendChildElement, 0);
    
        parentElement = appendChildElement;
        childElement = document.createElement("button");
        appendChildElement = parentElement.appendChild(childElement);
        appendChildElement.setAttribute("onclick","discardFromRemoved("+i+")");
        appendChildElement.innerText = "Discard";
        appendChildElement.id = parentElement.id+"Discard";
    }
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};