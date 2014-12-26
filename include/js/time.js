function changeTime() {
    if (gameInfo.timeRemaining === "00:00:00") {
        gameOver();
    }

    var timeSplited = gameInfo.timeRemaining.split(':');
    var hour = timeSplited[0];
    var minute = timeSplited[1];
    var second = timeSplited[2];

    if (timeInfo.add > 0) {
        if (second >= 30) {
            minute++;
            second = (parseInt(second) - 30);
        } else {
            second += (parseInt(second) + 30);
        }
        timeInfo.add = 0;
    } else {
        second--;
        if (second === -1) {
            second = '59';
            minute--;
            if (minute === -1) {
                minute = '59';
                hour--;
            }
        }
    }

    hour = '0' + hour;
    hour = hour.toString().substr(-2, 2);
    minute = '0' + minute;
    minute = minute.toString().substr(-2, 2);
    second = '0' + second;
    second = second.toString().substr(-2, 2);
    gameInfo.timeRemaining = hour + ':' + minute + ':' + second;
    document.getElementById('time').innerHTML = "<b>" + gameInfo.timeRemaining + "</b>";
}
instance = self.setInterval("changeTime()", 1000);
