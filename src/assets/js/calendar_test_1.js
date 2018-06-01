//时间对象
var dateObj = new Date();
//获取年、月
var year = dateObj.getFullYear();
//月份转化方法0-11代表1月-12月,所以需要+1
var month = dateObj.getMonth() + 1;
//年月的显示
var yearMonth = year + "年" + month + "月";
//获取span标签
var showYearMonth = document.getElementById('showYearMonth');
//日
//获取当月1号是星期几
var firstDayWeekNum = getFirstDayWeekNum(dateObj);
//当月有多少天
var allDays = getAllDays(dateObj);
//今天是几号
var Today = getToday(dateObj);
//上个月按钮
var preMonth = document.getElementById('preMonth');
//下个月按钮
var nextMonth = document.getElementById('nextMonth');
//初始化显示本月信息
fillNum(firstDayWeekNum, allDays, Today, dateObj.getMonth(), dateObj.getFullYear());
//刚进页面的时候将当前年月写进span标签
setShowYearMonth(dateObj);

//上一个月
preMonth.onclick = function() {
	var month_1 = null;
	var year_1 = null;
	//如果本月是1月份,返回的值是0
	if((dateObj.getMonth() - 1) == -1) {
		month_1 = 11;//12月
		year_1 = dateObj.getFullYear() - 1;//减一年
	}else {//如果不是一月份
		month_1 = dateObj.getMonth() - 1;
		year_1 = dateObj.getFullYear();
	};
	//获取减一个月后的年月数,写入对象
	dateObj.setFullYear(year_1);
	dateObj.setMonth(month_1);
	//写入span标签
	setShowYearMonth(dateObj);
	//清除td
	clearContent();
	firstDayWeekNum = getFirstDayWeekNum(dateObj);
	allDays = getAllDays(dateObj);
	fillNum(firstDayWeekNum,allDays,Today,month_1,year_1);
	clearChoose();
}


nextMonth.onclick = function() {
	var month_1 = null;
	var year_1 = null;
	//如果本月是12月份,返回的值是11
	if((dateObj.getMonth() + 1) == 12) {
		//1月
		month_1 = 0;
		//加一年
		year_1 = dateObj.getFullYear() + 1;
		
	}else {//如果不是12月份
		month_1 = dateObj.getMonth() + 1;
		year_1 = dateObj.getFullYear();
	};
	//获取减一个月后的年月数,写入对象
	dateObj.setFullYear(year_1);
	dateObj.setMonth(month_1);
	//写入span标签
	setShowYearMonth(dateObj);
	//清除td
	clearContent();
	firstDayWeekNum = getFirstDayWeekNum(dateObj);
	allDays = getAllDays(dateObj);
	fillNum(firstDayWeekNum,allDays,Today,month_1,year_1);
	clearChoose();
}



/*****************function********************/

//将年月写进span标签
function setShowYearMonth(dateObj) {
	yearMonth = dateObj.getFullYear() + "年" + (dateObj.getMonth() + 1) + "月";
	//年月写进span标签
	showYearMonth.innerHTML = yearMonth;
}
//清除选中的后的背景颜色
function clearChoose() {
	$('.date_table td').removeClass('clickDayColor');
}

//清空表里面的字
function clearContent() {
	$('.date_table td').html("");
}
//clearcontent();
//获取当月1号是星期几,0-周日，6-周六
function getFirstDayWeekNum(dateObj) {
	let dateObj_1 = new Date();
	let year = dateObj.getFullYear();
	let month = dateObj.getMonth();
	dateObj_1.setFullYear(year);
	dateObj_1.setMonth(month);
	dateObj_1.setDate(1);
	console.log(dateObj_1);
	return dateObj_1.getDay();
}

//获取当月有多少天
function getAllDays(dateObj) {
	let year = dateObj.getFullYear();
	let month = dateObj.getMonth();
	//闰年
	if(isLeapYear(year)) {
		switch(month) {
			case 0: //1月
				return "31";
				break;
			case 1: //2月
				return "29";
				break;
			case 2: //3月
				return "31";
				break;
			case 3:
				return "30";
				break;
			case 4:
				return "31";
				break;
			case 5:
				return "30";
				break;
			case 6:
				return "31";
				break;
			case 7:
				return "31";
				break;
			case 8:
				return "30";
				break;
			case 9:
				return "31";
				break;
			case 10:
				return "30";
				break;
			case 11:
				return "31";
				break;
			default:
				break;
		}
	} else { //平年
		switch(month) {
			case 0: //1月
				return "31";
				break;
			case 1: //2月
				return "28";
				break;
			case 2: //3月
				return "31";
				break;
			case 3:
				return "30";
				break;
			case 4:
				return "31";
				break;
			case 5:
				return "30";
				break;
			case 6:
				return "31";
				break;
			case 7:
				return "31";
				break;
			case 8:
				return "30";
				break;
			case 9:
				return "31";
				break;
			case 10:
				return "30";
				break;
			case 11:
				return "31";
				break;
			default:
				break;
		}
	}
}
//判断是不是闰年
function isLeapYear(year) {
	if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
		return true;
	} else {
		return false;
	};
};

//addClickForTd();
//将日号填充进td,参数，当月1号是星期几，当月有多少天
function fillNum(firstDayWeekNum, allDays, Today, flag_month,flag_year) {
	let m = firstDayWeekNum; //从第几个td开始填充，m是0-6，恰好对应周日周一...周六
	let ppdate = new Date();
	//移除所有td上的点击颜色变化事件
	removeClickColor();
	//i是显示在每个td中的日期号，m是i日期号所在的td位置索引号
	for(let i = 1; i <= allDays; i++) {
		$('.date_table td')[m].innerHTML = i;
		//如果没有DIV则添加DIV
		if($('.date_table td')[m].getElementsByTagName('div').length == 0) {
			let div = document.createElement('div');
			//添加透明的div
			div.classList.add('opacity0');
			$('.date_table td')[m].append(div);
		}
		//如果年月日与，则背景颜色深一些
		if((i == Today)&&(ppdate.getMonth() == flag_month)&&(ppdate.getFullYear() == flag_year)) {
//			console.log($('.date_table td')[m]);
//			console.log("今天是" + Today);
//			console.log("i是" + i);
//			console.log("m是" + m);
			$('.date_table td')[m].style.backgroundColor = 'grey';
			$('.date_table td')[m].style.color = 'white';
		}else {
			$('.date_table td')[m].style.backgroundColor = '';
			$('.date_table td')[m].style.color = '';
		}
		//为每个td添加一个点击事件，背景颜色和字体颜色变化
		$('.date_table td')[m].addEventListener('click',clickColor);
		m++;
	}
}
//当前是几号
function getToday(dateObj) {
	//console.log(dateObj.getDate());
	return dateObj.getDate();
};

//点击背景颜色和文字颜色变
function clickColor() {
	$('.date_table td').removeClass('clickDayColor');
	$(this).addClass('clickDayColor');
}

//移除所有TD上的绑定点击背景颜色变化事件
function removeClickColor() {
	let td_length = $('.date_table td').length;
	for (let i = 0;i < td_length;i++ ) {
		$('.date_table td')[i].removeEventListener('click',clickColor);
	}
}
