// script.js

$(function(){

  // DRAGGABLE
  $('.box').draggable();
  $('#box1').draggable({scroll:true, revert: "invalid"});
  $('#box2').draggable({axis:"x"});
  $('#box3').draggable({axis:"y"});
  $('#box4').draggable({containment:"parent", revert: "invalid"});

  // DROPPABLE
  $('#droppable').droppable({
    accept: '#box1',
    drop:function(){
      $(this).text("when a box got attitude, drop it like it's hot!");
    }
  })

  // SORTABLE
  $('#sortable').sortable({connectWith:"#sortableToo", placeholder:"placeholderBox"});
  $('#sortableToo').sortable({connectWith:"#sortable", placeholder:"placeholderBox"});

  // ACCORDION
  $('#accordion').accordion({collapsible:true, heightStyle:"content"});

  // DATE PICKER
  $('.date').datepicker({
    showOtherMonths:true,
    selectOtherMonths:true,
    showButtonPanel:true,
    changeMonth:false,
    changeYear:false,
    numberOfMonths:2,
    minDate: 0,
    maxDate: "+1y"
  });

  // TO DO LIST
  $('#todoList ul').sortable({
    items:"li:not('.listTitle, addItem')",
    connectWith:"ul",
    dropOnEmpty:true,
    placeholder:"emptySpace"
  });

  $('input').keydown(function(e){
    if(e.keyCode==13){
      var item = $(this).val();
      $(this).parent().parent().append('<li>'+ item +'</li>');
      $(this).val('');
    }
  });

  $('#trash').droppable({
    drop:function(event, ui){
      ui.draggable.remove();
    }
  })
});
