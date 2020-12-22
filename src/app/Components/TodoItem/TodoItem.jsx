import React from 'react';
import './TodoItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import cx from 'classnames';
import Checkbox from "react-custom-checkbox";


const TodoItem = ({text, completed, onChange, onRemove}) => {
    return (
        <div className="border-list block-size">
            <div className="col" style={{
                padding: 0,
            }}>
                <Checkbox
                    borderWidth={1}
                    checked={completed}
                    onChange={onChange}
                    icon={<FontAwesomeIcon icon={faCheck} color="green" size="xs"/>}
                    borderRadius={15}
                    borderColor="#cccccc"
                    label={text}
                    labelStyle={
                        {margin: 10}
                    }
                    labelClassName={cx('text', completed && 'text todo-item-checked')}
                />
            </div>
            <div className="col">
                <div
                    className="d-flex justify-content-end trash"
                    onClick={onRemove}
                >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </div>
            </div>

        </div>
    );
};

export default TodoItem;