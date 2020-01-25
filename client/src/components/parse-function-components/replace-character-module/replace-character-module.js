import React, { Component } from 'react';

import './replace-character-module.css';

class ReplaceCharacterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replaceCharacter: '',
            insertCharacter: ''
        };
    }

    handleReplaceCharacter = e => {
        this.setState({
            replaceCharacter: e.target.value
        })
    }

    handleInsertCharacter = e => {
        this.setState({
            insertCharacter: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted character!');
        // Future: be able to delete a certain number of instances?
        const { parsedText } = this.props;
        const { replaceCharacter, insertCharacter } = this.state;

        let finalText = parsedText;
        while (finalText.indexOf(replaceCharacter) !== -1 ) {
            finalText = finalText.replace(replaceCharacter, insertCharacter);
        }
        console.log(finalText);

    }

    render() {
        const { parsedText } = this.props;

        return (
            <div className="replace-character-function">
                <h4 className="black-character"><b>REPLACE TEXT</b></h4>
                <p>{parsedText}</p>
                <div className="replace-character-card card white">
                    <div className="replace-character-card-content card-content black-character">
                        <span className="card-title center">Module: Replace Characters</span>
                    </div>
                    <div className="row">
                        <div className="replace-character-delete col s12">
                            <span>Replace the characters: </span>
                            <div className="replace-character-user-input input-field inline">
                                <input
                                    type="text"
                                    id="replace-delete-input"
                                    onChange={this.handleReplaceCharacter}
                                />
                                <label htmlFor="replace-delete-input"></label>
                            </div>
                            <span>With the characters: </span>
                            <div className="replace-character-user-input input-field inline">
                                <input
                                    type="text"
                                    id="replace-insert-input"
                                    onChange={this.handleInsertCharacter}
                                />
                                <label htmlFor="replace-insert-input"></label>
                            </div>
                        </div>
                    </div>

                    <div className="card-action preview-submit">
                        <span>Instances: </span>
                        <span>Every Instance</span>
                    </div>
                    <div className="card-action preview-submit">
                        <a href="!#">Preview changes</a>
                        <a
                            href="!#"
                            onClick={this.handleSubmit}
                        >Submit</a>
                    </div>
                </div>
            </div>
        );
    };
};

export default ReplaceCharacterModule;