let allSections = document.querySelectorAll('.sec');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');


let count=0;
// TODO fix carosal 
prev.addEventListener('click',() => {
    count--;
    if(count < 0){
        count = allSections.length-1;
        allSections[0].classList.add('d-none')
        allSections[count].classList.remove('d-none');
    } else{
        allSections[count+1].classList.add('d-none');
        allSections[count].classList.remove('d-none');
    }
});

next.addEventListener('click', () => {
    count++;

    if(count > allSections.length-1){
        count = 0;
        allSections[allSections.length-1].classList.add('d-none');
        allSections[count].classList.remove('d-none');
    } else {
        allSections[count-1].classList.add('d-none');
        allSections[count].classList.remove('d-none');
    }
});