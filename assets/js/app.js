(function(){
  
  const list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');

  //Click on icon to delete Todo
$("ul").on("click", "span", e => {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$(".fa-plus").click(() => {
	$("input[type='text']").fadeToggle();
});
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(item.value !== '') {
      list.innerHTML += `<li>${item.value} </li>`;
      init();
      item.value = '';
    }
   
  }, false)
  
  list.addEventListener('click', e => {
    let t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } 
    else {
      t.classList.add('checked');
    }
    init();
  }, false)
  
  function init() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    const storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = `<li>Start with making the list :) </li>`;
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();