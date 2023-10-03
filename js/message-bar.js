// メッセージバー要素を取得
const messageBarConrainer = document.querySelector('.message-bar-conrainer');

// モーダル初期化
function initializeMessageBar() {
  fetch('../html/messageBar.html')
    .then(res => res.text())
    .then(data => {
      messageBarConrainer.innerHTML = data;
    });
};

// メッセージバーを表示する
function showMessageBar() {
  messageBarConrainer.style.display = 'block';

  // 3秒後にメッセージバーを非表示にする
  setTimeout(() => {
    messageBarConrainer.style.display = 'none';
  }, 3000);
}

// コピーボタンがクリックされたときの処理
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'copyBtn') {
    const pText = document.getElementById('textCopy').textContent;

    // テキストをコピー
    navigator.clipboard.writeText(pText)
      .then(() => {
        // メッセージバーを表示
        showMessageBar();
      })
      .catch((error) => {
        console.error('クリップボードへのコピーに失敗しました: ', error);
      });
  }
});

initializeMessageBar();