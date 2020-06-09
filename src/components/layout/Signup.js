import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Redirect} from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Signup extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      avatar: 'http://localhost:3000/static/media/avatar.e42dbe1d.png',
      name: 'Name',
      email: 'name@example.com'
    };
  }

  componentDidMount() {

    var uriParams = this.props.location.search.split("=")
    var code = uriParams[1]

    var redirectUri = 'http%3A%2F%2Flocalhost%3A3000%2Fsign-up'
    var encodedKeys = 'Basic MTlmYzhhODQzMzAzNGYxNzkwMGQzODMwMTZhZmZhMDY6ZGY3MDM4MjY2MmNlNDQ0MGFmMGM0N2I4YzBmNWU3ODM='

    var accessToken = 'Bearer '

    var bodyStr = 'grant_type=authorization_code'
      + '&code=' + code
      + '&redirect_uri=' + redirectUri;
  
    fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": encodedKeys
      },
      body: bodyStr
    })
    .then(res => res.json())
    .then(data => {

      //if (data.accessToken != null) {

        accessToken = accessToken + data.access_token
        cookies.set('mm_atoken', data.access_token, { path: '/' });

        fetch("https://api.spotify.com/v1/me", {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + data.access_token
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data != null){
            this.setState({avatar: data.images[0].url})
            this.setState({name: data.display_name})
            this.setState({email: data.email})
          }
        })

      //}

    })
    .catch(console.log);
    
  }

  render() {
    return (
      <div className="auth-inner">
        <form>
          <h3>Create account</h3>

          <div className="form-group">
            <Col xs={6} md={4}>
              { this.state.avatar !== '' && <Image id="avatar" src={this.state.avatar} roundedCircle /> }
            </Col>
          </div>
          <div className="form-group">
            <label>Name</label>
            { this.state.name !== 'Name' && <input type="text" className="form-control" defaultValue={this.state.name} /> }
            { this.state.name === 'Name' && <input type="text" className="form-control" placeholder={this.state.name} /> }
          </div>

          <div className="form-group">

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              { this.state.email !== 'name@example.com' && <Form.Control type="email" defaultValue={this.state.email} /> }
              { this.state.email === 'name@example.com' && <Form.Control type="email" placeholder={this.state.email} /> }
            </Form.Group>

            <label>Age</label>
            <input type="sex" className="form-control" placeholder="Age" />

          </div>

          <div className="form-group">
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </div>

          <div className="form-group">
            <label>Interested in</label>
            <div className="custom-control custom-checkbox">
              <div>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="male-interest-check"
                />
                <label
                  className="custom-control-label"
                  htmlFor="male-interest-check"
                >
                  Men
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="female-interest-check"
                />
                <label
                  className="custom-control-label"
                  htmlFor="female-interest-check"
                >
                  Women
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="other-interest-check"
                />
                <label
                  className="custom-control-label"
                  htmlFor="other-interest-check"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
          <Form>
            <Form.Group controlId="selectMinAgeForm">
              <Form.Label>Minimum Age</Form.Label>
              <Form.Control as="select">
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Form.Control>
              </Form.Group>
              <Form.Group controlId="selectMaxAgeForm">
              <Form.Label>Maximum Age</Form.Label>
              <Form.Control as="select">
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Form.Control>
              </Form.Group>
          </Form>
          </div>

          <div className="form-group">
          <Form.Group controlId="selectDistanceForm">
              <Form.Label>Distance range interest</Form.Label>
              <Form.Control as="select">
                <option>5km</option>
                <option>10km</option>
                <option>15km</option>
              </Form.Control>
              </Form.Group>
          </div>

          <div className="form-group">
          <Form.Group controlId="selectDistanceForm">
              <Form.Label>City</Form.Label>
              <Form.Control as="select">
                <option>Guadalajara</option>
                <option>Zapopan</option>
                <option>Tlaquepaque</option>
                <option>Tonalá</option>
              </Form.Control>
              </Form.Group>
          </div>

          <Button
            variant="info"
            className="sign-up-btn btn-block"
            type="submit"
          >
            Continue
          </Button>
        </form>
      </div>
    );
  }
}
