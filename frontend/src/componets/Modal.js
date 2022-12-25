import React, { Component } from 'react'

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    

} from 'reactstrap';

class CustomModal extends Component {
        constructor(props) {
            super(props);
            this.state = {
                activeItem: this.props.activeItem
            };
        }

        // To check if the check is checked
    handleChance = e => {
        let { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        const activeItem = { ...this.stare.activateItem, [name]: value};
        this.setState({ activeItem })
    };

    render() {
        const { toggle, onSave } = this.props;
        
        return (
            <Modal isOpen={true} toggle={toggle} >
                <ModalHeader toggle={toggle}> Task Item</ModalHeader>
                <ModalBody>
                    <form>
                        <FormGroup>
                            <Label for='title'></Label>
                            <Input
                                type='text'
                                name='title'
                                value={this.state.activeItem.title}
                                onChange={this.handleChance}
                                placeholder='Enter Task title'
                            />
                        </FormGroup>

                        {/* 2° description label */}
                        <FormGroup>
                            <Label for='description'> Description </Label>
                            <input
                                type='text'
                                name='description'
                                value={this.state.activeItem.description}
                                onChange={this.handleChance}
                                placeholder='Enter Task Description'
                            />
                        </FormGroup>

                        {/* 3 completed label */}
                        <FormGroup>
                            <Label for='completed'>
                                <input
                                    type='checkbox'
                                    name='completed'
                                    checked='{this.state.activateItem.completed}'
                                    onChange={this.handleChance}
                                />
                            </Label>
                        </FormGroup>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <button color='sucess' onClick={() => onSave (this.state.activeItem)}>  Save </button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CustomModal
