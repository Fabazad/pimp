import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleModal from "components/Modals/SimpleModal.jsx";
import AddEditStepModal from "components/Modals/AddEditStepModal.jsx";
import { Link } from "react-router-dom";

// index page sections
import { Button, Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

class EditStep extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            steps: []
        };
        this.addStep = this.addStep.bind(this);
    }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  addStep(step) {
    const steps = this.state.steps;
    steps.push(step);
    this.setState({steps: steps})
  }

  render() {
      const text = `test \n frefu \n frefu \n frefu \n frefu \n frefu \n frefu \n frefu \n frefu`;
    return (
      <>
        <DemoNavbar />
        <main ref="main" className="mt-56px">
            <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
            <Container className="mt-2">
                <Row>
                    <Col className="text-left">
                        <Button color="secondary" type="button">Previous</Button>
                    </Col>
                    <Col className="text-right">
                        <Button color="secondary" type="button">Next</Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-center">
                        <h2 className="text-default">Edit Vibe {this.props.match.params.id}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SimpleModal buttonTitle="Notes" title="Vibe Notes" text={text}></SimpleModal>
                    </Col>
                    <Col>
                        <Button size="sm" color="danger" className="w-100">Update Video</Button>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <label>Choose the next step</label>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col xs="12">
                        <Link to={'/edit-step/' + '1'}>
                            <Button className="w-100 my-1" size="lg" type="button" color="primary">fuedjgfbyvuehd fdvx</Button>
                        </Link>
                        <AddEditStepModal onAdd={this.addStep}></AddEditStepModal>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="12" className="text-center">
                        <Button type="button" color="success">Save</Button>
                    </Col>
                </Row>
            </Container>
        </main>
      </>
    );
  }
}

export default EditStep;
