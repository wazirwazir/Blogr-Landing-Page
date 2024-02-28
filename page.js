const dropdown = document.querySelector('#dropdown')
const list = document.querySelector('#droplist')
const tik = document.getElementById('tik')
const dropdown1 = document.querySelector('#dropdown1')
const list1 = document.querySelector('#droplist1')
const dropdown2 = document.querySelector('#dropdown2')
const list2 = document.querySelector('#droplist2')
const tik1 = document.getElementById('tik1')
const tik2 = document.getElementById('tik2')
const tab = document.getElementById('taba')
const mob = document.getElementById('mobile')



list.addEventListener('click', function() {
        dropdown.classList.toggle('hide')
        tik.classList.toggle('tik')
})

list1.addEventListener('click', function() {
    dropdown1.classList.toggle('hide')
    tik1.classList.toggle('tik')
})   

list2.addEventListener('click', function() {
    dropdown2.classList.toggle('hide')
    tik2.classList.toggle('tik')
})  

tab.addEventListener('click', function() {
    mob.classList.toggle('mob')
})

