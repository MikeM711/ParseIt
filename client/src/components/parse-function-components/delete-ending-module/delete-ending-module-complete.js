import React, { Component } from 'react';
import { connect } from 'react-redux';

import './delete-ending-module.css';
import * as actions from '../../../actions';

class DeleteEndingModuleComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stoppingCharacters: '',
        };
    }

    componentDidMount() {
        // handle official output text and convert it in here
        const { outputText, stoppingCharacters, updateOutputText } = this.props;
        this.setState({
            stoppingCharacters: stoppingCharacters,
        })
        console.log('delete-ending-module component mounted');

        const finalText = [];
        for (let i = 0; i < outputText.length; i++) {

            // begin by splitting lines into array items, and reverse those items
            const textLines = outputText[i].text.split('\n').reverse();
            let newText = [];
            let found = false;
            for (let i = 0; i < textLines.length; i++) {

                let stoppingCharIdx = textLines[i].lastIndexOf(stoppingCharacters);

                if (found === false && textLines[i] === stoppingCharacters && stoppingCharacters == "") {
                    found = true;
                } else if (found === false && stoppingCharIdx !== -1) {
                    found = true;
                    // don't push empty lines to the output if the user deletes an entire line
                    if (stoppingCharIdx !== 0) {
                        newText.push(textLines[i].slice(0, stoppingCharIdx));
                    }

                } else if (found === true) {
                    newText.push(textLines[i]);
                }

            }
            const finalTextContainer = newText.reverse().join('\n');

            finalText.push({
                inputContainer: outputText[i].inputContainer,
                text: finalTextContainer,
                name: outputText[i].name
            })

        }

        updateOutputText(finalText);
    }

    handleDelete = (e) => {
        e.preventDefault();
        const { handleDeleteModule, id } = this.props;
        handleDeleteModule(id);
    }

    render() {
        const { stoppingCharacters } = this.props;
        const { id } = this.props;
        return (
            <div className="delete-ending-function">
                <h4 className="black-character"><b>DELETE TEXT</b></h4>
                <div className="delete-ending-card card white">
                    <div className="delete-ending-card-content card-content black-character">
                        <button
                            className="waves-effect waves-light btn #42a5f5 red lighten-1 submit-form-button"
                            onClick={this.handleDelete}
                        >Delete</button>
                        <span className="card-title center">Module: Delete Last Set of Characters until End</span>
                    </div>
                    <div className="row">
                        <div className="delete-ending-complete col s12">
                            <p>Delete text from the last set of the characters: "{stoppingCharacters}", until the end</p>
                        </div>
                    </div>
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

export default connect(mapStateToProps, actions)(DeleteEndingModuleComplete);