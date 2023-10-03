// モーダル要素を取得
const modalContent = document.querySelector('.modal-conrainer');

// モーダル初期化
function initializeModal() {
  fetch('../html/modal.html')
    .then(res => res.text())
    .then(data => {
      modalContent.innerHTML = data;
    });
}

// モーダルを開く
function openModal() {
  modalContent.style.display = 'block';
  initializeModal();
}

// モーダルを閉じる
function closeModal() {
  modalContent.style.display = 'none';
  modalContent.innerHTML = null;
}

