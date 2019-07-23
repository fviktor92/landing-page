import React from 'react';
import Item from './Item.js';

class TitleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiKey: '87dfa1c669eea853da609d4968d294be',
            url: this.props.url,
            data: [],
            mounted: false
        }
    }

    loadContent = () => {
        let requestUrl = 'https://api.themoviedb.org/3/' + this.state.url + '&api_key=' + this.state.apiKey;
        console.log(requestUrl);
        fetch(requestUrl)
            .then((response) => {
                return response.json();
            })
            .then((jsondata) => {
                this.setState({ data: jsondata });
            })
            .catch((err) => {
                console.log("There was an error" + err);
            });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.url !== this.state.url && newProps.url !== '') {
            this.setState({ mounted: true, url: newProps.url }, () => {
                this.loadContent();
            });
        }
    }

    componentDidMount() {
        if (this.state.url !== '') {
            this.loadContent();
            this.setState({ mounted: true });
        }
    }

    render() {
        let titles = '';
        if (this.state.data.results) {
            titles = this.state.data.results.map(function (title, i) {
                if (i < 5) {
                    let name = '';
                    let backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
                    if (!title.name) {
                        name = title.original_title;
                    } else {
                        name = title.name;
                    }

                    return (
                        <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
                    );
                } else {
                    return (<div key={title.id}></div>);
                }
            })
        }

        return (
            <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper">
                        {titles}
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleList;