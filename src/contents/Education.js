import React, {Component} from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Computer Engineering" where="Pince of Songkla University" from="2014" to="2019"/>
                <Widecard title="High School" where="Woranari Chaloem Songkhla School" from="2009" to="2014"/>

            </div>
        )
    }
}

export default Education;