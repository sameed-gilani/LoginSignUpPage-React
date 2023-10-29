import {Formik} from 'formik';
import * as Yup from 'yup';
import {string} from "yup";


export default function FormLoginSignup(props) {

    const getInitialValues = () => {

        if (props.formName === 'login') {
            return {
                email: '',
                password: ''
            }
        } else {
            return {
                name: '',
                initial:'',
                email: '',
                password: '',
                confirmPassword:''
            }
        }

    }

    const getValidationSchema = () => {

        if (props.formName === 'login') {
            return {
                email: string().required().email(),
                password: string().required()
            }
        } else {
            return {
                name: string().required(),
                initial: string().test('Incorrect Initial',
                    function (value){
                        return value.toLocaleLowerCase() === this.parent.name[0].toLocaleLowerCase()
                    },
                ),
                email: string().required().email(),
                password: string().required(),
                confirmPassword: string().oneOf([Yup.ref('password')], "Password must match")
                // confirmPassword: string().test(
                //     function (value){
                //         return value === this.parent.password
                //     }
                // )

            }
        }

    }

    const handleFormSubmit = (values) => {
        console.log(values)

    }

    return (
        <>

            <Formik initialValues={getInitialValues()}
                    onSubmit={handleFormSubmit}
                    validationSchema={Yup.object().shape(getValidationSchema(props.formName))}
                    validateOnChange={false}
            >


                {(formik) => {
                    function createInput(formFields) {

                        const fields = []
                        for (let field in formFields) {
                            fields.push(field)
                        }


                        //[name,email,password]

                        let listId = 0
                        const listFields = []

                        fields.map((field) =>
                            listFields.push(
                                <div key={++listId}>

                                    <label>{field}:</label>
                                    <input value={formik.values[field]} name={field} onChange={(event) => {
                                        formik.setFieldValue(field.toString(), event.target.value)
                                    }}/>
                                    <label style={{color: 'red'}}>{formik.errors[field]}</label>

                                </div>
                            )
                        );
                        // console.log(listFields)
                        return (
                            <> {listFields} </>
                        );
                    }


                    return (
                        <>
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                formik.handleSubmit()
                            }}>

                                {createInput(formik.initialValues)}


                                <button type='submit'> Sign Up!</button>
                            </form>
                        </>
                    );
                }}


            </Formik>

        </>
    );


}


{/*<label>Name:</label>*/
}
{/*<input value={formik.values.name} name="Name" onChange={(event) => {*/
}
{/*    formik.setFieldValue('name', event.target.value)*/
}
{/*}}/>*/
}

{/*<label>Email:</label>*/
}
{/*<input value={formik.values.email} name="Name" onChange={(event) => {*/
}
{/*    formik.setFieldValue('email', event.target.value)*/
}
{/*}}/>*/
}

{/*<label>Password:</label>*/
}
{/*<input value={formik.values.password} name="Name" onChange={(event) => {*/
}
{/*    formik.setFieldValue('password', event.target.value)*/
}
{/*}}/>*/
}

