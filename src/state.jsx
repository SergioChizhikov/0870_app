const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanov@mail.ru",
    id: "1",
    about: "Тут рассказываю...",
    avatar: "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
}

const users = {
0: { name: 'Ипатий', lastname: 'Ельцин' },
1: { name: 'Валерия', lastname: 'Ялбачевa' },
2: { name: 'Ксения', lastname: 'Тетеринa' },
3: { name: 'Нина', lastname: 'Ельцинa' },
4: { name: 'Владислава', lastname: 'Енютинa' },
5: { name: 'Юлия', lastname: 'Ялбачевa' },
6: { name: 'Петр', lastname: 'Праздников' },
7: { name: 'Владислав', lastname: 'Вольпов' },
8: { name: 'Константин', lastname: 'Вольпов' },
9: { name: 'Нина', lastname: 'Тетеринa' },
10: { name: 'Владислав', lastname: 'Ялбачев' }
}

export function getUser(){
    return user;
}
export function getUsers(){
    return users;
}