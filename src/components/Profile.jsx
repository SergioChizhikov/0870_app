import React from 'react';


const Profile = (props)=>{
    let user = props.function();
    return (<div className="row">
        <div className="col-sm-3">
            <img src={user.avatar} width="90%" alt=""/>
        </div>
        <div className="col-sm-9">
            <h1>{user.name} {user.lastname}</h1>
            <h3>Обо  мне</h3>
        <h3>{user.about}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus et, impedit inventore molestiae recusandae
                repudiandae vero? Cum error facere, fugit incidunt praesentium provident quasi quos repellendus, reprehenderit temporibus unde?
            </p>
        </div>
    </div>
    )
}
export default Profile;