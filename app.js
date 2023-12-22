var time = +prompt('Введите время в цифрах')
switch (time){
    case 1:
        alert("Час ночи");
     break ;
    case 2:
        alert("Два часа ночи");
     break ;  
    case 3:
        alert("Три часа ночи");
     break;   
    case 4:
        alert("Четыре часа утра");
     break ;  
    case 5:
        alert("Пять часов утра");
     break  ; 
    case 6:
        alert("Шесть часов утра");
     break ;  
    case 7:
        alert("Семь часов утра");
     break ;  
    case 8:
        alert("Восемь часов утра");
     break ;  
    case 9:
        alert("Девять часов утра");
     break  ; 
    case 10:
        alert("Десять часов утра");
     break ;  
    case 11:
        alert("Одиннадцать часов утра");
     break  ; 
    case 12:
        alert("Двенадцать часов дня");
     break ;  
    case 13:
        alert("Час дня");
     break   ;
    case 14:
        alert("Два часа дня");
     break   ;
    case 15:
        alert("Три часа дня");
     break;   
    case 16:
        alert("Четыре часа дня");
     break;   
    case 17:
        alert("Пять часов дня");
     break ;  
    case 18:
        alert("Шесть часов вечера");
     break;   
    case 19:
        alert("Семь часов вечера");
     break ;  
    case 20:
        alert("Восемь часов вечера");
     break;   
    case 21:
        alert("Деять часов ночи");
     break ;  
    case 22:
        alert("Десять часов ночи");
     break;   
    case 23:
        alert("Одиннадцать часов ночи");
     break;   
    case 24:
        alert("Двенадцать часов ночи");
     break;   
    default:
        alert('Нет такого значения'); 
       break; 
  
}

    var a = +prompt('Введите первое число'); 
    var b = +prompt('Введите второе число');
    var c = +prompt('Введите третье число');


    if (a > b && a < c || a < b && a > c   ) {
        console.log('Ваше среднее число = ' + a);
    }else if (b > a && b < c || b < a  && b > c ) {
        console.log('Ваше среднее число = ' + b);
    }else if (c > a && c < b || c > a && c > b ){
        console.log('Ваше среднее число = ' + c);
    }else{
        console.log('Не выполнено условие');
    }




