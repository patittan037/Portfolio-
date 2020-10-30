import React, {Component} from 'react'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render(){
        return (
            <div className="condiv home">
                <img src="https://scontent.furt2-1.fna.fbcdn.net/v/t1.0-9/119063431_3186982834683244_5918032308007045494_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=T5baVy0xDYcAX_1yd46&_nc_ht=scontent.furt2-1.fna&oh=4670e2e855b34e73749b6803b0407831&oe=5FC2A44A" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Patitta','I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect"/>
            </div>
        );
    }
}

export default Home;