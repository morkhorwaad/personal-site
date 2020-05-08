import React, {Component} from 'react';

class contactForm extends Component {

    state = {
        name: "", 
        from: "", 
        message: "",
        hasSubmitted: false,
        error: false
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

    handleSubmit = event => {
        event.preventDefault()

        const data = {
            "name": this.state.name, 
            "from": this.state.from, 
            "message": this.state.message
        }

        const body = JSON.stringify(data);
        console.log(body);

        fetch('http://localhost:3000/contact', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', 
            body
        }).then(e => {
            if(e.status === 200) {
                this.setState({"hasSubmitted": true})
            } 
        }).catch(error => {
            console.log(error);
            this.setState({
                "hasSubmitted": false, 
                "error": true
            })
        });
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name" >
                    Name
                    <input 
                        name="name" 
                        id="name" 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                </label>

                <label htmlFor="from">
                    Email
                    <input 
                        name="from" 
                        id="from" 
                        type="email" 
                        value={this.state.from}
                        onChange={this.handleInputChange}/>
                </label>

                <label htmlFor="message">
                    What's up?
                    <textarea 
                        name="message" 
                        id="message" 
                        height="5" 
                        value={this.state.message}
                        onChange={this.handleInputChange}/>
                </label>

                <button type="submit">Send it!</button>
                <input type="reset" value="Clear" />
                </form>

                { this.state.hasSubmitted && <h2> Thank you for your message! </h2> }
                { this.state.error && <h2> Oh boy something happened...might want to try again. </h2> }
            </>
        )
    }
}

export default contactForm; 