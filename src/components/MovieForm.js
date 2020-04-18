import React from 'react';
import axios from 'axios';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
    }
    
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Ton film "${res.title}" a bien été ajouté frérot !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout de ton film : ${e.message}`);
            });
    }
    
    render() {
        return (
            <div className="MovieForm">
                <h1>Ajoute ton film préféré frérot !</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Fais moi rêver</legend>
                        <div className="form-data">
                            <label htmlFor="title">Titre du film</label>
                            <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Url du poster</label>
                            <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Ton avis sur ce film</label>
                            <textarea
                            type="textarea"
                            rows="5"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Matte ça gros !" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default MovieForm;
