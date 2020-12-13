var data = [
    {index:1,act:'吃饭'},
    {index:2,act:'睡觉'},
    {index:3,act:'打豆豆'}
]
var ol = document.querySelector('ol')
var a = document.querySelector('a')
var inp = document.querySelector('.title')
var add = document.querySelector('.add')
bindHtml()
function bindHtml(){
    var str = ''
    for(var i = 0;i < data.length;i++){
        str += '<li><imput type ="checkbox" /><p onclick="edit(' + (i + 1) +')">'
        +data[i].act + '</p><a href="javascript:remove(' + (i+1) +')">-</a></d>'

    }
    ol.innerHTML = str
}
var add = document.querySelector('.add')
    var nameInp = document.querySelector('.name')
    var genderInp = document.querySelector('.gender')
    add.onclick = function () {
      var inp = inp.value
      var a = a.value
      if (!name || !gender) {
        alert('请完整填写表单')
        return
      }
      var user = {
        index: data.length + 1,
        name: name,
        gender: gender
      }
      data.push(user)
      nameInp.value = ''
      genderInp.value = ''
      bindHtml()
    }