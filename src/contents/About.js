import React, {Component} from 'react'
//import profilepic from '../img/profile.jpg';


class About extends Component {
    render(){
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://scontent.furt2-1.fna.fbcdn.net/v/t1.0-9/119063431_3186982834683244_5918032308007045494_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=T5baVy0xDYcAX_1yd46&_nc_ht=scontent.furt2-1.fna&oh=4670e2e855b34e73749b6803b0407831&oe=5FC2A44A" alt="profile" className="profilepic"/>
                <h3>Welcome to My Story</h3>
                <p> My name is Patitta Noojan.
                    My nickname is Prim.
                    I’m graduated from Prince of Songkla University Phuket Campus. 
                    in department of Computer Engineering.
                    I live in Phuket.
                    My hobby is listen music.
                    Nice to meet you.</p>
            </div>
        );
    }
}

export default About;