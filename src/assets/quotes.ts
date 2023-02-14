const quotes = [
    'A SQL query goes into a bar, walks up to two tables and asks, "Can I join you?."',
    "When your hammer is C++, everything begins to look like a thumb.",
    "How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It's HTML5.",
    "3 SQL databases walked into a NoSQL bar. A little while later they walked out, because they couldn't find a table.",
    "To understand what recursion is, you must first understand recursion.",
    'Two threads walk into a bar. The barkeeper looks up and yells, "Hey, I want don\'t any conditions race like time last!"',
    "99 small bugs in the code 99 bugs in code 1 bug fixed...Compile again, 100 small bugs in the code.",
    "Lunix is very user friendly... It just very particular about who its friends are.",
    "I'm sick of following my dreams, man I'm just going to ask where they're going and hook up with 'em later.",
    "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
    "I love being married. It's so great to find that one special person you want to annoy for the rest of your life.",
    "When your mother asks, 'Do you want a piece of advice?' it is a mere formality. It doesn't matter if you answer yes or no. You're going to get it anyway.",
    "Life is short. Drive fast and leave a sexy corpse. That's one of my mottos.",
    'Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, "What\'s the word on the street?"',
    "Hear about the new restaurant called Karma? There's no menu: You get what you deserve.",
    "A woman in labor suddenly shouted, \"Shouldn't! Wouldn't! Couldn't! Didn't! Can't!\" \"Don't worry,\" said the doc. \"Those are just contractions.\"",
];

function shuffle(array: String[]) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

const useQuotes = () => {
    let randomizedQuotes = shuffle(quotes);
    let textQuotes = "";
    for (let quote of randomizedQuotes) textQuotes = textQuotes + quote + " ";
    return textQuotes;
};
export default useQuotes;
