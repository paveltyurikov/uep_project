import React, {PureComponent} from 'react';
import {Field} from 'formik'
import classnames from 'classnames'
import FormInput from 'components/Form/FormInput'
import FieldError from './Error'
import ImageInput from './ImageInput'
import TextArea from "./textarea";
import MaskedField from './MaskedInput'
import ReactSelect from './ReactSelect'


class FastFormField extends PureComponent {
    static defaultProps = {
        type: "text",
    };
    getComponent = () => {
        switch (this.props.fieldType) {
            case "textarea":
                return TextArea;
            case "image":
                return ImageInput;
            case "reactSelect":
                return ReactSelect;
            case "masked":
                return MaskedField;
            default:
                return Field;
        }
    };

    render() {
        const FieldInput = this.getComponent();
        const {fieldType, className, style, ...fieldProps} = this.props;

        return (
            <FormInput
                style={style}
                name={fieldProps.name}
                className={classnames(
                    {[className]: className},
                    {[`formInput--${fieldProps.type}`]: fieldProps.type},
                )}
            >
                <FieldInput
                    id={fieldProps.name}
                    className={'formInput__input'}
                    placeholder={fieldProps.label}
                    {...fieldProps}
                />
                <FieldError name={fieldProps.name}/>
            </FormInput>
        )
    }
}

export default FastFormField
