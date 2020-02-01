import React, { Component } from 'react';
import { connect } from 'react-redux';

import './replace-character-module.css';
import * as actions from '../../../actions';
import { replaceAndInsertChar } from './replace-character-module-functions';

class ReplaceCharacterModuleComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replaceCharacter: this.props.replaceCharacter,
            insertCharacter: this.props.insertCharacter,
        };
    }

    componentDidMount() {
        // handle output text and convert it in here
        const { outputText, replaceCharacter, insertCharacter, updateOutputText } = this.props;
        const finalText = replaceAndInsertChar(outputText, replaceCharacter, insertCharacter);
        updateOutputText(finalText);
    }

    handleDelete = (e) => {
        e.preventDefault();
        const { handleDeleteModule, id } = this.props;
        handleDeleteModule(e, id);
    }

    render() {
        const { insertCharacter, replaceCharacter } = this.state;
        const { id } = this.props;
        return (
            <div className="replace-character-function">
                <h4 className="black-character"><b>REPLACE TEXT</b></h4>
                <div className="replace-character-card card white">
                    <div className="replace-character-card-content card-content black-character">
                        <button
                            className="waves-effect waves-light btn #42a5f5 red lighten-1 submit-form-button"
                            onClick={this.handleDelete}
                        >Delete</button>
                        <span className="card-title center">Module: Replace Characters</span>
                    </div>
                    <div className="row">
                        <div className="replace-character-delete col s12">
                            <span>Replace the characters: </span>
                            <div className="replace-character-user-input input-field inline">
                                <input
                                    type="text"
                                    id={`replace-delete-input ${id}`}
                                    onChange={this.handleReplaceCharacter}
                                    value={replaceCharacter}
                                    disabled={true}
                                />
                                <label htmlFor="replace-delete-input"></label>
                            </div>
                            <span>With the characters: </span>
                            <div className="replace-character-user-input input-field inline">
                                <input
                                    type="text"
                                    id={`replace-insert-input ${id}`}
                                    onChange={this.handleInsertCharacter}
                                    disabled={true}
                                    value={insertCharacter}
                                />
                                <label htmlFor="replace-insert-input"></label>
                            </div>
                        </div>
                    </div>

                    <div className="disabled-actions"></div>

                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        inputText: state.textRed.inputText,
        outputText: state.textRed.outputText,
        previewToggle: state.textRed.previewToggle,
        deletionsPreview: state.textRed.deletionsPreview,
        additionsPreview: state.textRed.additionsPreview
    };
};

export default connect(mapStateToProps, actions)(ReplaceCharacterModuleComplete);