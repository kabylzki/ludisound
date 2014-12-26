function initLevel(level) {
    switch (level) {
        case 1:
            initRandomImageObject(10, tabMonster, monsterImage, 0);
            break;
        case 2:
            initRandomImageObject(5, tabMonster, monsterImage1, 0);
            initRandomImageObject(7, tabMonster, monsterImage1, 1);
            break;
        case 3:
            initRandomImageObject(3, tabMonster, monsterImage1, 0);
            initRandomImageObject(3, tabMonster, monsterImage1, 1);
            initRandomImageObject(6, tabMonster, monsterImage2, 2);
            break;
        case 4:
            initRandomImageObject(3, tabMonster, monsterImage1, 1);
            initRandomImageObject(3, tabMonster, monsterImage2, 2);
            initRandomImageObject(10, tabMonster, monsterImage3, 3);
            break;
            
            // Bonus level
        case 5:
            initRandomImageObject(10, tabChest, chestImage);
            break;
        case 6:
            initRandomImageObject(3, tabMonster, monsterImage3, 3);
            initRandomImageObject(3, tabMonster, monsterImage4, 4);
            initRandomImageObject(15, tabMonster, monsterImage5, 5);
            break;
    }
}
