let hd = document.querySelectorAll('li');
// console.log(hd);
let hx = document.querySelector('ul');
for(let i=0;i<5;i++)
{
    hd[i].textContent="Apple";
    // hd[i].style.alignItems="center";
    // hd[i].style.justifyContent="center";
    hd[i].style.textAlign="center";
    hd[i].style.listStyleType="none";
    hd[i].style.color="#fff";
}

// console.log(hx);

hx.style.height="300px";
hx.style.width="300px";
hx.style.background="#000";
hx.style.margin='auto';