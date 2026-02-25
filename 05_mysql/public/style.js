        const fileInput = document.querySelector('.file-input');
        const fileMessage = document.querySelector('.file-message');

        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                fileMessage.textContent = `선택된 파일: ${this.files[0].name}`;
                fileMessage.style.color = '#00ffcc'; // 파일 선택 시 네온 민트색으로 변경
            } else {
                fileMessage.textContent = '클릭하거나 파일을 여기로 드래그하세요';
                fileMessage.style.color = '';
            }
        });