# Bug-function-by-TypeScript
Задача - изучить и проверить силу тайпскрипта. 
(заодно запустить примитив на node.js если вы еще этого не делали)

Есть функция.
Она принимает некий объект А, у которого есть поля со значениями
- или undefined 
- или объекта с одним полем cvalue, который либо undefined либо по типу равный либо строке, либо числу, либо ссылке на объект по своей структуре/описанию подобный описываемому объекту А.

Функция должна вернуть сумму "значений" поля cvalue всех полей объекта, притом, 
- если у очередного элемента поле сvalue - это число, то просто добавляем это число.
- если у очередного элемента поле сvalue - это строка, то просто конвертим строку в число и добавляем.
- если у очередного элемента поле cvalue - это объект подобный корневому, то добавляем сумму его полей (привет рекурсия)
- если мы натыкаемся на undefined, или же если cvalue был строкой которая по факту не являлась адекватным числом - то тогда значением будет 2021.

например, для
{
   hello: {cvalue: 1}, 
   world: { cvalue: 
      { yay: { cvalue: "2" }  } 
   }
}
должно вернуться 3

Есть следующая функция, но она немного багонутая.
Попробуйте найти в ней все баги самостоятельно без запуска этого кода.
Когда вы увидели все баги и готовы их исправлять, то сделайте это (НО НЕ НАДО ПЕРЕПИСЫВАТЬ С НУЛЯ :)) ), и когда будете уверены что функция работает ок - можете попробовать запустить ее и потестить.
Перед запуском изучите, что ваш любимый редактор подсвечивает в коде. 
Нашел ли он какие-то ошибки?

Если допустить, что все-таки вы пропустили ряд ошибок, то время протестировать тайпскрипт.
код багонутой функции

function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined) return 2021;
        if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
        if (elem.cvalue.isBigObject !== undefined) return summ(elem);
        return elem.сvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.lenght; i++) {
        sum += x[i].cvalue;
    }
    return summ;
}

Удачи найти все баги. Тут может быть проще все с нуля написать, но задача не об этом. А про то, как находить ошибки не напрягаясь.
