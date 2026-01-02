// ၁။ Server List ကို JSON ကနေ ဖတ်မယ်
async function loadServers() {
    try {
        const response = await fetch('vpn_servers.json');
        const servers = await response.json();
        const select = document.getElementById('serverList');
        select.innerHTML = ""; // အဟောင်းတွေကို ဖျက်မယ်
        servers.forEach(server => {
            let option = document.createElement('option');
            option.text = server.name;
            select.add(option);
        });
    } catch (e) { console.log("Error loading JSON"); }
}

// ၂။ စက္ကန့် တကယ်ပတ်မယ့် Timer Function
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
        if (--timer < 0) { timer = 0; }
    }, 1000);
}

// ၃။ Connect ခလုတ်နှိပ်ရင် အလုပ်လုပ်ဖို့
const powerBtn = document.getElementById('powerBtn');
powerBtn.addEventListener('click', () => {
    powerBtn.classList.toggle('connected');
    const statusText = document.getElementById('connStatus');
    if (powerBtn.classList.contains('connected')) {
        statusText.innerText = "Kind VPN Connected ✅";
        powerBtn.innerHTML = "✔"; // အကွက်လေးနေရာမှာ အမှန်ခြစ်ပြောင်းမယ်
    } else {
        statusText.innerText = "Kind VPN Disconnected";
        powerBtn.innerHTML = "⏻";
    }
});

// အကုန်လုံးကို စတင်နှိုးဆော်မယ်
window.onload = function () {
    loadServers();
    let twelveHours = 60 * 60 * 12 + 1 * 60 + 19; // ၁၂ နာရီ၊ ၁ မိနစ်၊ ၁၉ စက္ကန့်
    let display = document.querySelector('#timer');
    startTimer(twelveHours, display);
};
