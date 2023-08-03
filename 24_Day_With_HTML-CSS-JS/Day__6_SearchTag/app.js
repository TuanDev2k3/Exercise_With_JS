var content = document.querySelector('.content');
var input = document.querySelector('input');
var removeAll = document.querySelector('.remove_all');

var tags = ['Khai','Code','Developer'];

function render() {
    content.innerHTML = '';
    for (let i in tags) {
        var tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fas fa-times" onclick="removeTag(${i})"></i>
                            </li>`
    }
    content.appendChild(input);
    input.focus();
}
render();

input.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        if (!tags.includes(input.value.trim()) && input.value.trim() !== ''){
            tags.push(input.value.trim()); // trim la xoa space 2 dau text
            input.value = '';
            render();
        }
        else
            input.value = '';
    }
    // includes: so sanh tung phan tu trong tags VS input.value
})

function removeTag(index) {
    tags.splice(index, 1);  // splice: xoa phan tu trong mang(index: vi tri start, 1: so phan tu muon xoa)
    render();
}
// Remove All in Tags
removeAll.addEventListener('click', function(){
    tags.splice(0, tags.length);
    render();
})