import React from 'react';


const Settings = (props)=>{
    let user = props.function();


    return (
        <div className="container my-5">
            <p>Имя: <span>{user.name}</span>
                <span className="edit-btn">[Изменить]</span>
                <span className="save-btn" hidden data-item="">[Сохранить]</span>
                <span className="cancel-btn" hidden>[Отменить]</span>
            </p>

            <p>Фамилия: <span>{user.lastname}</span>
                <span className="edit-btn">[Изменить]</span>
                <span className="save-btn" hidden data-item="">[Сохранить]</span>
                <span className="cancel-btn" hidden>[Отменить]</span>
            </p>
</div>
    )
}

export default Settings;