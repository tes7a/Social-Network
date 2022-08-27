import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxlength, requiredField } from '../../../../utils/validators/validators';
import { TextArea } from '../../../common/FormsControl/TextArea';
import { MyPostFormType } from '../MyPosts';

const length =  maxlength(10);

const MyPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
               <Field component={ TextArea } name={ "MyPosts" } validate={ [requiredField,length] }/>
            </div>
            <button>Add post</button>
            <div>
                New posts
            </div>
        </form>
    )
}

export const MyPostsReduxForm = reduxForm<MyPostFormType>({ form: "MyPosts" })(MyPostForm);