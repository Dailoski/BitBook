import React from "react";
import dataObj from "../services/dataService";
import { Link } from "react-router-dom";
import EditProfile from "./modalEditProfile";
import Login from "./loginComponents/login";
import PropTypes from "prop-types";
// MainPage = Feed Page

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.toggleModal = this.toggleModal.bind(this);
        this.getProfileSucces = this.getProfileSucces.bind(this);
    }
    initialState() {
        return {
            isOpen: false,
            name: "Nicolas Cage",
            picture: "profile.png",
        };
    }
    componentWillMount() {

        dataObj.getProfile(this.getProfileSucces, this.getProfileFail);
    }

    getProfileSucces(a) {
        console.log(a);
        if (a.avatarUrl) {
            this.setState({
                name: a.name,
                picture: a.avatarUrl,
                about: a.about,
                aboutShort: a.aboutShort,
                commentsCount: a.commentsCount,
                postsCount: a.postsCount
            });
        }else {
            this.setState({
                name: a.name,
                about: a.about,
                aboutShort: a.aboutShort,
                commentsCount: a.commentsCount,
                postsCount: a.postsCount
                
            });
        }
    }
    getProfileFail(a) {
        console.log(a);
        console.log("FAIL");
    }
    toggleModal()  {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { name, picture, edit} = this.state;
        
        return (
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="profile-container">
                            <div className="img-container">
                                <img src={picture} />
                            </div>
                            <h2>{name}</h2>
                            <button onClick={this.toggleModal}>
          Open the modal
                            </button>

                            <EditProfile show={this.state.isOpen}
                                onClose={this.toggleModal}>
                                <div style={{ "color": "red" }}>
                                    <Login/>
                                </div>
                            </EditProfile>
                            <p>Beogradski institut za tehnologiju – BIT je škola za programiranje osnovana u Beogradu, s ciljem
                                da svoje polaznike uči praktičnim i primenljivim znanjima u IT industriji. Tehnički deo programa je FrontEnd Stack,
                                najčešće tražen od strane poslodavaca.
                                Pored tehničkog obrazovanja, u BITu se uči i kako funkcioniše IT industrija i kako pronaći svoje mesto u njoj.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;