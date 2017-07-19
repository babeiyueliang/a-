$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});


isInsert=true;

$('.ul').on('click','tr',function(){
	//var num=$('tr').index($(this))-1;

	var id=$(this).find('td').eq(0).html();
	var tit=$(this).find('td').eq(1).html();
	var img=$(this).find('td').eq(2).html();
	var date=$(this).find('td').eq(3).html();
	$('.title').val(tit);
	$('.img').val(img);
	$('.date').val(date);
	
	isInsert=false;
	/*$.ajax({
		url:'/getallnews',
		type:'get',
		//data:json,
		success:function(){
			
			
		}
	});*/
	
})






//添加
$('#add').click(function(e){
	e.preventDefault();

	var tit=$('.title').val();
	var img=$('.img').val();
	var cont=$('.content').val();
	var date=$('.date').val();
	var col=$('.column').val();
	var json  ={
    		title:tit,
    		img:img,
    		content:cont,
    		date:date,
    		column:col
    	}	
    /*alert(col);
    alert(date);*/
    $.ajax({
    	url:'/addNews',
    	type:'post',
    	data:json,
    	success:function(data){
    		if(data.state === 'ok') {
    			$('.title').val(' ');
				$('.content').val(' ');
				$('.img').val(' ');
				$('.date').val('');
				alert(data.message);
				location.reload();
    		}
    			
    	},
    	error:function(err){
    		console.log(err);
    	}
    });
});

var id;
$('.one').on('click','#remove',function(e){
	
	e.stopPropagation();
	id=$(this).prev().children().children(0).children(0).html();
	alert(id);
	$('#myModal').modal('show');

})
$('#sure').click(function(e){
	$.ajax({
		url:'/removeLi',
    	type:'post',
    	data:{id:id},
    	success:function(data){
    		alert(data.message);
    		location.reload();	
    	},
    	error:function(err){
    		console.log(err);
    	}
	})

})
