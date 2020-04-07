import React from 'react';
import Button from '@material-ui/core/Button';
class ToggleFormVisibility extends React.Component {
    toggleVisibility = () => {
        if (this.state.showForm = false) {
            this.setState = ({
                showForm: true
            });
        } else {
            this.setState = ({
                showForm: false
            });
        }
    }
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = ({
            showForm : false
        });
    }
    
    render() {
        
        if(this.state.showForm){
            return (
                <div>
                    <form onSubmit = {this.toggleVisibility}>
                    <Button variant="contained" color="primary" >
                        Add Laws
                    </Button>
                    <h1>You see me now anything</h1>
                    </form>
                </div>
            );
        }else{
            return (
                <div>
                    <form onSubmit = {this.toggleVisibility}>
                    <Button variant="contained" color="primary" >
                        Add Laws
                    </Button>
                    <h1>You won't see anything</h1>
                    </form>
                </div>
            );
        }
       
    }
}

export default ToggleFormVisibility;