 let body = document.body;
        let info = document.getElementById('info')
        let mode = document.getElementById('mode')
        let home = document.getElementById('home')
        let rMode = document.getElementById('rMode')

        const darkLimit = 5;
        let darkCounter = 0;
        let darkRemainingLeft;

        const redLimit = 5;
        let redCounter = 0;
        let redRemainingLeft;

        function darkMode() {
            if(darkRemainingLeft == 1) {
                info.textContent = "JATAH FITUR DARKMODE ANDA SUDAH HABIS"
                mode.style.display = "none"
                home.textContent = "RESTART"
                return;
            }

            if(darkCounter == 0) {
                mode.textContent = "DARK MODE"
            } else if (darkCounter == 1) {
                mode.textContent = "MODE"
            } else if (darkCounter == 2) {
                mode.textContent = "MODE"
            } else if (darkCounter == 3) {
                mode.textContent = "MODE"
            }

            darkCounter += 1;
            darkRemainingLeft = darkLimit - darkCounter;

            //render ke info element
            info.textContent = `Darkmode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}`

            body.classList.toggle("dark")
        }


        function redMode() {
             if(redRemainingLeft == 1) {
                info.textContent = "JATAH FITUR REDMODE ANDA SUDAH HABIS"
                rMode.style.display = "none"
                home.textContent = "RESTART"
                return;
            }

             if(redCounter == 0) {
                rMode.textContent = "RED MODE"
            } else if (redCounter == 1) {
                rMode.textContent = "MODE"
            } else if (redCounter == 2) {
                rMode.textContent = "RED MODE"
            } else if (redCounter == 3) {
                rMode.textContent = "MODE"
            }

            redCounter += 1
            redRemainingLeft = redLimit - redCounter;

            //render ke info element
            info.textContent = `Redkmode dipakai ${redCounter}x, tersisa ${redRemainingLeft}`

            body.classList.toggle("merah")
        }

        function reRender() {
            location.reload()
        }