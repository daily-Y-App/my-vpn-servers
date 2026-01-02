// သင့်ရဲ့ GitHub ထဲက JSON ဖိုင်ကို လှမ်းဖတ်မယ်
async function loadServers() {
    try {
        const response = await fetch('vpn_servers.json');
        const servers = await response.json();
        const select = document.getElementById('serverList');

        servers.forEach(server => {
            let option = document.createElement('option');
            option.text = `🇹🇭 ${server.name} (READY IDC)`;
            select.add(option);
        });
    } catch (error) {
        console.log("JSON ဖတ်မရပါ၊ ဖိုင်အမည် မှန်မမှန် စစ်ဆေးပါ");
    }
}

const powerBtn = document.getElementById('powerBtn');
const statusText = document.getElementById('connStatus');

powerBtn.addEventListener('click', () => {
    powerBtn.classList.toggle('connected');
    if (powerBtn.classList.contains('connected')) {
        statusText.innerText = "Kind VPN Connected ✅";
        statusText.style.color = "white";
        statusText.style.background = "#4CAF50";
        statusText.style.padding = "5px 15px";
        statusText.style.borderRadius = "10px";
    } else {
        statusText.innerText = "Kind VPN Disconnected";
        statusText.style.background = "none";
        statusText.style.color = "black";
    }
});

// Server List ကို စတင်ဆွဲတင်ရန်
loadServers();
