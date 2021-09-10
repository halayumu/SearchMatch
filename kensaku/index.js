function Message() {
    let textMsg = document.getElementById('txt');
    let msg = textMsg.value;

    //----[if判定]----//
    if (msg == 'りんご') {
        document.write('<img src="./img/apple.jpeg" alt="りんご画像">');
    } else if (msg == 'ハンバーグ') {
        document.write('<img src="./img/hanbarg.jpeg" alt="りんご画像">');
    } else {
        alert('該当しません');
    }
}