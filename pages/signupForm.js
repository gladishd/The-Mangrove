import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React from 'react'
import swal from 'sweetalert'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFields: null
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate() {
    console.log(this.state.showFields)
  }

  onSubmit(e) {
    e.preventDefault()
    swal("Is this you? John Doe, Democrat, Pennsylvania Senator-you'll have a base rudimentary profile if you like.", {
      buttons: {
        cancel: "Cancel my new candidacy!",
        catch: {
          text: "Yes, streamline signup with more verification!",
          value: "catch",
        },
        signup: true,
      },
    })
      .then((value) => {
        switch (value) {

          case "signup":
            swal("Thank you for making this possible and for finding a way to, instead of automating this, find easy-to-access info on the political sphere.");
            break;

          case "catch":
            swal("Provide info like identity/background checks that will have to be verified!", "After it's verified, you'll have full access to your already-existing profile and can add stuff like a detailed bio, make posts, etc...", "success");
            break;

          default:
            swal("You could submit information about new candidates, as well as have those new candidates create profiles for themselves. If you're over-whelmed or this is too much information jam-packed into one page then take a break and try again.");
        }
      });
  }
  render() {
    return (
      <Form style={{
        display: 'flex',
        textAlign: 'justify',
        justifyContent: 'space-between',
        height: '100vh',
        flexDirection: 'column',
        margin: '10em'
      }}
        onSubmit={e => this.onSubmit(e)}
      >
        <Form.Group className="mb-3" name="email" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onChange={e => this.setState({
            showFields: !this.state.showFields
          })} label="Sign up as a governor, senator, representative, state senator, or state representative." name="checkbox" />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>New Candidate</Form.Label>
          <Form.Control placeholder="New Politician Signing Up" disabled={!this.state.showFields} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Match me with a profile already created</Form.Label>
          <Form.Select disabled={!this.state.showFields}>
            <option>A group of people</option>
            <option>Sign me up manually</option>
            <option>County Senator</option>
            <option>Town Governor</option>
            <option>State Senator</option>
            <option>State Representative</option>
            <option>Country Representative</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Sign up for information on new candidates and voters" disabled={!this.state.showFields} />
        </Form.Group>


        <Form.Label htmlFor="inputPassword5">Biography</Form.Label>
        <Form.Control
          as="textarea"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          rows='10'
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your biography must be 18-20 paragraphs long, contain letters and numbers, and must not contain spaces, special characters, or emoji unless you're a politician. Especially since we're going to scrape data on all these politicians we need to find the centralized form and that form is you.
        </Form.Text>



        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default SignupForm;
