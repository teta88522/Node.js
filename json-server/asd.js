// matrix.js
// 터미널 창을 전체화면으로 키우고 실행하면 훨씬 멋집니다.

// 현재 터미널 창의 가로(columns)와 세로(rows) 크기를 가져옵니다.
const width = process.stdout.columns || 80;
const height = process.stdout.rows || 24;

// 각 열(column)마다 빗방울이 떨어지는 y축 위치를 저장하는 배열
const drops = new Array(width).fill(0);

console.clear();

setInterval(() => {
    // 화면을 지우지 않고 커서만 맨 위 좌측으로 이동 (깜빡임 최소화)
    process.stdout.write('\x1b[H'); 
    
    let output = '';
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // 랜덤한 아스키 문자 생성 (! 부터 ~ 까지)
            const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
            
            if (y === drops[x]) {
                // 빗방울의 맨 앞머리는 하얗고 밝게 빛남 (ANSI 색상 코드 37m)
                output += '\x1b[37m' + randomChar + '\x1b[0m';
            } else if (y < drops[x] && y > drops[x] - 15) {
                // 빗방울이 지나간 꼬리는 초록색으로 잔상이 남음 (ANSI 색상 코드 32m)
                // 꼬리가 길어질수록 어두워지는 효과 대신 기본 초록색 적용
                output += '\x1b[32m' + randomChar + '\x1b[0m';
            } else {
                // 비가 오지 않는 빈 공간
                output += ' ';
            }
        }
        output += '\n';
    }
    
    // 완성된 한 프레임을 터미널에 한 번에 출력
    process.stdout.write(output);

    // 빗방울 위치 업데이트
    for (let i = 0; i < width; i++) {
        // 화면 맨 아래로 떨어졌거나, 랜덤한 확률로 다시 꼭대기에서 비가 내리기 시작함
        if (drops[i] > height && Math.random() > 0.95) {
            drops[i] = 0;
        } else {
            drops[i]++;
        }
    }
}, 50); // 50ms마다 화면 갱신