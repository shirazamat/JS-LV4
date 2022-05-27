/* 2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
3. * Подумать над глобальными сущностями. К примеру, 
сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. 
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
но в разных местах давал возможность вызывать разные методы. */

'use strict'

function countBasketPrice() {
    var basket = [
         {
            title: 'product1',
            descreption: '',
            price: 100,
            count: 1
        },
        {
            title: 'product2',
            descreption: '',
            price: 200,
            count: 2
        },
        {
            title: 'product3',
            descreption: '',
            price: 300,
            count: 3
        }
        ];
    var sum = 0;
    var quantity = 0;
    var name = 'В корзине находится товары следующих наименований:';
    var q = basket.length;
    for(let item of basket){
        sum+= item.price * item.count ;
        quantity += item.count ;
        name += item.title + ' ';
    } 
    console.log('Всего товаров в корзине ' + q + '.' + name + 'Общее количество выбранных позиций товаров составляет шт.:' + quantity + '.' + 'Стоимость всех выбранных товаров в корзине составляет ,руб.:' + sum + '.');
} 
countBasketPrice();