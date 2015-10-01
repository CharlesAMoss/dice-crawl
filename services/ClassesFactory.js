diceCrawl.factory('ClassesFactory', function ClassesFactory(){
    var factory = {};
    factory.classes[0].powerOne.diceOne = 1

    { name: "Alchemist",
        powerOne: { powerName: "Reveal", requirement: 1, diceOne: 1, diceTwo: 6 },
        powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 5 },
        powerThree: { powerName: "Reinforcements", requirement: 3, diceFive: 3, diceSix: 4 } }


    
    factory.classes = [

            { className: "Alchemist",
                powerOne: { powerName: "Reveal", requirement: 1, diceOne: 1, diceTwo: 6 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 5 },
                powerThree: { powerName: "Reinforcements", requirement: 3, diceFive: 3, diceSix: 4 } },
            { className: "Archer",
                powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Avenger",
                powerOne: { powerName: "Garrison", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Attack", requirement: 1, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Reveal", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Barbarian",
                powerOne: { powerName: "Onslaught", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Onslaught", requirement: 2, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Roll +1", requirement: null, diceFive: 5, diceSix: 5 } },
            { className: "Cleric",
                powerOne: { powerName: "Garrison", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Withdraw", requirement: 2, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Reinforcements", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Explorer",
                powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Rotate", requirement: 2, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Necromage",
                powerOne: { powerName: "Roll +1", requirement: null, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Reinforcements", requirement: 4, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Shapechange", requirement: 6, diceFive: 5, diceSix: 5 } },
            { className: "Ranger",
                powerOne: { powerName: "Scout", requirement: 1, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Reveal", requirement: 2, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Roll +1", requirement: 3, diceFive: 5, diceSix: 5 } },
            { className: "Rogue",
                powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Hoarder", requirement: null, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Slinger",
                powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Onslaught", requirement: 4, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Soldier",
                powerOne: { powerName: "Garrison", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Reinforcements", requirement: 1, diceFive: 5, diceSix: 5 } },
            { className: "Witch",
                powerOne: { powerName: "Attack", requirement: 3, diceOne: 3, diceTwo: 3 },
                powerTwo: { powerName: "Swap", requirement: 4, diceThree: 4, diceFour: 4 },
                powerThree: { powerName: "Shapechange", requirement: 6, diceFive: 5, diceSix: 5 } }
        ];

    return factory;
});
