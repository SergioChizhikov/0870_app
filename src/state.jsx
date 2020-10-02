const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanov@mail.ru",
    id: "1",
    about: "Тут рассказываю...",
    avatar: "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
}

const users = {
0: { name: 'Ипатий', lastname: 'Ельцин', id:4 },
1: { name: 'Валерия', lastname: 'Ялбачевa', id:6 },
2: { name: 'Ксения', lastname: 'Тетеринa', id:9 },
3: { name: 'Нина', lastname: 'Ельцинa', id:7 },
4: { name: 'Владислава', lastname: 'Енютинa', id:2 },
5: { name: 'Юлия', lastname: 'Юлбачевa', id:12 },
6: { name: 'Петр', lastname: 'Праздников', id:11 },
7: { name: 'Владислав', lastname: 'Вольпов', id:18 },
8: { name: 'Константин', lastname: 'Вольпов', id:19 },
9: { name: 'Нина', lastname: 'Тетеринa', id:14 },
10: { name: 'Владислав', lastname: 'Яблочков', id:20 }
}

export function getUser(userId) {
    for (let i = 0; i < Object.keys(users).length; i++)
        if (users[i].id == userId)
            return users[i];
    return user;
}
export function getUsers(){
    return users;
}
