import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Avatar from '../../assets/avatar.png';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Create account</h3>

          <div className="form-group">
            <label>Profile Picture</label>
                <Col xs={6} md={4}>
                  <Image id="avatar" src={Avatar} roundedCircle />
                </Col>
            <Form>
              <Form.File
                id="custom-file"
                label="Select profile picture"
                custom
              />
            </Form>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="form-group">
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
            </div>
          </div>

          <div className="form-group">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
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
              </Form.Control>
              </Form.Group>
          </div>

          <div className="form-group">
            <Form.Group controlId="distance-range-control">
              <Form.Label>Distance range interest</Form.Label>
              <div>
              <p>Max:</p>
              </div>
              <Form.Control type="range" custom />
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
