import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxlength, requiredField } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControl/TextArea';
import { AddMassageFormType } from '../Dialogs';

const length =  maxlength(50);

const AddMassageForm: React.FC<InjectedFormProps<AddMassageFormType>> = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ TextArea } name={ 'newMassageBody' } validate={ [ requiredField,length ] }/>
            </div> 
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const DialogReduxForm = reduxForm<AddMassageFormType>({ form: 'dialog' })(AddMassageForm);