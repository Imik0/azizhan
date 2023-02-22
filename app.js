const express = require('express')

const app = express()

app.set('view engine','ejs')

app.use('/contact', function (request, response) {
    response.render('contact', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['azizbakryev123@gmail.com', 'zhandoslox228@gmail.com'],
        phone: '+77770136333',
    })
})
app.use('/fio', function (request, response) {
    response.render('fio', {
        f: 'Бакрыев',
        i: 'Азизжан',
        p: '+77770136333',
        m: 'Я очень хороший парень увлекаюсь машинами Если вы поставите 80 будет отлично для меня)',
        s: 'Я учился в ЦАТЭК у меня диплом програмиста но я поступил сюда чтобы в армии не отпинали',
        l: 'Русский,Казахский,Английский(нет)',
    })
})
app.use('/homePage', function (request, response) {
    response.render('homePage')
})
app.listen(5000)   