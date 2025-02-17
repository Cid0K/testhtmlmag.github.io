const products = [
    {
        "id": 1,
        "name": "Делан 19л.",
        "imageUrl": "static/images/1.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 220.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    },
    {
        "id": 2,
        "name": "Делан 6л.X2",
        "imageUrl": "static/images/2.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 230.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    },
    {
        "id": 3,
        "name": "Делан 10л.",
        "imageUrl": "static/images/3.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 230.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    },
    {
        "id": 4,
        "name": "Помпа механ.",
        "imageUrl": "static/images/4.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 230.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    },
    {
        "id": 5,
        "name": "Помпа аккум.",
        "imageUrl": "static/images/5.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 230.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    },
    {
        "id": 6,
        "name": "Комбо набор",
        "imageUrl": "static/images/6.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 230.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    },
    {
        "id": 7,
        "name": "Санация",
        "imageUrl": "static/images/7.png",
        "prices": {
            "Архангельск": 230.0,
            "Березник": 230.0,
            "Каргополь": 230.0,
            "Череповец": 230.0,
            "Данилов": 230.0,
            "Емецк": 230.0,
            "Харовск": 230.0,
            "Холмогоры": 230.0,
            "Кичменгский Городок": 230.0,
            "Коноша": 230.0,
            "Коряжма": 230.0,
            "Котлас": 230.0,
            "Мирный": 230.0,
            "Москва": 230.0,
            "Никольск": 230.0,
            "Новодвинск": 230.0,
            "Няндома": 230.0,
            "Нюксеница": 230.0,
            "Октябрьский": 230.0,
            "Пинега": 230.0,
            "Плесецк": 230.0,
            "Пречистое": 230.0,
            "Северодвинск": 230.0,
            "Североонежск": 230.0,
            "Шенкурск": 230.0,
            "Сольвычегодск": 230.0,
            "Тарногский Городок": 230.0,
            "Тотьма": 230.0,
            "Великий Устюг": 230.0,
            "Вельск": 230.0,
            "Вологда": 230.0,
            "Воронеж": 230.0,
            "Вытегра": 230.0,
            "Ярославль": 230.0
        }
    }
];