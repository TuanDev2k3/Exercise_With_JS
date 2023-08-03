let fileImg = document.getElementById('my_file')
let imgShow = document.querySelector('.img_Show')
let mess = document.querySelector('.error')

fileImg.addEventListener('change', function(){
    var file = fileImg.files[0]
    var img = URL.createObjectURL(file)
    if (file.type == "image/jpeg" && file.size/(1024*1024) <= 3) {
        imgShow.src = `${img}`
        mess.innerHTML = ''
    }
    else{
        mess.innerHTML = 'Hãy chọn ảnh có định dạng .jpeg và dung lượng <= 3MB'
        return
    }
})