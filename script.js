function togglem() {
    
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hambur-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const notifications = document.querySelector(".notifications"), 
buttons = document.querySelectorAll(".btn-phone");


const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(()=> toast.remove(), 500);
}
const createToast =(id) => {

    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML= `<div class="column">
    <i class="fa-solid fa-circle-check"></i>
    <span>Copied to the Clipboard.</span>
</div>
<i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)")></i>`;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(()=> removeToast(toast), 5000);
}

buttons.forEach(btn => {

    btn.addEventListener("click", () => createToast(btn.id));

});

function paste() {

    navigator.clipboard.writeText("(905)-616-3985");

}

     




