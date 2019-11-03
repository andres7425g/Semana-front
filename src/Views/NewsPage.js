
import React, { Component } from 'react'
import News from "../components/News";
import axios from "axios";
import DOMPurify from 'dompurify';

export default class NewsPage extends Component {

    state = {
        news1: [],
        news2: [],
        id: null
    }

    componentDidMount() {
        axios.get("https://iris.net.co/products/semana/items/620853").then(res => {
            this.setState({ news1: res.data.data });
        });
        axios.get("http://iris.net.co/products/semana/items/633525").then(res => {
            this.setState({ news2: res.data.data });
        });


        const { match: { params } } = this.props;

        this.setState({ id: params.id });

    }

    render() {


        const id1 = this.state.news1.id;
        const id2 = this.state.news2.id;

        if(id1 == this.state.id){
            var id = id1;
            var title = this.state.news1.title;
            var about = this.state.news1.about;
            var text = this.state.news1.text;
            text = <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}}></div>
        }else if(id2 == this.state.id){
            var id = id2;
            var title = this.state.news2.title;
            var about = this.state.news2.about;
            var text = this.state.news2.text;
            text = <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}}></div>
        }else{
            var title = "News not available";
        }


        return (
            <div>
                <News
                    tittle={title}
                    id={id}
                    about={about}
                    text={text}

                />
            </div>
        )
    }
}
