


const addbtn = document.getElementById('add');

const updateLSData = () => {
    const textareadata = document.querySelectorAll('textarea');
    const notesall = [];
    textareadata.forEach((C) => {
        if(C.value==""){
            console.log("empty not saved");
        }else{
        return notesall.push(C.value);
        }
    });
    localStorage.setItem('notesall', JSON.stringify(notesall));


const colordata=document.querySelectorAll('.note');
const colorall=[];
colordata.forEach((E)=>{
    colorall.push(E.style.backgroundColor);
})
localStorage.setItem('colorall', JSON.stringify(colorall));



};


const addnew = (text="",col="#eaeaffd9") => {
    const note = document.createElement('div');
    note.style.animation="animatein 0.5s ease-out 1";
    note.classList.add('note');
    // "#eaeaffd9";
    note.style.backgroundColor=col;
    const htmlData = `
    <span id="numshow" class="getnote"></span>
    <span id="colorboxid" class="randomclick colorbox">
    <div class="colours" style="background-color:#eaeaffd9"></div>
    <div class="colours" style="background-color:#f7cac9d9"></div>
    <div class="colours" style="background-color:#92a8d1d9"></div>
    <div class="colours" style="background-color:#c38d9ed9"></div>
    <div class="colours" style="background-color:#8ee4afd9"></div>
    <div class="colours" style="background-color:#e3afbcd9"></div>
    </span>
<div class="operation">
    <button class="colorchange" ><i id="colorchange" class="fas fa-palette"></i></button>
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<p class="main ${text ? "" : "hidden"}"></p>
<textarea class="${text ? "hidden" : ""}"></textarea>  `;
    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);
    document.body.appendChild(note);
    const indexnumber = () => {
        const getall = document.querySelectorAll('.getnote');
        let num = 1;
        getall.forEach((B) => {
            B.innerHTML = num;
            num++;
        })
    };
    indexnumber();

    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const maintext = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    const colorchangebtn=note.querySelector('.colorchange');
    const colours =note.querySelectorAll('.colours');
    const colorboxid=note.querySelector('#colorboxid');



    colours.forEach((D)=>{
        let e = D.style.backgroundColor;
        D.addEventListener('click',()=>{
            note.style.background=e;
            updateLSData();
        });
    });

    colorchangebtn.onclick=function(){
        colorboxid.classList.toggle('colorbox1');
        colorboxid.classList.toggle('colorbox');
        };

    deletebtn.addEventListener('click', () => {
        note.remove();
        indexnumber();
        updateLSData();
    })
    textarea.value=text;
    maintext.innerHTML=text;
    editbtn.addEventListener('click', () => {
        maintext.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        maintext.innerHTML = value;
        updateLSData();
    });
    const randomclick=document.querySelectorAll('.randomclick');
document.onclick=(H)=>{
    if(H.target.id !== 'colorchange'){
    randomclick.forEach((G)=>{
        if(G.classList.contains('colorbox1')){
            G.classList.remove('colorbox1');
            G.classList.add('colorbox');
        }
    });
}
}
};
addbtn.addEventListener('click', () => addnew());
const notes = JSON.parse(localStorage.getItem('notesall'));
const setcolor = JSON.parse(localStorage.getItem('colorall'));
const length = notes.length;
for(let i=0;i<length;i++){
    addnew(notes[i],setcolor[i]);
}






