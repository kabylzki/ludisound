function initLevel(level) {
    switch (level) {
        case 1:
            initRandomImageObject(10, tabMonster, monsterImage, 0);
            break;
        case 2:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(5, tabMonster, monsterImage, 0);
            initRandomImageObject(7, tabMonster, monsterImage1, 1);
            break;
        case 3:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage, 0);
            initRandomImageObject(3, tabMonster, monsterImage1, 1);
            initRandomImageObject(6, tabMonster, monsterImage2, 2);
            break;
        case 4:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage1, 1);
            initRandomImageObject(3, tabMonster, monsterImage2, 2);
            initRandomImageObject(10, tabMonster, monsterImage3, 3);
            break;
            // Bonus level
        case 5:
            // TODO init TEXT !
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(15, tabChest, chestImage);
            break;
        case 6:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage2, 2);
            initRandomImageObject(3, tabMonster, monsterImage3, 3);
            initRandomImageObject(10, tabMonster, monsterImage4, 4);
            break;
        case 7:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage3, 3);
            initRandomImageObject(3, tabMonster, monsterImage4, 4);
            initRandomImageObject(15, tabMonster, monsterImage5, 5);
            break;
        case 8:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage3, 3);
            initRandomImageObject(3, tabMonster, monsterImage4, 4);
            initRandomImageObject(15, tabMonster, monsterImage5, 5);
            break;
        case 9:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage3, 3);
            initRandomImageObject(3, tabMonster, monsterImage4, 4);
            initRandomImageObject(15, tabMonster, monsterImage5, 5);
            break;
    }
}
