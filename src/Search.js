import { Form, Input } from 'semantic-ui-react'

const Search = ({ league, handleChange, handleSubmit}) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Search Any League</label>
                    <Input name="League"
                    type = "text"
                    className='ui focus input'
                    icon = 'search'
                    placeholder = 'League'
                    onChange = {handleChange}
                    />
                </Form.Field>
                <button onClick={handleSubmit}>Search</button>
            </Form>
        </div>
    )
}

export default Search