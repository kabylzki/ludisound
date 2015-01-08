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
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(15, tabChest, chestImage);
            break;
        case 6:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage2, 2);
            initRandomImageObject(3, tabMonster, monsterImage3, 3);
            initRandomImageObject(10, tabMonster, monsterImage4, 4);
            // Fait apparaitre à coup sur une poupée
            initRandomImageObject(1, tabDoll, dollImage, null);
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
            initRandomImageObject(3, tabMonster, monsterImage4, 4);
            initRandomImageObject(3, tabMonster, monsterImage5, 5);
            initRandomImageObject(15, tabMonster, monsterImage6, 6);
            break;
        case 9:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage5, 5);
            initRandomImageObject(3, tabMonster, monsterImage6, 6);
            initRandomImageObject(15, tabMonster, monsterImage7, 7);
            break;
        case 10:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage6, 6);
            initRandomImageObject(3, tabMonster, monsterImage7, 7);
            initRandomImageObject(15, tabMonster, monsterImage8, 8);
            break;
        case 11:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage7, 7);
            initRandomImageObject(3, tabMonster, monsterImage8, 8);
            initRandomImageObject(15, tabMonster, monsterImage9, 9);
            break;
        case 12:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage8, 8);
            initRandomImageObject(3, tabMonster, monsterImage9, 9);
            initRandomImageObject(15, tabMonster, monsterImage10, 10);
            initRandomImageObject(1, tabDoll, dollImage, null);
            break;
        case 13:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage9, 9);
            initRandomImageObject(3, tabMonster, monsterImage10, 10);
            initRandomImageObject(15, tabMonster, monsterImage11, 11);
            break;
        case 14:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage10, 10);
            initRandomImageObject(3, tabMonster, monsterImage11, 11);
            initRandomImageObject(15, tabMonster, monsterImage12, 12);
            break;
        case 15:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage11, 11);
            initRandomImageObject(3, tabMonster, monsterImage12, 12);
            initRandomImageObject(15, tabMonster, monsterImage13, 13);
            break;
        case 16:
            initRandomImageObject(1, tabSphere, sphereImage);
            initRandomImageObject(1, tabClock, clockImage);
            initRandomImageObject(3, tabMonster, monsterImage12, 12);
            initRandomImageObject(3, tabMonster, monsterImage13, 13);
            initRandomImageObject(15, tabMonster, monsterImage14, 14);
            break;

    }
}
